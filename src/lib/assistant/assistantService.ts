import { studentStore } from "./studentStore";
import { calculateAttendanceMargin, calculateRequiredFatMarks } from "./calculator";
import { ragEngine } from "./ragEngine";
import { ChatResponse } from "./types";

export class AssistantService {
  public async processQuery(userMessage: string, customApiKey?: string): Promise<ChatResponse> {
    const query = (userMessage || "").trim();
    const queryLower = query.toLowerCase();
    const activeProfile = studentStore.getActiveStudent();
    const geminiKey = customApiKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

    let response: ChatResponse;

    // -------------------------------------------------------------
    // INTENT 1: STUDENT PROFILE SWITCHING & ROSTER LOOKUP (77 Students)
    // -------------------------------------------------------------
    if (
      ["switch student", "switch profile", "change student", "change profile", "select student", "lookup student", "find student", "list students", "show students", "all students", "how many students"].some((w) => queryLower.includes(w)) ||
      /^(who is|switch to)\s+/i.test(queryLower)
    ) {
      const allStudents = studentStore.getAllStudents();

      // Check if asking for list of students
      if (["list students", "show students", "all students", "how many students"].some((w) => queryLower.includes(w))) {
        const sample = allStudents.slice(0, 8);
        const sampleText = sample
          .map((s) => `- **${s.name}** (\`${s.reg_no}\`) — *${s.program || "B.Tech"}* (CGPA: ${s.cgpa})`)
          .join("\n");
        response = {
          text: `### 👥 Student Roster (${allStudents.length} Students in Database)\n\nHere is a preview of enrolled student profiles:\n\n${sampleText}\n\n...and ${allStudents.length - sample.length} more students!\n\n💡 *To switch active student or test their records, ask:* \`Switch student to 25BCG10014\` or \`Switch student to Kshitij Singh\`.`,
          widget_type: "info_card",
          intent: "student_roster",
        };
      } else {
        // Search by reg_no or name
        let targetStudent = null;
        const regMatch = query.match(/\b(2[0-9][a-zA-Z]{3}[0-9]{4,5})\b/i);
        if (regMatch) {
          targetStudent = studentStore.getStudentById(regMatch[1]);
        }

        if (!targetStudent) {
          // Try finding by name substring
          for (const s of allStudents) {
            if (queryLower.includes(s.name.toLowerCase()) || queryLower.split(/\s+/).some((w) => w.length > 3 && s.name.toLowerCase().includes(w))) {
              targetStudent = s;
              break;
            }
          }
        }

        if (targetStudent) {
          studentStore.setActiveStudent(targetStudent.id);
          const coursesCount = targetStudent.courses?.length || 0;
          const totAtt = targetStudent.courses?.reduce((sum, c) => sum + (c.attended || 0), 0) || 0;
          const totCls = targetStudent.courses?.reduce((sum, c) => sum + (c.total || 0), 0) || 0;
          const attPct = totCls > 0 ? Number(((totAtt / totCls) * 100).toFixed(1)) : 100.0;
          const nineBadge = targetStudent.is_nine_pointer ? "🌟 (9-Pointer Attendance Exempt)" : "";

          response = {
            text: `### ✅ Active Student Profile Switched!\n\n- **Name:** **${targetStudent.name}**\n- **Registration No:** \`${targetStudent.reg_no}\`\n- **Programme:** ${targetStudent.program || "N/A"} (Sem ${targetStudent.semester || 2})\n- **CGPA:** **${targetStudent.cgpa}** ${nineBadge}\n- **Proctor:** ${targetStudent.proctor || "N/A"} (📍 ${targetStudent.proctor_cabin || "N/A"})\n- **Enrolled Courses:** ${coursesCount} courses (${totAtt}/${totCls} classes • **${attPct}%** attendance)\n\nYou can now ask questions about **${targetStudent.name}'s** attendance, timetable, bunks, and marks!\n\n*(💡 Say \`Switch student to Kumar Harshvardhan\` to return back to your primary profile anytime)*`,
            widget_type: "profile_card",
            widget_data: targetStudent,
            intent: "profile_switched",
          };
        } else {
          response = {
            text: `⚠️ Could not find a student matching that name or registration number.\n\nTry searching with exact registration numbers like \`25BAI10447\`, \`25BCG10014\`, \`25BCY10030\`, or ask \`List all students\`.`,
            intent: "student_not_found",
          };
        }
      }
    }

    // -------------------------------------------------------------
    // INTENT 2: LEAVE REQUESTS & HOSTEL OUTING STATUS
    // -------------------------------------------------------------
    else if (
      queryLower.includes("leave status") ||
      queryLower.includes("my leave") ||
      queryLower.includes("leave application") ||
      queryLower.includes("outing status") ||
      queryLower.includes("leave request") ||
      queryLower.includes("home town leave") ||
      queryLower.includes("leaves applied") ||
      queryLower.includes("hostel leave")
    ) {
      const leaves = studentStore.getLeaveRequests(activeProfile.id);
      if (leaves.length === 0) {
        response = {
          text: `### 📋 Leave Requests for **${activeProfile.name}**\n\nYou currently have no active or historical leave requests on file in the VTOP portal.\n\n💡 *You can apply for Digital Leave or Outing through the VTOP Leave Request module.*`,
          intent: "leave_requests_empty",
        };
      } else {
        const leaveLines = leaves
          .map(
            (l) =>
              `- **${l.leaveTypeName}** (\`${l.appNo}\`)\n  📅 **Dates:** ${l.fromDateTime} to ${l.toDateTime}\n  📍 **Place:** ${l.visitingPlace}\n  🟢 **Status:** \`${l.status.toUpperCase()}\` (Approved by: ${l.approverName})\n  💬 *Reason:* ${l.reason}`
          )
          .join("\n\n");

        response = {
          text: `### 📋 Leave & Outing Applications for **${activeProfile.name}**\n\nFound **${leaves.length}** leave applications in the portal database:\n\n${leaveLines}`,
          widget_type: "leave_card",
          widget_data: leaves,
          intent: "leave_requests",
        };
      }
    }

    // -------------------------------------------------------------
    // INTENT 3: VIT HANDBOOK, RULES, CURFEW, POLICIES & FAQS (PRIORITY CHECK)
    // -------------------------------------------------------------
    else if (["rule", "policy", "guideline", "curfew", "hostel in", "waiver", "exemption", "ffcs", "paper seeing", "re-eval", "how to apply", "branch code", "program", "branches", "specialization", "duration"].some((w) => queryLower.includes(w))) {
      const kbResults = ragEngine.searchKnowledgeBase(query, 2);
      if (kbResults.length > 0) {
        const topHit = kbResults[0];
        response = {
          text: `### 📖 ${topHit.title}\n\n${topHit.content}\n\n*(Source: Official VIT Bhopal Academic Regulations & VTOP Handbook)*`,
          widget_type: "knowledge_card",
          widget_data: kbResults,
          intent: "knowledge_rag",
        };
      } else {
        response = {
          text: `### 📖 Campus Guidelines\n\nFor complete regulations on academic rules, hostel curfew, and FFCS, please refer to the VTOP Academic Handbook.`,
          intent: "knowledge_rag",
        };
      }
    }

    // -------------------------------------------------------------
    // INTENT 4: ATTENDANCE & LEAVE / BUNK MARGIN QUERY
    // -------------------------------------------------------------
    else if (["attendance", "bunk", "leave", "take leave", "miss", "skip", "absent", "75", "debar", "can i"].some((w) => queryLower.includes(w))) {
      const matchedCourse = studentStore.findCourseByNameOrCode(query);
      if (matchedCourse && (queryLower.includes("bunk") || queryLower.includes("leave") || queryLower.includes("miss") || queryLower.includes("skip") || queryLower.includes(matchedCourse.code.toLowerCase()) || queryLower.includes(matchedCourse.title.toLowerCase().split(" ")[0]))) {
        const calc = calculateAttendanceMargin(matchedCourse.attended, matchedCourse.total, 75.0);
        const isNinePtr = activeProfile.is_nine_pointer || activeProfile.cgpa >= 9.0;
        const ninePtrNote = isNinePtr
          ? "\n\n✨ *Note: As a 9-Pointer (CGPA ≥ 9.0), you are officially exempt from the 75% mandatory attendance rule!*"
          : "";

        const replyText = `### 📊 Attendance Analysis for **${matchedCourse.title}** (\`${matchedCourse.code}\`)\n\n- **Attended:** ${matchedCourse.attended} / ${matchedCourse.total} classes\n- **Current Attendance:** **${calc.current_percentage}%** (Status: \`${calc.status.toUpperCase()}\`)\n\n${calc.message}${ninePtrNote}`;

        response = {
          text: replyText,
          widget_type: "attendance_card",
          widget_data: {
            course: matchedCourse,
            calculation: calc,
            is_nine_pointer: isNinePtr,
          },
          intent: "attendance_specific",
        };
      } else {
        // Overall attendance summary
        const summary = studentStore.getAttendanceSummary();
        const coursesText = summary.courses
          .map(
            (c) =>
              `- **${c.title}** (\`${c.code}\`): ${c.attended}/${c.total} (**${c.attendance_pct}%**) — *${c.status.toUpperCase()}*`
          )
          .join("\n");
        const replyText = `### 📋 Overall Attendance Summary for **${summary.student_name}** (\`${summary.reg_no}\`)\n\n**Total Percentage:** **${summary.overall_attendance_pct}%** (${summary.overall_attended}/${summary.overall_total} classes)\n\n**Course Breakdown:**\n${coursesText}\n\n💡 *Tip: Ask me specifically like 'Can I bunk AI/ML?' or 'How many classes can I skip in Discrete Math?' for exact margin calculations.*`;

        response = {
          text: replyText,
          widget_type: "attendance_summary",
          widget_data: summary,
          intent: "attendance_overview",
        };
      }
    }

    // -------------------------------------------------------------
    // INTENT 5: TIMETABLE & CLASS SCHEDULE
    // -------------------------------------------------------------
    else if (
      ["timetable", "schedule", "lecture", "period", "slot"].some((w) => queryLower.includes(w)) ||
      (queryLower.includes("class") && ["today", "tomorrow", "monday", "tuesday", "wednesday", "thursday", "friday", "next"].some((w) => queryLower.includes(w)))
    ) {
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
      let selectedDay: string | null = null;
      for (const d of days) {
        if (queryLower.includes(d)) {
          selectedDay = d;
          break;
        }
      }

      if (queryLower.includes("tomorrow")) {
        const tomorrowIdx = (new Date().getDay() + 1) % 7;
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        selectedDay = dayNames[tomorrowIdx];
      }

      const schedule = studentStore.getTimetableForDay(selectedDay);
      const dayLabel = (selectedDay || "Today").charAt(0).toUpperCase() + (selectedDay || "Today").slice(1);

      let replyText = "";
      if (schedule.length === 0) {
        replyText = `🎉 No classes scheduled for **${dayLabel}**! Enjoy your free time or use it for project work.`;
      } else {
        const scheduleLines = schedule
          .map(
            (item) =>
              `- 🕒 **${item.time}** | **${item.course}** (\`${item.code}\`)\n  📍 *Venue:* ${item.venue} | *Faculty:* ${item.faculty} | *Slot:* \`${item.slot}\``
          )
          .join("\n");
        replyText = `### 📅 Timetable for **${dayLabel}**\n\n${scheduleLines}`;
      }

      response = {
        text: replyText,
        widget_type: "timetable_card",
        widget_data: {
          day: dayLabel,
          schedule,
        },
        intent: "timetable",
      };
    }

    // -------------------------------------------------------------
    // INTENT 6: MARKS, FAT & GPA SIMULATION
    // -------------------------------------------------------------
    else if (["marks", "grade", "fat", "cat", "cat-1", "cat-2", "da", "gpa", "target grade"].some((w) => queryLower.includes(w))) {
      const matchedCourse = studentStore.findCourseByNameOrCode(query);
      const targetGrade = queryLower.includes(" s ") || queryLower.includes("s grade") ? "S" : "A";

      if (matchedCourse) {
        const calcMarks = calculateRequiredFatMarks(
          matchedCourse.cat1_marks ?? 12.0,
          matchedCourse.cat2_marks ?? 13.0,
          matchedCourse.da_marks ?? 28.5,
          targetGrade
        );

        const replyText = `### 🎯 Grade Estimator for **${matchedCourse.title}**\n\n- **CAT-1:** ${matchedCourse.cat1_marks ?? 12}/15\n- **CAT-2:** ${matchedCourse.cat2_marks ?? 13}/15\n- **DA / Quizzes:** ${matchedCourse.da_marks ?? 28.5}/30\n- **Total Internal:** **${calcMarks.internal_marks_scored}/60**\n\n${calcMarks.message}`;

        response = {
          text: replyText,
          widget_type: "marks_card",
          widget_data: {
            course: matchedCourse,
            calculation: calcMarks,
          },
          intent: "marks_calculator",
        };
      } else {
        response = {
          text: `### 🎯 Grade & Marks Estimator\n\nAsk me about specific courses like: *'What marks do I need in FAT for S grade in Data Structures?'* or *'Grade simulator for AI/ML'*.`,
          intent: "marks_overview",
        };
      }
    }

    // -------------------------------------------------------------
    // INTENT 7: FACULTY LOCATOR & CABIN DETAILS
    // -------------------------------------------------------------
    else if (["faculty", "professor", "cabin", "teacher", "dr.", "prof", "office hour", "dean", "proctor"].some((w) => queryLower.includes(w))) {
      let searchTerm = query;
      if (queryLower.includes("my proctor") && activeProfile.proctor) {
        searchTerm = activeProfile.proctor;
      }

      const facultyList = studentStore.searchFaculties(searchTerm);
      if (facultyList.length > 0) {
        const f = facultyList[0];
        const replyText = `### 👨‍🏫 **${f.name}**\n- **Designation:** ${f.designation}\n- **School:** ${f.school}\n- 📍 **Cabin:** **${f.cabin}**\n- ✉️ **Email:** \`${f.email}\`\n- 🕒 **Office Hours:** ${f.office_hours}\n- 📚 **Details:** ${(f.courses || []).join(", ")}`;

        response = {
          text: replyText,
          widget_type: "faculty_card",
          widget_data: facultyList.slice(0, 1),
          intent: "faculty_directory",
        };
      } else {
        response = {
          text: "I couldn't find an exact match for that name. Could you verify the spelling?",
          intent: "faculty_not_found",
        };
      }
    }

    // -------------------------------------------------------------
    // INTENT 8: VIT HANDBOOK & CAMPUS KNOWLEDGE BASE (FALLBACK RAG)
    // -------------------------------------------------------------
    else {
      const kbFallback = ragEngine.searchKnowledgeBase(query, 2);
      if (kbFallback.length > 0 && kbFallback[0].score >= 8) {
        const topHit = kbFallback[0];
        response = {
          text: `### 📖 ${topHit.title}\n\n${topHit.content}\n\n*(Source: Official VIT Bhopal Academic Regulations & VTOP Handbook)*`,
          widget_type: "knowledge_card",
          widget_data: kbFallback,
          intent: "knowledge_rag",
        };
      } else if (geminiKey) {
        // LIVE GEMINI GENERATIVE CALL (IF KEY PRESENT)
        try {
          const systemContext = `You are the official VTOP AI Assistant for VIT Bhopal University. The active student is ${activeProfile.name} (${activeProfile.reg_no}), enrolled in ${activeProfile.program}, with CGPA ${activeProfile.cgpa}. His proctor is ${activeProfile.proctor} (${activeProfile.proctor_cabin}). Answer student queries politely, concisely, and accurately using VIT Bhopal terminology.`;
          const prompt = `${systemContext}\n\nUser Question: ${query}\n\nHelpful and concise answer:`;

          const models = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-flash-latest"];
          for (const model of models) {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
            });
            if (res.ok) {
              const data = await res.json();
              const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                response = {
                  text,
                  widget_type: "general_help",
                  intent: "gemini_generative",
                };
                break;
              }
            }
          }
        } catch (err) {
          console.error("[Gemini API Error]", err);
        }
      }

      // Default Assistant Fallback Help
      if (!response!) {
        const fallbackMsg = `Hello **${activeProfile.name || "Student"}**! I am your **VTOP AI Academic Assistant** for VIT Bhopal.\n\nHere are a few quick things you can ask me:\n1. **Attendance & Safe Bunks:** *'Can I bunk AI/ML class tomorrow?'* or *'Show my attendance summary'*\n2. **Daily Schedule:** *'What classes do I have today?'* or *'Timetable for Tuesday'*\n3. **Leave Requests:** *'Show my leave status'* or *'Check my hostel leave applications'*\n4. **Marks & FAT Simulator:** *'What do I need in FAT for S grade in Data Structures?'*\n5. **Campus Regulations:** *'What is the 9-pointer attendance rule?'* or *'Hostel night curfew timings'*\n6. **Faculty Cabins:** *'Where is my proctor Dr. S. Poornima\\'s cabin?'*\n7. **Student Switcher:** *'Switch student to 25BCG10014'* or use the **Edit** drawer above!`;

        response = {
          text: fallbackMsg,
          widget_type: "general_help",
          intent: "general",
        };
      }
    }

    return response;
  }
}

export const assistantService = new AssistantService();
