// Auto-generated VTOP Assistant Database
export interface Course {
  id?: number;
  code: string;
  title: string;
  slot: string;
  venue: string;
  faculty: string;
  attended: number;
  total: number;
  cat1_marks?: number;
  cat2_marks?: number;
  da_marks?: number;
  credits?: number;
}

export interface TimetableEntry {
  id?: number;
  day: string;
  slot: string;
  time: string;
  course: string;
  code: string;
  venue: string;
  faculty: string;
}

export interface StudentProfile {
  id: string;
  reg_no: string;
  name: string;
  program: string;
  semester: number;
  cgpa: number;
  is_nine_pointer: boolean;
  proctor: string;
  proctor_cabin: string;
  hostel_block?: string | null;
  room_no?: string | null;
  courses: Course[];
  timetables: TimetableEntry[];
}

export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  school: string;
  cabin: string;
  email: string;
  office_hours: string;
  courses: string[];
}

export interface KnowledgeRule {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
}

export interface AcademicProgram {
  id: number;
  category: string;
  name: string;
  duration: string;
  url?: string | null;
}

export interface BranchCode {
  id?: number;
  code: string;
  programme?: string;
  program?: string;
  degree?: string;
  type?: string;
  school?: string;
  [key: string]: any;
}

export const INITIAL_STUDENTS: StudentProfile[] = [
  {
  "id": "25MIM10100",
  "reg_no": "25MIM10100",
  "name": "KUMAR HARSHVARDHAN",
  "program": "Integrated M.Tech Artificial Intelligence",
  "semester": 2,
  "cgpa": 8.3,
  "is_nine_pointer": false,
  "proctor": "Dr. S. POORNIMA",
  "proctor_cabin": "AB-308A, Ramanujan Block",
  "hostel_block": "Boys Hostel Block 4",
  "room_no": "BH4-306",
  "courses": [
    {
      "id": 1001,
      "code": "CSA2001",
      "title": "Fundamentals in AI and ML",
      "slot": "B14+B23+D21",
      "venue": "AB02-103",
      "faculty": "RUDRA KALYAN NAYAK - SCAI",
      "attended": 22,
      "total": 22,
      "cat1_marks": 12.0,
      "cat2_marks": 12.6,
      "da_marks": 28.5,
      "credits": 4
    },
    {
      "id": 1002,
      "code": "CSE2002",
      "title": "Data Structures and Algorithms",
      "slot": "C21+F11+F12",
      "venue": "AB02-404",
      "faculty": "VIPIN JAIN - SCOPE",
      "attended": 22,
      "total": 22,
      "cat1_marks": 12.6,
      "cat2_marks": 13.5,
      "da_marks": 29.0,
      "credits": 4
    },
    {
      "id": 1003,
      "code": "ECE2002",
      "title": "Digital Logic Design",
      "slot": "C11+C12+C13",
      "venue": "AB-331",
      "faculty": "ARJUN LAL KUMAWAT - SEEE",
      "attended": 25,
      "total": 25,
      "cat1_marks": 7.2,
      "cat2_marks": 11.4,
      "da_marks": 26.0,
      "credits": 4
    },
    {
      "id": 1004,
      "code": "HUM0003",
      "title": "INDIAN CONSTITUTION",
      "slot": "A11",
      "venue": "CR-001",
      "faculty": "JAGRITI GUPTA - SASL",
      "attended": 9,
      "total": 9,
      "cat1_marks": 12.0,
      "cat2_marks": 12.0,
      "da_marks": 29.5,
      "credits": 2
    },
    {
      "id": 1005,
      "code": "HUM1012",
      "title": "Logic And Language Structure",
      "slot": "B21+E14",
      "venue": "AB02-301",
      "faculty": "VELMANI R - SCAI",
      "attended": 15,
      "total": 15,
      "cat1_marks": 12.0,
      "cat2_marks": 12.3,
      "da_marks": 28.0,
      "credits": 3
    },
    {
      "id": 1006,
      "code": "MAT2002",
      "title": "Discrete Mathematics and Graph Theory",
      "slot": "A14+D11+D12",
      "venue": "AB-230",
      "faculty": "GIRIJA P - SASL",
      "attended": 22,
      "total": 22,
      "cat1_marks": 13.2,
      "cat2_marks": 13.5,
      "da_marks": 29.0,
      "credits": 4
    },
    {
      "id": 1007,
      "code": "SST1003",
      "title": "Professional Communication Skills for Engineers",
      "slot": "A13",
      "venue": "AB-102",
      "faculty": "DEV BRAT GUPTA - SASL",
      "attended": 8,
      "total": 8,
      "cat1_marks": 13.5,
      "cat2_marks": 14.0,
      "da_marks": 28.0,
      "credits": 1
    }
  ],
  "timetables": [
    {
      "day": "Monday",
      "slot": "A11",
      "time": "08:30 - 10:00",
      "course": "INDIAN CONSTITUTION",
      "code": "HUM0003",
      "venue": "CR-001",
      "faculty": "JAGRITI GUPTA"
    },
    {
      "day": "Monday",
      "slot": "C11",
      "time": "11:40 - 13:10",
      "course": "Digital Logic Design",
      "code": "ECE2002",
      "venue": "AB-331",
      "faculty": "ARJUN LAL KUMAWAT"
    },
    {
      "day": "Monday",
      "slot": "A14",
      "time": "14:50 - 16:20",
      "course": "Discrete Mathematics and Graph Theory",
      "code": "MAT2002",
      "venue": "AB-230",
      "faculty": "GIRIJA P"
    },
    {
      "day": "Monday",
      "slot": "B21",
      "time": "16:25 - 17:55",
      "course": "Logic And Language Structure",
      "code": "HUM1012",
      "venue": "AB02-301",
      "faculty": "VELMANI R"
    },
    {
      "day": "Monday",
      "slot": "C21",
      "time": "18:00 - 19:30",
      "course": "Data Structures and Algorithms",
      "code": "CSE2002",
      "venue": "AB02-404",
      "faculty": "VIPIN JAIN"
    },
    {
      "day": "Tuesday",
      "slot": "D11",
      "time": "08:30 - 10:00",
      "course": "Discrete Mathematics and Graph Theory",
      "code": "MAT2002",
      "venue": "AB-230",
      "faculty": "GIRIJA P"
    },
    {
      "day": "Tuesday",
      "slot": "F11",
      "time": "11:40 - 13:10",
      "course": "Data Structures and Algorithms",
      "code": "CSE2002",
      "venue": "AB02-404",
      "faculty": "VIPIN JAIN"
    },
    {
      "day": "Tuesday",
      "slot": "D21",
      "time": "13:15 - 14:45",
      "course": "Fundamentals in AI and ML",
      "code": "CSA2001",
      "venue": "AB02-103",
      "faculty": "RUDRA KALYAN NAYAK"
    },
    {
      "day": "Tuesday",
      "slot": "E14",
      "time": "14:50 - 16:20",
      "course": "Logic And Language Structure",
      "code": "HUM1012",
      "venue": "AB02-301",
      "faculty": "VELMANI R"
    },
    {
      "day": "Wednesday",
      "slot": "C12",
      "time": "11:40 - 13:10",
      "course": "Digital Logic Design",
      "code": "ECE2002",
      "venue": "AB-331",
      "faculty": "ARJUN LAL KUMAWAT"
    },
    {
      "day": "Wednesday",
      "slot": "B14",
      "time": "14:50 - 16:20",
      "course": "Fundamentals in AI and ML",
      "code": "CSA2001",
      "venue": "AB02-103",
      "faculty": "RUDRA KALYAN NAYAK"
    },
    {
      "day": "Thursday",
      "slot": "D12",
      "time": "08:30 - 10:00",
      "course": "Discrete Mathematics and Graph Theory",
      "code": "MAT2002",
      "venue": "AB-230",
      "faculty": "GIRIJA P"
    },
    {
      "day": "Thursday",
      "slot": "F12",
      "time": "11:40 - 13:10",
      "course": "Data Structures and Algorithms",
      "code": "CSE2002",
      "venue": "AB02-404",
      "faculty": "VIPIN JAIN"
    },
    {
      "day": "Friday",
      "slot": "A13",
      "time": "08:30 - 10:00",
      "course": "Professional Communication Skills for Engineers",
      "code": "SST1003",
      "venue": "AB-102",
      "faculty": "DEV BRAT GUPTA"
    },
    {
      "day": "Friday",
      "slot": "C13",
      "time": "11:40 - 13:10",
      "course": "Digital Logic Design",
      "code": "ECE2002",
      "venue": "AB-331",
      "faculty": "ARJUN LAL KUMAWAT"
    },
    {
      "day": "Friday",
      "slot": "B23",
      "time": "16:25 - 17:55",
      "course": "Fundamentals in AI and ML",
      "code": "CSA2001",
      "venue": "AB02-103",
      "faculty": "RUDRA KALYAN NAYAK"
    }
  ]
},
  {
    "id": "24BAI10644",
    "reg_no": "24BAI10644",
    "name": "Krrish Ambwani",
    "program": "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    "semester": 4,
    "cgpa": 9.38,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "430-A",
    "courses": [
      {
        "id": 8,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 19,
        "total": 24,
        "cat1_marks": 14.3,
        "cat2_marks": 14.0,
        "da_marks": 28.1,
        "credits": 4
      },
      {
        "id": 9,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.6,
        "cat2_marks": 11.0,
        "da_marks": 26.7,
        "credits": 4
      },
      {
        "id": 10,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 14.0,
        "cat2_marks": 13.4,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 11,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 24,
        "cat1_marks": 12.9,
        "cat2_marks": 13.8,
        "da_marks": 26.5,
        "credits": 2
      },
      {
        "id": 12,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 26,
        "total": 29,
        "cat1_marks": 11.3,
        "cat2_marks": 12.0,
        "da_marks": 26.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 21,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 22,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 23,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 24,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 25,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 26,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 27,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 28,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 29,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 30,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 31,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 32,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 33,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 34,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 35,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 36,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 37,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 38,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 39,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 40,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BAI10447",
    "reg_no": "25BAI10447",
    "name": "Shreyansh",
    "program": "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    "semester": 2,
    "cgpa": 7.55,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-4 (Girls Hostel)",
    "room_no": "216-A",
    "courses": [
      {
        "id": 13,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 13.1,
        "cat2_marks": 13.7,
        "da_marks": 28.0,
        "credits": 4
      },
      {
        "id": 14,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 10.8,
        "cat2_marks": 12.5,
        "da_marks": 27.0,
        "credits": 4
      },
      {
        "id": 15,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 13.2,
        "cat2_marks": 13.9,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 16,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 30,
        "cat1_marks": 11.8,
        "cat2_marks": 12.5,
        "da_marks": 29.3,
        "credits": 2
      },
      {
        "id": 17,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 27,
        "cat1_marks": 14.4,
        "cat2_marks": 14.2,
        "da_marks": 25.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 41,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 42,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 43,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 44,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 45,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 46,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 47,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 48,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 49,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 50,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 51,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 52,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 53,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 54,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 55,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 56,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 57,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 58,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 59,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 60,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BCG10014",
    "reg_no": "25BCG10014",
    "name": "Kshitij Singh",
    "program": "B.Tech CSE (Gaming Technology)",
    "semester": 2,
    "cgpa": 9.45,
    "is_nine_pointer": true,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "122-A",
    "courses": [
      {
        "id": 18,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 25,
        "total": 30,
        "cat1_marks": 12.0,
        "cat2_marks": 14.3,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 19,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 11.3,
        "cat2_marks": 13.8,
        "da_marks": 27.6,
        "credits": 4
      },
      {
        "id": 20,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 22,
        "total": 29,
        "cat1_marks": 13.4,
        "cat2_marks": 11.4,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 21,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 30,
        "cat1_marks": 14.2,
        "cat2_marks": 13.2,
        "da_marks": 28.9,
        "credits": 2
      },
      {
        "id": 22,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 21,
        "total": 25,
        "cat1_marks": 12.6,
        "cat2_marks": 14.3,
        "da_marks": 27.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 61,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 62,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 63,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 64,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 65,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 66,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 67,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 68,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 69,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 70,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 71,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 72,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 73,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 74,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 75,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 76,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 77,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 78,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 79,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 80,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BCG10023",
    "reg_no": "25BCG10023",
    "name": "Sarthak Bhatt",
    "program": "B.Tech CSE (Gaming Technology)",
    "semester": 2,
    "cgpa": 9.17,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "423-A",
    "courses": [
      {
        "id": 23,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 24,
        "total": 27,
        "cat1_marks": 14.2,
        "cat2_marks": 11.9,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 24,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 29,
        "cat1_marks": 10.6,
        "cat2_marks": 13.1,
        "da_marks": 30.0,
        "credits": 4
      },
      {
        "id": 25,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 18,
        "total": 24,
        "cat1_marks": 10.6,
        "cat2_marks": 11.8,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 26,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 29,
        "cat1_marks": 11.7,
        "cat2_marks": 12.5,
        "da_marks": 27.1,
        "credits": 2
      },
      {
        "id": 27,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 26,
        "total": 30,
        "cat1_marks": 13.1,
        "cat2_marks": 11.0,
        "da_marks": 29.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 81,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 82,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 83,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 84,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 85,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 86,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 87,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 88,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 89,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 90,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 91,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 92,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 93,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 94,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 95,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 96,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 97,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 98,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 99,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 100,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BCG10035",
    "reg_no": "25BCG10035",
    "name": "Aron Smith Thomas",
    "program": "B.Tech CSE (Gaming Technology)",
    "semester": 2,
    "cgpa": 9.3,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "335-A",
    "courses": [
      {
        "id": 28,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 26,
        "cat1_marks": 13.2,
        "cat2_marks": 14.4,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 29,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.3,
        "cat2_marks": 11.1,
        "da_marks": 26.2,
        "credits": 4
      },
      {
        "id": 30,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 11.3,
        "cat2_marks": 14.4,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 31,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 23,
        "total": 26,
        "cat1_marks": 13.8,
        "cat2_marks": 13.3,
        "da_marks": 28.0,
        "credits": 2
      },
      {
        "id": 32,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 19,
        "total": 24,
        "cat1_marks": 12.7,
        "cat2_marks": 13.7,
        "da_marks": 25.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 101,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 102,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 103,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 104,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 105,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 106,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 107,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 108,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 109,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 110,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 111,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 112,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 113,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 114,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 115,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 116,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 117,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 118,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 119,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 120,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BCY10030",
    "reg_no": "25BCY10030",
    "name": "Rathis Raj.S",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.65,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "421-A",
    "courses": [
      {
        "id": 33,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 23,
        "total": 28,
        "cat1_marks": 11.8,
        "cat2_marks": 14.8,
        "da_marks": 26.3,
        "credits": 3
      },
      {
        "id": 34,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 28,
        "cat1_marks": 14.2,
        "cat2_marks": 14.1,
        "da_marks": 25.3,
        "credits": 4
      },
      {
        "id": 35,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 28,
        "cat1_marks": 14.5,
        "cat2_marks": 12.6,
        "da_marks": 28.7,
        "credits": 4
      },
      {
        "id": 36,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 24,
        "cat1_marks": 12.1,
        "cat2_marks": 11.6,
        "da_marks": 29.6,
        "credits": 3
      },
      {
        "id": 37,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 25,
        "total": 28,
        "cat1_marks": 11.2,
        "cat2_marks": 12.1,
        "da_marks": 28.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 121,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 122,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 123,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 124,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 125,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 126,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 127,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 128,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 129,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 130,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 131,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 132,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 133,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 134,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 135,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 136,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 137,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 138,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 139,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 140,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10051",
    "reg_no": "25BCY10051",
    "name": "Arya Ajith",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.88,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "125-A",
    "courses": [
      {
        "id": 38,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 25,
        "total": 27,
        "cat1_marks": 12.2,
        "cat2_marks": 14.4,
        "da_marks": 25.7,
        "credits": 3
      },
      {
        "id": 39,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 28,
        "cat1_marks": 11.2,
        "cat2_marks": 11.2,
        "da_marks": 27.1,
        "credits": 4
      },
      {
        "id": 40,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 18,
        "total": 24,
        "cat1_marks": 12.4,
        "cat2_marks": 13.3,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 41,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 24,
        "cat1_marks": 12.5,
        "cat2_marks": 15.0,
        "da_marks": 25.1,
        "credits": 3
      },
      {
        "id": 42,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 25,
        "cat1_marks": 11.7,
        "cat2_marks": 13.5,
        "da_marks": 26.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 141,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 142,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 143,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 144,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 145,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 146,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 147,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 148,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 149,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 150,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 151,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 152,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 153,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 154,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 155,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 156,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 157,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 158,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 159,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 160,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10076",
    "reg_no": "25BCY10076",
    "name": "Yogesh",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.02,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "419-B",
    "courses": [
      {
        "id": 43,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 19,
        "total": 24,
        "cat1_marks": 13.5,
        "cat2_marks": 11.3,
        "da_marks": 27.9,
        "credits": 3
      },
      {
        "id": 44,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 30,
        "cat1_marks": 11.6,
        "cat2_marks": 13.6,
        "da_marks": 28.8,
        "credits": 4
      },
      {
        "id": 45,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 20,
        "total": 26,
        "cat1_marks": 12.7,
        "cat2_marks": 11.6,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 46,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 25,
        "cat1_marks": 12.8,
        "cat2_marks": 13.2,
        "da_marks": 28.9,
        "credits": 3
      },
      {
        "id": 47,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 24,
        "total": 27,
        "cat1_marks": 11.0,
        "cat2_marks": 12.8,
        "da_marks": 25.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 161,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 162,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 163,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 164,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 165,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 166,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 167,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 168,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 169,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 170,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 171,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 172,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 173,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 174,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 175,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 176,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 177,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 178,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 179,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 180,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10083",
    "reg_no": "25BCY10083",
    "name": "Shreya Singh",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.88,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "313-B",
    "courses": [
      {
        "id": 48,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 28,
        "total": 30,
        "cat1_marks": 13.3,
        "cat2_marks": 11.9,
        "da_marks": 27.7,
        "credits": 3
      },
      {
        "id": 49,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 17,
        "total": 24,
        "cat1_marks": 12.5,
        "cat2_marks": 12.2,
        "da_marks": 28.6,
        "credits": 4
      },
      {
        "id": 50,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.7,
        "cat2_marks": 11.9,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 51,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 25,
        "cat1_marks": 11.6,
        "cat2_marks": 11.5,
        "da_marks": 27.8,
        "credits": 3
      },
      {
        "id": 52,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 26,
        "cat1_marks": 13.3,
        "cat2_marks": 13.5,
        "da_marks": 28.8,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 181,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 182,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 183,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 184,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 185,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 186,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 187,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 188,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 189,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 190,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 191,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 192,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 193,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 194,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 195,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 196,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 197,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 198,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 199,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 200,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10118",
    "reg_no": "25BCY10118",
    "name": "Abhra Banerjee",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 9.35,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "324-A",
    "courses": [
      {
        "id": 53,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 25,
        "total": 28,
        "cat1_marks": 10.6,
        "cat2_marks": 14.3,
        "da_marks": 30.0,
        "credits": 3
      },
      {
        "id": 54,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 29,
        "cat1_marks": 14.1,
        "cat2_marks": 12.8,
        "da_marks": 26.0,
        "credits": 4
      },
      {
        "id": 55,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 23,
        "total": 30,
        "cat1_marks": 12.5,
        "cat2_marks": 11.9,
        "da_marks": 29.6,
        "credits": 4
      },
      {
        "id": 56,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 27,
        "total": 29,
        "cat1_marks": 11.5,
        "cat2_marks": 14.1,
        "da_marks": 25.7,
        "credits": 3
      },
      {
        "id": 57,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 26,
        "cat1_marks": 13.0,
        "cat2_marks": 13.8,
        "da_marks": 26.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 201,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 202,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 203,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 204,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 205,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 206,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 207,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 208,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 209,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 210,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 211,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 212,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 213,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 214,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 215,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 216,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 217,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 218,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 219,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 220,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10132",
    "reg_no": "25BCY10132",
    "name": "Nidhish Rao",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.14,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "419-B",
    "courses": [
      {
        "id": 58,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 24,
        "total": 27,
        "cat1_marks": 11.2,
        "cat2_marks": 14.3,
        "da_marks": 29.6,
        "credits": 3
      },
      {
        "id": 59,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 17,
        "total": 24,
        "cat1_marks": 13.5,
        "cat2_marks": 14.7,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 60,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 14.5,
        "cat2_marks": 12.1,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 61,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 24,
        "total": 27,
        "cat1_marks": 13.7,
        "cat2_marks": 11.8,
        "da_marks": 25.8,
        "credits": 3
      },
      {
        "id": 62,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 26,
        "cat1_marks": 13.4,
        "cat2_marks": 14.0,
        "da_marks": 29.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 221,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 222,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 223,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 224,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 225,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 226,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 227,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 228,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 229,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 230,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 231,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 232,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 233,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 234,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 235,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 236,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 237,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 238,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 239,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 240,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10144",
    "reg_no": "25BCY10144",
    "name": "Agam Jain",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.46,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "331-B",
    "courses": [
      {
        "id": 63,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 21,
        "total": 25,
        "cat1_marks": 14.5,
        "cat2_marks": 11.1,
        "da_marks": 26.1,
        "credits": 3
      },
      {
        "id": 64,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 17,
        "total": 24,
        "cat1_marks": 11.4,
        "cat2_marks": 12.0,
        "da_marks": 26.4,
        "credits": 4
      },
      {
        "id": 65,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 27,
        "cat1_marks": 11.1,
        "cat2_marks": 14.5,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 66,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 24,
        "cat1_marks": 10.9,
        "cat2_marks": 14.4,
        "da_marks": 29.2,
        "credits": 3
      },
      {
        "id": 67,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 27,
        "total": 30,
        "cat1_marks": 11.8,
        "cat2_marks": 14.3,
        "da_marks": 29.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 241,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 242,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 243,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 244,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 245,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 246,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 247,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 248,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 249,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 250,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 251,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 252,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 253,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 254,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 255,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 256,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 257,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 258,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 259,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 260,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10153",
    "reg_no": "25BCY10153",
    "name": "Parth Singh",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.99,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "131-A",
    "courses": [
      {
        "id": 68,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 22,
        "total": 27,
        "cat1_marks": 11.1,
        "cat2_marks": 14.3,
        "da_marks": 25.8,
        "credits": 3
      },
      {
        "id": 69,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.8,
        "cat2_marks": 11.5,
        "da_marks": 25.5,
        "credits": 4
      },
      {
        "id": 70,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.9,
        "cat2_marks": 14.4,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 71,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 23,
        "total": 27,
        "cat1_marks": 11.5,
        "cat2_marks": 14.2,
        "da_marks": 29.8,
        "credits": 3
      },
      {
        "id": 72,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 25,
        "cat1_marks": 12.2,
        "cat2_marks": 11.4,
        "da_marks": 28.8,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 261,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 262,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 263,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 264,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 265,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 266,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 267,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 268,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 269,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 270,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 271,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 272,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 273,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 274,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 275,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 276,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 277,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 278,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 279,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 280,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10160",
    "reg_no": "25BCY10160",
    "name": "Samriti Sharma",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.81,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "311-A",
    "courses": [
      {
        "id": 73,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 23,
        "total": 27,
        "cat1_marks": 14.1,
        "cat2_marks": 12.7,
        "da_marks": 29.2,
        "credits": 3
      },
      {
        "id": 74,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 19,
        "total": 27,
        "cat1_marks": 13.5,
        "cat2_marks": 13.4,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 75,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 14.2,
        "cat2_marks": 12.5,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 76,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 24,
        "total": 29,
        "cat1_marks": 14.1,
        "cat2_marks": 12.7,
        "da_marks": 25.5,
        "credits": 3
      },
      {
        "id": 77,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 24,
        "cat1_marks": 13.2,
        "cat2_marks": 12.6,
        "da_marks": 25.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 281,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 282,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 283,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 284,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 285,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 286,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 287,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 288,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 289,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 290,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 291,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 292,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 293,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 294,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 295,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 296,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 297,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 298,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 299,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 300,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10165",
    "reg_no": "25BCY10165",
    "name": "Ashish Chander",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.77,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "328-A",
    "courses": [
      {
        "id": 78,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 22,
        "total": 25,
        "cat1_marks": 11.8,
        "cat2_marks": 11.1,
        "da_marks": 27.3,
        "credits": 3
      },
      {
        "id": 79,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.7,
        "cat2_marks": 11.7,
        "da_marks": 29.9,
        "credits": 4
      },
      {
        "id": 80,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 28,
        "cat1_marks": 14.3,
        "cat2_marks": 14.5,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 81,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 26,
        "cat1_marks": 12.1,
        "cat2_marks": 12.8,
        "da_marks": 26.6,
        "credits": 3
      },
      {
        "id": 82,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 27,
        "cat1_marks": 13.9,
        "cat2_marks": 14.2,
        "da_marks": 27.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 301,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 302,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 303,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 304,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 305,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 306,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 307,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 308,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 309,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 310,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 311,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 312,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 313,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 314,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 315,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 316,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 317,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 318,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 319,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 320,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10167",
    "reg_no": "25BCY10167",
    "name": "Damanlovedeep Singh",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.72,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "328-B",
    "courses": [
      {
        "id": 83,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 27,
        "total": 29,
        "cat1_marks": 12.4,
        "cat2_marks": 14.7,
        "da_marks": 28.4,
        "credits": 3
      },
      {
        "id": 84,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 19,
        "total": 27,
        "cat1_marks": 13.3,
        "cat2_marks": 14.3,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 85,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.3,
        "cat2_marks": 12.7,
        "da_marks": 26.1,
        "credits": 4
      },
      {
        "id": 86,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 27,
        "cat1_marks": 12.9,
        "cat2_marks": 12.5,
        "da_marks": 28.0,
        "credits": 3
      },
      {
        "id": 87,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 27,
        "cat1_marks": 13.0,
        "cat2_marks": 12.6,
        "da_marks": 27.6,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 321,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 322,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 323,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 324,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 325,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 326,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 327,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 328,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 329,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 330,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 331,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 332,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 333,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 334,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 335,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 336,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 337,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 338,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 339,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 340,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10173",
    "reg_no": "25BCY10173",
    "name": "Aditya Kumar",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.83,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "219-B",
    "courses": [
      {
        "id": 88,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 23,
        "total": 26,
        "cat1_marks": 10.5,
        "cat2_marks": 13.5,
        "da_marks": 27.4,
        "credits": 3
      },
      {
        "id": 89,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 28,
        "cat1_marks": 12.4,
        "cat2_marks": 11.6,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 90,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 23,
        "total": 30,
        "cat1_marks": 13.7,
        "cat2_marks": 11.3,
        "da_marks": 26.8,
        "credits": 4
      },
      {
        "id": 91,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 23,
        "total": 26,
        "cat1_marks": 12.4,
        "cat2_marks": 12.8,
        "da_marks": 27.0,
        "credits": 3
      },
      {
        "id": 92,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 25,
        "cat1_marks": 12.2,
        "cat2_marks": 14.9,
        "da_marks": 29.6,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 341,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 342,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 343,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 344,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 345,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 346,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 347,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 348,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 349,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 350,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 351,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 352,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 353,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 354,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 355,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 356,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 357,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 358,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 359,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 360,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10179",
    "reg_no": "25BCY10179",
    "name": "Ashutosh Pratap Singh",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 9.18,
    "is_nine_pointer": true,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "416-B",
    "courses": [
      {
        "id": 93,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 25,
        "total": 28,
        "cat1_marks": 13.0,
        "cat2_marks": 11.9,
        "da_marks": 26.0,
        "credits": 3
      },
      {
        "id": 94,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 30,
        "cat1_marks": 14.1,
        "cat2_marks": 13.9,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 95,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 22,
        "total": 29,
        "cat1_marks": 13.3,
        "cat2_marks": 12.2,
        "da_marks": 28.1,
        "credits": 4
      },
      {
        "id": 96,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 25,
        "cat1_marks": 13.1,
        "cat2_marks": 12.0,
        "da_marks": 26.1,
        "credits": 3
      },
      {
        "id": 97,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 27,
        "cat1_marks": 12.2,
        "cat2_marks": 11.9,
        "da_marks": 29.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 361,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 362,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 363,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 364,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 365,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 366,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 367,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 368,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 369,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 370,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 371,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 372,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 373,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 374,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 375,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 376,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 377,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 378,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 379,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 380,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10194",
    "reg_no": "25BCY10194",
    "name": "Divyansh Mehta",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.93,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "422-B",
    "courses": [
      {
        "id": 98,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 20,
        "total": 25,
        "cat1_marks": 13.1,
        "cat2_marks": 14.5,
        "da_marks": 27.4,
        "credits": 3
      },
      {
        "id": 99,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 18,
        "total": 25,
        "cat1_marks": 13.5,
        "cat2_marks": 13.5,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 100,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 18,
        "total": 24,
        "cat1_marks": 12.7,
        "cat2_marks": 14.8,
        "da_marks": 27.0,
        "credits": 4
      },
      {
        "id": 101,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 24,
        "cat1_marks": 13.0,
        "cat2_marks": 14.7,
        "da_marks": 29.9,
        "credits": 3
      },
      {
        "id": 102,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 26,
        "cat1_marks": 14.4,
        "cat2_marks": 11.7,
        "da_marks": 28.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 381,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 382,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 383,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 384,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 385,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 386,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 387,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 388,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 389,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 390,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 391,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 392,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 393,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 394,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 395,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 396,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 397,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 398,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 399,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 400,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10200",
    "reg_no": "25BCY10200",
    "name": "Krishna Nandkishor Vishwakarma",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.79,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "218-B",
    "courses": [
      {
        "id": 103,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 22,
        "total": 27,
        "cat1_marks": 13.6,
        "cat2_marks": 13.9,
        "da_marks": 26.4,
        "credits": 3
      },
      {
        "id": 104,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 18,
        "total": 26,
        "cat1_marks": 11.3,
        "cat2_marks": 12.8,
        "da_marks": 26.8,
        "credits": 4
      },
      {
        "id": 105,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 28,
        "cat1_marks": 12.3,
        "cat2_marks": 14.6,
        "da_marks": 28.2,
        "credits": 4
      },
      {
        "id": 106,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 25,
        "cat1_marks": 11.3,
        "cat2_marks": 11.4,
        "da_marks": 26.1,
        "credits": 3
      },
      {
        "id": 107,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 25,
        "cat1_marks": 14.5,
        "cat2_marks": 13.8,
        "da_marks": 28.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 401,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 402,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 403,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 404,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 405,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 406,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 407,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 408,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 409,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 410,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 411,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 412,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 413,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 414,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 415,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 416,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 417,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 418,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 419,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 420,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10205",
    "reg_no": "25BCY10205",
    "name": "Prince Tiwari",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.98,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "314-A",
    "courses": [
      {
        "id": 108,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 25,
        "total": 28,
        "cat1_marks": 11.7,
        "cat2_marks": 12.1,
        "da_marks": 27.1,
        "credits": 3
      },
      {
        "id": 109,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 18,
        "total": 25,
        "cat1_marks": 13.0,
        "cat2_marks": 11.8,
        "da_marks": 27.8,
        "credits": 4
      },
      {
        "id": 110,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 23,
        "total": 30,
        "cat1_marks": 14.3,
        "cat2_marks": 11.9,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 111,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 23,
        "total": 27,
        "cat1_marks": 14.0,
        "cat2_marks": 12.1,
        "da_marks": 26.2,
        "credits": 3
      },
      {
        "id": 112,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 24,
        "cat1_marks": 12.7,
        "cat2_marks": 14.8,
        "da_marks": 28.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 421,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 422,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 423,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 424,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 425,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 426,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 427,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 428,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 429,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 430,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 431,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 432,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 433,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 434,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 435,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 436,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 437,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 438,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 439,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 440,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10217",
    "reg_no": "25BCY10217",
    "name": "Aryaman Singh Chauhan",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.23,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "329-A",
    "courses": [
      {
        "id": 113,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 20,
        "total": 24,
        "cat1_marks": 11.2,
        "cat2_marks": 13.4,
        "da_marks": 29.1,
        "credits": 3
      },
      {
        "id": 114,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 29,
        "cat1_marks": 14.3,
        "cat2_marks": 13.6,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 115,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 23,
        "total": 30,
        "cat1_marks": 11.2,
        "cat2_marks": 14.1,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 116,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 20,
        "total": 25,
        "cat1_marks": 13.5,
        "cat2_marks": 14.4,
        "da_marks": 25.1,
        "credits": 3
      },
      {
        "id": 117,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 24,
        "total": 29,
        "cat1_marks": 11.5,
        "cat2_marks": 11.6,
        "da_marks": 29.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 441,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 442,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 443,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 444,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 445,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 446,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 447,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 448,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 449,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 450,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 451,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 452,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 453,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 454,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 455,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 456,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 457,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 458,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 459,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 460,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10224",
    "reg_no": "25BCY10224",
    "name": "Devansh Chaubey",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.53,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "221-A",
    "courses": [
      {
        "id": 118,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 27,
        "total": 30,
        "cat1_marks": 12.6,
        "cat2_marks": 13.2,
        "da_marks": 27.9,
        "credits": 3
      },
      {
        "id": 119,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 18,
        "total": 26,
        "cat1_marks": 12.0,
        "cat2_marks": 13.9,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 120,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 22,
        "total": 29,
        "cat1_marks": 12.5,
        "cat2_marks": 14.1,
        "da_marks": 28.5,
        "credits": 4
      },
      {
        "id": 121,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 24,
        "cat1_marks": 11.0,
        "cat2_marks": 13.5,
        "da_marks": 28.0,
        "credits": 3
      },
      {
        "id": 122,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 24,
        "total": 27,
        "cat1_marks": 13.2,
        "cat2_marks": 14.3,
        "da_marks": 29.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 461,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 462,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 463,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 464,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 465,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 466,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 467,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 468,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 469,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 470,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 471,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 472,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 473,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 474,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 475,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 476,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 477,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 478,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 479,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 480,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10238",
    "reg_no": "25BCY10238",
    "name": "Shreya Dhawan",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 9.06,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-1 (Girls Hostel)",
    "room_no": "319-A",
    "courses": [
      {
        "id": 123,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 24,
        "total": 29,
        "cat1_marks": 11.7,
        "cat2_marks": 13.7,
        "da_marks": 28.4,
        "credits": 3
      },
      {
        "id": 124,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 17,
        "total": 24,
        "cat1_marks": 13.0,
        "cat2_marks": 12.7,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 125,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 18,
        "total": 24,
        "cat1_marks": 13.4,
        "cat2_marks": 12.7,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 126,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 24,
        "cat1_marks": 10.5,
        "cat2_marks": 14.8,
        "da_marks": 29.7,
        "credits": 3
      },
      {
        "id": 127,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 26,
        "total": 28,
        "cat1_marks": 14.3,
        "cat2_marks": 11.0,
        "da_marks": 26.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 481,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 482,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 483,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 484,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 485,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 486,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 487,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 488,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 489,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 490,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 491,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 492,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 493,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 494,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 495,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 496,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 497,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 498,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 499,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 500,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10251",
    "reg_no": "25BCY10251",
    "name": "Divyansh Srivastava",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 9.15,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "319-A",
    "courses": [
      {
        "id": 128,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 22,
        "total": 27,
        "cat1_marks": 10.7,
        "cat2_marks": 11.5,
        "da_marks": 27.6,
        "credits": 3
      },
      {
        "id": 129,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 29,
        "cat1_marks": 11.3,
        "cat2_marks": 11.9,
        "da_marks": 28.5,
        "credits": 4
      },
      {
        "id": 130,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 27,
        "cat1_marks": 12.2,
        "cat2_marks": 13.1,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 131,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 21,
        "total": 25,
        "cat1_marks": 10.6,
        "cat2_marks": 13.0,
        "da_marks": 29.1,
        "credits": 3
      },
      {
        "id": 132,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 25,
        "cat1_marks": 11.9,
        "cat2_marks": 13.4,
        "da_marks": 29.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 501,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 502,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 503,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 504,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 505,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 506,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 507,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 508,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 509,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 510,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 511,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 512,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 513,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 514,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 515,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 516,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 517,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 518,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 519,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 520,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10258",
    "reg_no": "25BCY10258",
    "name": "Sarthak Mishra",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 7.91,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "433-A",
    "courses": [
      {
        "id": 133,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 26,
        "total": 30,
        "cat1_marks": 11.4,
        "cat2_marks": 12.7,
        "da_marks": 29.7,
        "credits": 3
      },
      {
        "id": 134,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 19,
        "total": 27,
        "cat1_marks": 14.3,
        "cat2_marks": 14.6,
        "da_marks": 28.6,
        "credits": 4
      },
      {
        "id": 135,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 21,
        "total": 27,
        "cat1_marks": 11.8,
        "cat2_marks": 11.1,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 136,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 24,
        "total": 28,
        "cat1_marks": 14.1,
        "cat2_marks": 12.1,
        "da_marks": 25.6,
        "credits": 3
      },
      {
        "id": 137,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 24,
        "cat1_marks": 13.9,
        "cat2_marks": 13.7,
        "da_marks": 28.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 521,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 522,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 523,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 524,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 525,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 526,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 527,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 528,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 529,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 530,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 531,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 532,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 533,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 534,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 535,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 536,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 537,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 538,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 539,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 540,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10261",
    "reg_no": "25BCY10261",
    "name": "Akashdeep",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.44,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "130-A",
    "courses": [
      {
        "id": 138,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 22,
        "total": 26,
        "cat1_marks": 13.5,
        "cat2_marks": 14.1,
        "da_marks": 27.6,
        "credits": 3
      },
      {
        "id": 139,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 29,
        "cat1_marks": 10.6,
        "cat2_marks": 11.8,
        "da_marks": 26.0,
        "credits": 4
      },
      {
        "id": 140,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 18,
        "total": 24,
        "cat1_marks": 13.2,
        "cat2_marks": 13.0,
        "da_marks": 30.0,
        "credits": 4
      },
      {
        "id": 141,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 22,
        "total": 26,
        "cat1_marks": 12.7,
        "cat2_marks": 11.7,
        "da_marks": 27.6,
        "credits": 3
      },
      {
        "id": 142,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 24,
        "cat1_marks": 13.9,
        "cat2_marks": 11.8,
        "da_marks": 27.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 541,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 542,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 543,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 544,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 545,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 546,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 547,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 548,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 549,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 550,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 551,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 552,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 553,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 554,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 555,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 556,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 557,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 558,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 559,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 560,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10263",
    "reg_no": "25BCY10263",
    "name": "Ishan Shrivastava",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.65,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "430-A",
    "courses": [
      {
        "id": 143,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 23,
        "total": 28,
        "cat1_marks": 12.4,
        "cat2_marks": 11.0,
        "da_marks": 27.2,
        "credits": 3
      },
      {
        "id": 144,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 18,
        "total": 26,
        "cat1_marks": 11.8,
        "cat2_marks": 15.0,
        "da_marks": 28.9,
        "credits": 4
      },
      {
        "id": 145,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 23,
        "total": 30,
        "cat1_marks": 11.7,
        "cat2_marks": 14.3,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 146,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 25,
        "total": 27,
        "cat1_marks": 11.6,
        "cat2_marks": 13.7,
        "da_marks": 29.8,
        "credits": 3
      },
      {
        "id": 147,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 25,
        "cat1_marks": 10.9,
        "cat2_marks": 12.9,
        "da_marks": 25.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 561,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 562,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 563,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 564,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 565,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 566,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 567,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 568,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 569,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 570,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 571,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 572,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 573,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 574,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 575,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 576,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 577,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 578,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 579,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 580,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10279",
    "reg_no": "25BCY10279",
    "name": "Ayushi Sharma",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.87,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "132-A",
    "courses": [
      {
        "id": 148,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 20,
        "total": 24,
        "cat1_marks": 12.4,
        "cat2_marks": 14.8,
        "da_marks": 29.9,
        "credits": 3
      },
      {
        "id": 149,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 20,
        "total": 28,
        "cat1_marks": 10.7,
        "cat2_marks": 11.8,
        "da_marks": 26.2,
        "credits": 4
      },
      {
        "id": 150,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 13.1,
        "cat2_marks": 12.4,
        "da_marks": 27.2,
        "credits": 4
      },
      {
        "id": 151,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 24,
        "total": 27,
        "cat1_marks": 12.5,
        "cat2_marks": 12.9,
        "da_marks": 26.6,
        "credits": 3
      },
      {
        "id": 152,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 24,
        "total": 27,
        "cat1_marks": 12.1,
        "cat2_marks": 12.5,
        "da_marks": 27.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 581,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 582,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 583,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 584,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 585,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 586,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 587,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 588,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 589,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 590,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 591,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 592,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 593,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 594,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 595,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 596,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 597,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 598,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 599,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 600,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BCY10281",
    "reg_no": "25BCY10281",
    "name": "Ananya Kesharwani",
    "program": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "semester": 2,
    "cgpa": 8.94,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "315-A",
    "courses": [
      {
        "id": 153,
        "code": "CYB2001",
        "title": "Fundamentals of Cyber Security",
        "slot": "A1+TA1",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja",
        "attended": 24,
        "total": 28,
        "cat1_marks": 12.3,
        "cat2_marks": 13.6,
        "da_marks": 27.8,
        "credits": 3
      },
      {
        "id": 154,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "B1+TB1",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.7,
        "cat2_marks": 11.7,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 155,
        "code": "CSE2005",
        "title": "Computer Networks & Protocols",
        "slot": "C1+TC1",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.4,
        "cat2_marks": 12.7,
        "da_marks": 26.8,
        "credits": 4
      },
      {
        "id": 156,
        "code": "CYB2003",
        "title": "Digital Forensics & Law",
        "slot": "D1+TD1",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera",
        "attended": 24,
        "total": 29,
        "cat1_marks": 13.9,
        "cat2_marks": 13.7,
        "da_marks": 27.7,
        "credits": 3
      },
      {
        "id": 157,
        "code": "MAT2001",
        "title": "Discrete Mathematics",
        "slot": "E1+TE1",
        "venue": "AB-1 215",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 26,
        "cat1_marks": 13.4,
        "cat2_marks": 13.6,
        "da_marks": 25.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 601,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 602,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 603,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 604,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 605,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 606,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 607,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 608,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 609,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 610,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 611,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 612,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 613,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 614,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 615,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 616,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      },
      {
        "id": 617,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Fundamentals of Cyber Security",
        "code": "CYB2001",
        "venue": "AB-1 402",
        "faculty": "Dr. Pushpinder Singh Patheja"
      },
      {
        "id": 618,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-2 201",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 619,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Computer Networks & Protocols",
        "code": "CSE2005",
        "venue": "NetLab AB-1",
        "faculty": "Prof. Amit Patel"
      },
      {
        "id": 620,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Digital Forensics & Law",
        "code": "CYB2003",
        "venue": "AB-1 312",
        "faculty": "Dr. Chandan Behera"
      }
    ]
  },
  {
    "id": "25BET10003",
    "reg_no": "25BET10003",
    "name": "Sparsh Sachan",
    "program": "B.Tech CSE (Education Technology)",
    "semester": 2,
    "cgpa": 9.33,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "421-B",
    "courses": [
      {
        "id": 158,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 13.1,
        "cat2_marks": 14.2,
        "da_marks": 25.5,
        "credits": 4
      },
      {
        "id": 159,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 27,
        "cat1_marks": 13.7,
        "cat2_marks": 11.0,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 160,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 20,
        "total": 26,
        "cat1_marks": 14.3,
        "cat2_marks": 11.1,
        "da_marks": 28.2,
        "credits": 4
      },
      {
        "id": 161,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 12.6,
        "cat2_marks": 11.0,
        "da_marks": 29.9,
        "credits": 2
      },
      {
        "id": 162,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 26,
        "total": 30,
        "cat1_marks": 14.1,
        "cat2_marks": 13.4,
        "da_marks": 27.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 621,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 622,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 623,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 624,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 625,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 626,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 627,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 628,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 629,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 630,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 631,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 632,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 633,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 634,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 635,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 636,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 637,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 638,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 639,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 640,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BET10048",
    "reg_no": "25BET10048",
    "name": "Tamanna Verma",
    "program": "B.Tech CSE (Education Technology)",
    "semester": 2,
    "cgpa": 7.6,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-4 (Girls Hostel)",
    "room_no": "417-A",
    "courses": [
      {
        "id": 163,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 24,
        "total": 28,
        "cat1_marks": 10.8,
        "cat2_marks": 12.2,
        "da_marks": 26.1,
        "credits": 4
      },
      {
        "id": 164,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 12.9,
        "cat2_marks": 14.2,
        "da_marks": 28.4,
        "credits": 4
      },
      {
        "id": 165,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 18,
        "total": 24,
        "cat1_marks": 12.3,
        "cat2_marks": 12.3,
        "da_marks": 26.7,
        "credits": 4
      },
      {
        "id": 166,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 20,
        "total": 24,
        "cat1_marks": 12.9,
        "cat2_marks": 12.4,
        "da_marks": 25.9,
        "credits": 2
      },
      {
        "id": 167,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 29,
        "cat1_marks": 14.2,
        "cat2_marks": 12.0,
        "da_marks": 25.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 641,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 642,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 643,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 644,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 645,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 646,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 647,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 648,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 649,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 650,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 651,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 652,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 653,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 654,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 655,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 656,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 657,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 658,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 659,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 660,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BEY10006",
    "reg_no": "25BEY10006",
    "name": "Palni Pandey",
    "program": "B.Tech ECE (Artificial Intelligence & Cybernetics)",
    "semester": 2,
    "cgpa": 7.93,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "127-B",
    "courses": [
      {
        "id": 168,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 29,
        "cat1_marks": 12.1,
        "cat2_marks": 12.8,
        "da_marks": 25.8,
        "credits": 4
      },
      {
        "id": 169,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 11.5,
        "cat2_marks": 12.5,
        "da_marks": 29.2,
        "credits": 4
      },
      {
        "id": 170,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 10.9,
        "cat2_marks": 13.0,
        "da_marks": 25.8,
        "credits": 4
      },
      {
        "id": 171,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 12.5,
        "cat2_marks": 11.3,
        "da_marks": 28.6,
        "credits": 2
      },
      {
        "id": 172,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 25,
        "cat1_marks": 10.8,
        "cat2_marks": 11.3,
        "da_marks": 27.8,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 661,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 662,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 663,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 664,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 665,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 666,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 667,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 668,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 669,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 670,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 671,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 672,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 673,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 674,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 675,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 676,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 677,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 678,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 679,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 680,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BME10004",
    "reg_no": "25BME10004",
    "name": "Tanishq Loharuka",
    "program": "B.Tech Mechanical Engineering",
    "semester": 2,
    "cgpa": 7.55,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "329-B",
    "courses": [
      {
        "id": 173,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 12.4,
        "cat2_marks": 14.4,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 174,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 13.7,
        "cat2_marks": 12.3,
        "da_marks": 27.1,
        "credits": 4
      },
      {
        "id": 175,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 11.6,
        "cat2_marks": 13.8,
        "da_marks": 30.0,
        "credits": 4
      },
      {
        "id": 176,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 30,
        "cat1_marks": 10.8,
        "cat2_marks": 13.9,
        "da_marks": 25.2,
        "credits": 2
      },
      {
        "id": 177,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 21,
        "total": 25,
        "cat1_marks": 11.3,
        "cat2_marks": 14.6,
        "da_marks": 25.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 681,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 682,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 683,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 684,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 685,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 686,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 687,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 688,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 689,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 690,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 691,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 692,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 693,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 694,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 695,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 696,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 697,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 698,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 699,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 700,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BME10012",
    "reg_no": "25BME10012",
    "name": "Shashank Kumar",
    "program": "B.Tech Mechanical Engineering",
    "semester": 2,
    "cgpa": 9.04,
    "is_nine_pointer": true,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "325-B",
    "courses": [
      {
        "id": 178,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 20,
        "total": 24,
        "cat1_marks": 12.6,
        "cat2_marks": 11.5,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 179,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 14.0,
        "cat2_marks": 11.5,
        "da_marks": 28.4,
        "credits": 4
      },
      {
        "id": 180,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 22,
        "total": 29,
        "cat1_marks": 11.1,
        "cat2_marks": 11.4,
        "da_marks": 27.0,
        "credits": 4
      },
      {
        "id": 181,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 22,
        "total": 26,
        "cat1_marks": 13.3,
        "cat2_marks": 14.9,
        "da_marks": 26.4,
        "credits": 2
      },
      {
        "id": 182,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 21,
        "total": 26,
        "cat1_marks": 12.5,
        "cat2_marks": 11.7,
        "da_marks": 29.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 701,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 702,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 703,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 704,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 705,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 706,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 707,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 708,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 709,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 710,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 711,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 712,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 713,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 714,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 715,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 716,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 717,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 718,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 719,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 720,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BMR10003",
    "reg_no": "25BMR10003",
    "name": "Hardik Rajpal",
    "program": "B.Tech Mechanical (Artificial Intelligence & Robotics)",
    "semester": 2,
    "cgpa": 8.21,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "422-B",
    "courses": [
      {
        "id": 183,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 25,
        "total": 30,
        "cat1_marks": 14.0,
        "cat2_marks": 12.2,
        "da_marks": 26.7,
        "credits": 4
      },
      {
        "id": 184,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 27,
        "cat1_marks": 11.6,
        "cat2_marks": 14.8,
        "da_marks": 29.6,
        "credits": 4
      },
      {
        "id": 185,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 10.6,
        "cat2_marks": 14.8,
        "da_marks": 27.8,
        "credits": 4
      },
      {
        "id": 186,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 24,
        "total": 28,
        "cat1_marks": 11.4,
        "cat2_marks": 13.2,
        "da_marks": 27.6,
        "credits": 2
      },
      {
        "id": 187,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 30,
        "cat1_marks": 13.8,
        "cat2_marks": 12.8,
        "da_marks": 26.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 721,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 722,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 723,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 724,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 725,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 726,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 727,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 728,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 729,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 730,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 731,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 732,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 733,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 734,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 735,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 736,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 737,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 738,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 739,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 740,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BMR10020",
    "reg_no": "25BMR10020",
    "name": "Raunak Saxena",
    "program": "B.Tech Mechanical (Artificial Intelligence & Robotics)",
    "semester": 2,
    "cgpa": 8.88,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "310-B",
    "courses": [
      {
        "id": 188,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 11.4,
        "cat2_marks": 14.7,
        "da_marks": 25.1,
        "credits": 4
      },
      {
        "id": 189,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 12.3,
        "cat2_marks": 12.4,
        "da_marks": 26.5,
        "credits": 4
      },
      {
        "id": 190,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 20,
        "total": 26,
        "cat1_marks": 11.7,
        "cat2_marks": 13.0,
        "da_marks": 26.4,
        "credits": 4
      },
      {
        "id": 191,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 22,
        "total": 26,
        "cat1_marks": 14.4,
        "cat2_marks": 14.6,
        "da_marks": 29.2,
        "credits": 2
      },
      {
        "id": 192,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 21,
        "total": 25,
        "cat1_marks": 11.1,
        "cat2_marks": 11.5,
        "da_marks": 29.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 741,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 742,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 743,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 744,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 745,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 746,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 747,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 748,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 749,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 750,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 751,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 752,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 753,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 754,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 755,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 756,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 757,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 758,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 759,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 760,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10049",
    "reg_no": "25BSA10049",
    "name": "Pari Pancholiya",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.15,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "334-B",
    "courses": [
      {
        "id": 193,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 20,
        "total": 25,
        "cat1_marks": 14.4,
        "cat2_marks": 11.5,
        "da_marks": 25.3,
        "credits": 4
      },
      {
        "id": 194,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 30,
        "cat1_marks": 12.8,
        "cat2_marks": 12.5,
        "da_marks": 28.2,
        "credits": 4
      },
      {
        "id": 195,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 12.5,
        "cat2_marks": 11.1,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 196,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 24,
        "total": 27,
        "cat1_marks": 12.6,
        "cat2_marks": 15.0,
        "da_marks": 25.8,
        "credits": 2
      },
      {
        "id": 197,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 25,
        "total": 30,
        "cat1_marks": 10.7,
        "cat2_marks": 12.8,
        "da_marks": 29.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 761,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 762,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 763,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 764,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 765,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 766,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 767,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 768,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 769,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 770,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 771,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 772,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 773,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 774,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 775,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 776,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 777,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 778,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 779,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 780,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10051",
    "reg_no": "25BSA10051",
    "name": "Manvi Patel",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.34,
    "is_nine_pointer": true,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-3 (Girls Hostel)",
    "room_no": "427-A",
    "courses": [
      {
        "id": 198,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 26,
        "total": 30,
        "cat1_marks": 10.9,
        "cat2_marks": 11.5,
        "da_marks": 27.1,
        "credits": 4
      },
      {
        "id": 199,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 30,
        "cat1_marks": 13.0,
        "cat2_marks": 14.2,
        "da_marks": 29.6,
        "credits": 4
      },
      {
        "id": 200,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 20,
        "total": 26,
        "cat1_marks": 12.8,
        "cat2_marks": 14.7,
        "da_marks": 28.3,
        "credits": 4
      },
      {
        "id": 201,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 13.4,
        "cat2_marks": 14.8,
        "da_marks": 25.0,
        "credits": 2
      },
      {
        "id": 202,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 25,
        "cat1_marks": 13.8,
        "cat2_marks": 12.9,
        "da_marks": 27.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 781,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 782,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 783,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 784,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 785,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 786,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 787,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 788,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 789,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 790,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 791,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 792,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 793,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 794,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 795,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 796,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 797,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 798,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 799,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 800,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10064",
    "reg_no": "25BSA10064",
    "name": "Shreya Nandkishor Soni",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 7.75,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "412-B",
    "courses": [
      {
        "id": 203,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 20,
        "total": 25,
        "cat1_marks": 11.4,
        "cat2_marks": 14.3,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 204,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 11.7,
        "cat2_marks": 12.0,
        "da_marks": 29.9,
        "credits": 4
      },
      {
        "id": 205,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 18,
        "total": 24,
        "cat1_marks": 13.9,
        "cat2_marks": 11.9,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 206,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 22,
        "total": 27,
        "cat1_marks": 11.2,
        "cat2_marks": 13.9,
        "da_marks": 28.7,
        "credits": 2
      },
      {
        "id": 207,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 25,
        "total": 28,
        "cat1_marks": 14.5,
        "cat2_marks": 13.3,
        "da_marks": 27.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 801,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 802,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 803,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 804,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 805,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 806,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 807,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 808,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 809,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 810,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 811,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 812,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 813,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 814,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 815,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 816,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 817,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 818,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 819,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 820,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10076",
    "reg_no": "25BSA10076",
    "name": "Vatsal Kirti Srivastava",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 7.82,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "223-B",
    "courses": [
      {
        "id": 208,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 21,
        "total": 26,
        "cat1_marks": 10.7,
        "cat2_marks": 11.2,
        "da_marks": 27.0,
        "credits": 4
      },
      {
        "id": 209,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 10.9,
        "cat2_marks": 11.1,
        "da_marks": 26.0,
        "credits": 4
      },
      {
        "id": 210,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 12.5,
        "cat2_marks": 14.4,
        "da_marks": 26.6,
        "credits": 4
      },
      {
        "id": 211,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 24,
        "cat1_marks": 12.6,
        "cat2_marks": 14.9,
        "da_marks": 26.6,
        "credits": 2
      },
      {
        "id": 212,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 27,
        "cat1_marks": 10.8,
        "cat2_marks": 12.2,
        "da_marks": 26.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 821,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 822,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 823,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 824,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 825,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 826,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 827,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 828,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 829,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 830,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 831,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 832,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 833,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 834,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 835,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 836,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 837,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 838,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 839,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 840,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10077",
    "reg_no": "25BSA10077",
    "name": "Aryan Kapoor",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.8,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "419-A",
    "courses": [
      {
        "id": 213,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 12.8,
        "cat2_marks": 12.3,
        "da_marks": 29.3,
        "credits": 4
      },
      {
        "id": 214,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 12.5,
        "cat2_marks": 12.5,
        "da_marks": 25.9,
        "credits": 4
      },
      {
        "id": 215,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 11.8,
        "cat2_marks": 14.1,
        "da_marks": 28.0,
        "credits": 4
      },
      {
        "id": 216,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 26,
        "total": 28,
        "cat1_marks": 11.8,
        "cat2_marks": 14.3,
        "da_marks": 28.7,
        "credits": 2
      },
      {
        "id": 217,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 25,
        "cat1_marks": 11.0,
        "cat2_marks": 14.9,
        "da_marks": 28.1,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 841,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 842,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 843,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 844,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 845,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 846,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 847,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 848,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 849,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 850,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 851,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 852,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 853,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 854,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 855,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 856,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 857,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 858,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 859,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 860,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10079",
    "reg_no": "25BSA10079",
    "name": "Daksh Malviya",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.4,
    "is_nine_pointer": true,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "219-B",
    "courses": [
      {
        "id": 218,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 25,
        "total": 28,
        "cat1_marks": 14.3,
        "cat2_marks": 14.1,
        "da_marks": 28.9,
        "credits": 4
      },
      {
        "id": 219,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 12.1,
        "cat2_marks": 13.8,
        "da_marks": 28.5,
        "credits": 4
      },
      {
        "id": 220,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 10.9,
        "cat2_marks": 12.0,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 221,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 26,
        "total": 28,
        "cat1_marks": 13.3,
        "cat2_marks": 11.7,
        "da_marks": 26.9,
        "credits": 2
      },
      {
        "id": 222,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 25,
        "total": 29,
        "cat1_marks": 12.8,
        "cat2_marks": 13.5,
        "da_marks": 25.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 861,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 862,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 863,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 864,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 865,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 866,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 867,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 868,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 869,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 870,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 871,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 872,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 873,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 874,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 875,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 876,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 877,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 878,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 879,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 880,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10096",
    "reg_no": "25BSA10096",
    "name": "Rishita",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.39,
    "is_nine_pointer": true,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-4 (Girls Hostel)",
    "room_no": "229-A",
    "courses": [
      {
        "id": 223,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 25,
        "cat1_marks": 12.7,
        "cat2_marks": 11.0,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 224,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 14.4,
        "cat2_marks": 11.1,
        "da_marks": 26.9,
        "credits": 4
      },
      {
        "id": 225,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 23,
        "total": 30,
        "cat1_marks": 12.6,
        "cat2_marks": 13.8,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 226,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 10.5,
        "cat2_marks": 12.8,
        "da_marks": 25.2,
        "credits": 2
      },
      {
        "id": 227,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 26,
        "cat1_marks": 10.8,
        "cat2_marks": 13.2,
        "da_marks": 28.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 881,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 882,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 883,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 884,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 885,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 886,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 887,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 888,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 889,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 890,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 891,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 892,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 893,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 894,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 895,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 896,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 897,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 898,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 899,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 900,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10099",
    "reg_no": "25BSA10099",
    "name": "Varan Agrawal",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.22,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "427-A",
    "courses": [
      {
        "id": 228,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 26,
        "total": 28,
        "cat1_marks": 11.1,
        "cat2_marks": 12.6,
        "da_marks": 25.3,
        "credits": 4
      },
      {
        "id": 229,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 29,
        "cat1_marks": 14.3,
        "cat2_marks": 13.8,
        "da_marks": 26.1,
        "credits": 4
      },
      {
        "id": 230,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 19,
        "total": 25,
        "cat1_marks": 10.9,
        "cat2_marks": 14.5,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 231,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 12.7,
        "cat2_marks": 12.5,
        "da_marks": 25.7,
        "credits": 2
      },
      {
        "id": 232,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 27,
        "cat1_marks": 11.9,
        "cat2_marks": 14.2,
        "da_marks": 29.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 901,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 902,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 903,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 904,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 905,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 906,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 907,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 908,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 909,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 910,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 911,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 912,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 913,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 914,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 915,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 916,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 917,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 918,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 919,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 920,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10131",
    "reg_no": "25BSA10131",
    "name": "Shivesh Pratap Singh",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.17,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "312-A",
    "courses": [
      {
        "id": 233,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 27,
        "total": 30,
        "cat1_marks": 11.0,
        "cat2_marks": 14.5,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 234,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 13.0,
        "cat2_marks": 11.2,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 235,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 12.6,
        "cat2_marks": 12.2,
        "da_marks": 26.8,
        "credits": 4
      },
      {
        "id": 236,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 24,
        "total": 26,
        "cat1_marks": 11.4,
        "cat2_marks": 12.5,
        "da_marks": 28.7,
        "credits": 2
      },
      {
        "id": 237,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 26,
        "cat1_marks": 13.5,
        "cat2_marks": 14.8,
        "da_marks": 28.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 921,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 922,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 923,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 924,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 925,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 926,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 927,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 928,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 929,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 930,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 931,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 932,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 933,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 934,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 935,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 936,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 937,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 938,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 939,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 940,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10143",
    "reg_no": "25BSA10143",
    "name": "Anamika Kumari",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 7.65,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "117-A",
    "courses": [
      {
        "id": 238,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 12.4,
        "cat2_marks": 13.6,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 239,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 29,
        "cat1_marks": 13.9,
        "cat2_marks": 14.3,
        "da_marks": 25.3,
        "credits": 4
      },
      {
        "id": 240,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 13.2,
        "cat2_marks": 11.3,
        "da_marks": 25.5,
        "credits": 4
      },
      {
        "id": 241,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 26,
        "cat1_marks": 13.8,
        "cat2_marks": 13.6,
        "da_marks": 26.2,
        "credits": 2
      },
      {
        "id": 242,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 30,
        "cat1_marks": 14.2,
        "cat2_marks": 14.7,
        "da_marks": 25.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 941,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 942,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 943,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 944,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 945,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 946,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 947,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 948,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 949,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 950,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 951,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 952,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 953,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 954,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 955,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 956,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 957,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 958,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 959,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 960,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10146",
    "reg_no": "25BSA10146",
    "name": "Shivani Sahay",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.25,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "430-A",
    "courses": [
      {
        "id": 243,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 22,
        "total": 27,
        "cat1_marks": 12.0,
        "cat2_marks": 11.0,
        "da_marks": 29.1,
        "credits": 4
      },
      {
        "id": 244,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 29,
        "cat1_marks": 11.0,
        "cat2_marks": 11.1,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 245,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 11.4,
        "cat2_marks": 13.2,
        "da_marks": 29.8,
        "credits": 4
      },
      {
        "id": 246,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 21,
        "total": 25,
        "cat1_marks": 13.5,
        "cat2_marks": 13.0,
        "da_marks": 25.2,
        "credits": 2
      },
      {
        "id": 247,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 25,
        "cat1_marks": 12.8,
        "cat2_marks": 13.2,
        "da_marks": 26.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 961,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 962,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 963,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 964,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 965,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 966,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 967,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 968,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 969,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 970,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 971,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 972,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 973,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 974,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 975,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 976,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 977,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 978,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 979,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 980,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10154",
    "reg_no": "25BSA10154",
    "name": "Anivesh Singh",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.65,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "125-A",
    "courses": [
      {
        "id": 248,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 21,
        "total": 26,
        "cat1_marks": 14.0,
        "cat2_marks": 12.8,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 249,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 27,
        "cat1_marks": 12.7,
        "cat2_marks": 13.0,
        "da_marks": 27.2,
        "credits": 4
      },
      {
        "id": 250,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 11.3,
        "cat2_marks": 11.3,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 251,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 22,
        "total": 25,
        "cat1_marks": 12.5,
        "cat2_marks": 14.0,
        "da_marks": 27.7,
        "credits": 2
      },
      {
        "id": 252,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 20,
        "total": 25,
        "cat1_marks": 11.2,
        "cat2_marks": 12.4,
        "da_marks": 29.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 981,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 982,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 983,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 984,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 985,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 986,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 987,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 988,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 989,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 990,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 991,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 992,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 993,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 994,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 995,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 996,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 997,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 998,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 999,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1000,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10157",
    "reg_no": "25BSA10157",
    "name": "Bhavya Kushwaha",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 7.64,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "427-B",
    "courses": [
      {
        "id": 253,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 25,
        "cat1_marks": 12.9,
        "cat2_marks": 14.5,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 254,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 11.0,
        "cat2_marks": 11.8,
        "da_marks": 27.8,
        "credits": 4
      },
      {
        "id": 255,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 13.9,
        "cat2_marks": 12.2,
        "da_marks": 26.6,
        "credits": 4
      },
      {
        "id": 256,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 23,
        "total": 27,
        "cat1_marks": 11.6,
        "cat2_marks": 14.5,
        "da_marks": 27.9,
        "credits": 2
      },
      {
        "id": 257,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 24,
        "total": 27,
        "cat1_marks": 12.5,
        "cat2_marks": 13.6,
        "da_marks": 29.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1001,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1002,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1003,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1004,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1005,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1006,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1007,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1008,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1009,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1010,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1011,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1012,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1013,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1014,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1015,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1016,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1017,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1018,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1019,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1020,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10163",
    "reg_no": "25BSA10163",
    "name": "Raushan Kumar",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 8.23,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "335-A",
    "courses": [
      {
        "id": 258,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 22,
        "total": 27,
        "cat1_marks": 11.1,
        "cat2_marks": 12.6,
        "da_marks": 27.9,
        "credits": 4
      },
      {
        "id": 259,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 14.2,
        "cat2_marks": 13.4,
        "da_marks": 28.0,
        "credits": 4
      },
      {
        "id": 260,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 11.2,
        "cat2_marks": 11.7,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 261,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 28,
        "cat1_marks": 14.0,
        "cat2_marks": 11.8,
        "da_marks": 25.2,
        "credits": 2
      },
      {
        "id": 262,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 24,
        "cat1_marks": 12.8,
        "cat2_marks": 12.7,
        "da_marks": 29.6,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1021,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1022,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1023,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1024,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1025,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1026,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1027,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1028,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1029,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1030,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1031,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1032,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1033,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1034,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1035,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1036,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1037,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1038,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1039,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1040,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10176",
    "reg_no": "25BSA10176",
    "name": "Omera Singh",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.06,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "424-B",
    "courses": [
      {
        "id": 263,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 26,
        "cat1_marks": 11.0,
        "cat2_marks": 11.1,
        "da_marks": 27.7,
        "credits": 4
      },
      {
        "id": 264,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 28,
        "cat1_marks": 13.9,
        "cat2_marks": 12.3,
        "da_marks": 25.5,
        "credits": 4
      },
      {
        "id": 265,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 28,
        "cat1_marks": 12.3,
        "cat2_marks": 13.6,
        "da_marks": 26.7,
        "credits": 4
      },
      {
        "id": 266,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 22,
        "total": 26,
        "cat1_marks": 12.0,
        "cat2_marks": 12.4,
        "da_marks": 25.1,
        "credits": 2
      },
      {
        "id": 267,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 27,
        "cat1_marks": 11.0,
        "cat2_marks": 11.7,
        "da_marks": 25.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1041,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1042,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1043,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1044,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1045,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1046,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1047,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1048,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1049,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1050,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1051,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1052,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1053,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1054,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1055,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1056,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1057,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1058,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1059,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1060,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25BSA10178",
    "reg_no": "25BSA10178",
    "name": "Tejas Agrawal",
    "program": "B.Tech CSE (Cloud Computing & Automation)",
    "semester": 2,
    "cgpa": 9.34,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "216-B",
    "courses": [
      {
        "id": 268,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 25,
        "total": 28,
        "cat1_marks": 12.6,
        "cat2_marks": 13.9,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 269,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 17,
        "total": 24,
        "cat1_marks": 14.4,
        "cat2_marks": 11.9,
        "da_marks": 25.4,
        "credits": 4
      },
      {
        "id": 270,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.6,
        "cat2_marks": 12.4,
        "da_marks": 29.3,
        "credits": 4
      },
      {
        "id": 271,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 23,
        "total": 28,
        "cat1_marks": 14.5,
        "cat2_marks": 13.8,
        "da_marks": 26.5,
        "credits": 2
      },
      {
        "id": 272,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 27,
        "total": 30,
        "cat1_marks": 12.4,
        "cat2_marks": 13.2,
        "da_marks": 26.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1061,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1062,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1063,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1064,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1065,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1066,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1067,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1068,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1069,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1070,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1071,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1072,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1073,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1074,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1075,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1076,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1077,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1078,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1079,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1080,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25MIB10009",
    "reg_no": "25MIB10009",
    "name": "Mohammad.Ali",
    "program": "Integrated M.Tech AI and Bioinformatics",
    "semester": 2,
    "cgpa": 8.93,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "429-A",
    "courses": [
      {
        "id": 273,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 24,
        "total": 29,
        "cat1_marks": 12.0,
        "cat2_marks": 12.1,
        "da_marks": 26.1,
        "credits": 4
      },
      {
        "id": 274,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 25,
        "cat1_marks": 12.6,
        "cat2_marks": 14.6,
        "da_marks": 27.7,
        "credits": 4
      },
      {
        "id": 275,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 10.6,
        "cat2_marks": 14.1,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 276,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 28,
        "total": 30,
        "cat1_marks": 12.2,
        "cat2_marks": 14.6,
        "da_marks": 25.2,
        "credits": 2
      },
      {
        "id": 277,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 25,
        "cat1_marks": 12.2,
        "cat2_marks": 11.1,
        "da_marks": 26.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1081,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1082,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1083,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1084,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1085,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1086,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1087,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1088,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1089,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1090,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1091,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1092,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1093,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1094,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1095,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1096,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1097,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1098,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1099,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1100,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25MIB10044",
    "reg_no": "25MIB10044",
    "name": "Divy Vishwakarma",
    "program": "Integrated M.Tech AI and Bioinformatics",
    "semester": 2,
    "cgpa": 7.48,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "126-B",
    "courses": [
      {
        "id": 278,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 23,
        "total": 26,
        "cat1_marks": 11.9,
        "cat2_marks": 13.0,
        "da_marks": 26.2,
        "credits": 4
      },
      {
        "id": 279,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 26,
        "cat1_marks": 13.5,
        "cat2_marks": 11.6,
        "da_marks": 26.8,
        "credits": 4
      },
      {
        "id": 280,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 19,
        "total": 25,
        "cat1_marks": 11.4,
        "cat2_marks": 14.1,
        "da_marks": 30.0,
        "credits": 4
      },
      {
        "id": 281,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 28,
        "cat1_marks": 13.6,
        "cat2_marks": 13.9,
        "da_marks": 28.0,
        "credits": 2
      },
      {
        "id": 282,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 22,
        "total": 25,
        "cat1_marks": 13.0,
        "cat2_marks": 12.9,
        "da_marks": 26.6,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1101,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1102,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1103,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1104,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1105,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1106,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1107,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1108,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1109,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1110,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1111,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1112,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1113,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1114,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1115,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1116,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1117,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1118,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1119,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1120,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25MIB10049",
    "reg_no": "25MIB10049",
    "name": "Manha Siddiqui",
    "program": "Integrated M.Tech AI and Bioinformatics",
    "semester": 2,
    "cgpa": 9.27,
    "is_nine_pointer": true,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "227-A",
    "courses": [
      {
        "id": 283,
        "code": "CSE1001",
        "title": "Problem Solving & Programming in Python",
        "slot": "A1+TA1",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma",
        "attended": 27,
        "total": 30,
        "cat1_marks": 12.8,
        "cat2_marks": 12.2,
        "da_marks": 26.4,
        "credits": 4
      },
      {
        "id": 284,
        "code": "MAT1001",
        "title": "Calculus and Differential Equations",
        "slot": "B1+TB1",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 27,
        "cat1_marks": 12.7,
        "cat2_marks": 13.2,
        "da_marks": 28.3,
        "credits": 4
      },
      {
        "id": 285,
        "code": "EEE1001",
        "title": "Basic Electrical & Electronics",
        "slot": "C1+TC1",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao",
        "attended": 21,
        "total": 27,
        "cat1_marks": 12.4,
        "cat2_marks": 14.8,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 286,
        "code": "ENG1001",
        "title": "Technical English Communication",
        "slot": "D1+TD1",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma",
        "attended": 25,
        "total": 28,
        "cat1_marks": 13.0,
        "cat2_marks": 14.8,
        "da_marks": 27.3,
        "credits": 2
      },
      {
        "id": 287,
        "code": "CHY1001",
        "title": "Engineering Chemistry",
        "slot": "E1+TE1",
        "venue": "AB-1 502",
        "faculty": "Dr. Sanat Jain",
        "attended": 23,
        "total": 26,
        "cat1_marks": 13.5,
        "cat2_marks": 11.3,
        "da_marks": 25.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1121,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1122,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1123,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1124,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1125,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1126,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1127,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1128,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1129,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1130,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1131,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1132,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1133,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1134,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1135,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1136,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      },
      {
        "id": 1137,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Problem Solving & Programming in Python",
        "code": "CSE1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Ananya Sharma"
      },
      {
        "id": 1138,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Calculus and Differential Equations",
        "code": "MAT1001",
        "venue": "AB-2 301",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1139,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Basic Electrical & Electronics",
        "code": "EEE1001",
        "venue": "AB-2 218",
        "faculty": "Dr. Vikramaditya Rao"
      },
      {
        "id": 1140,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Technical English Communication",
        "code": "ENG1001",
        "venue": "AB-1 204",
        "faculty": "Dr. Ava Sharma"
      }
    ]
  },
  {
    "id": "25MIM10024",
    "reg_no": "25MIM10024",
    "name": "Harshita Thakur",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.1,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "218-A",
    "courses": [
      {
        "id": 293,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 22,
        "total": 24,
        "cat1_marks": 12.9,
        "cat2_marks": 12.2,
        "da_marks": 29.3,
        "credits": 4
      },
      {
        "id": 294,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 18,
        "total": 26,
        "cat1_marks": 12.4,
        "cat2_marks": 12.0,
        "da_marks": 25.4,
        "credits": 3
      },
      {
        "id": 295,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 30,
        "cat1_marks": 12.2,
        "cat2_marks": 14.0,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 296,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 23,
        "total": 25,
        "cat1_marks": 13.4,
        "cat2_marks": 13.3,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 297,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 22,
        "total": 27,
        "cat1_marks": 13.3,
        "cat2_marks": 14.7,
        "da_marks": 30.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1161,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1162,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1163,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1164,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1165,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1166,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1167,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1168,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1169,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1170,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1171,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1172,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1173,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1174,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1175,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1176,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1177,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1178,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1179,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1180,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10036",
    "reg_no": "25MIM10036",
    "name": "Bhoomika Payasi",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 9.13,
    "is_nine_pointer": true,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "429-A",
    "courses": [
      {
        "id": 298,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 26,
        "total": 30,
        "cat1_marks": 12.0,
        "cat2_marks": 11.7,
        "da_marks": 28.4,
        "credits": 4
      },
      {
        "id": 299,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 28,
        "cat1_marks": 14.4,
        "cat2_marks": 11.3,
        "da_marks": 29.3,
        "credits": 3
      },
      {
        "id": 300,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 27,
        "cat1_marks": 12.7,
        "cat2_marks": 14.3,
        "da_marks": 26.9,
        "credits": 4
      },
      {
        "id": 301,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 25,
        "total": 29,
        "cat1_marks": 14.3,
        "cat2_marks": 12.6,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 302,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 23,
        "total": 27,
        "cat1_marks": 13.8,
        "cat2_marks": 11.1,
        "da_marks": 29.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1181,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1182,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1183,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1184,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1185,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1186,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1187,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1188,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1189,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1190,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1191,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1192,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1193,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1194,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1195,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1196,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1197,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1198,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1199,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1200,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10040",
    "reg_no": "25MIM10040",
    "name": "Boya Shiva",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.71,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "423-B",
    "courses": [
      {
        "id": 303,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 25,
        "total": 30,
        "cat1_marks": 11.6,
        "cat2_marks": 14.5,
        "da_marks": 28.6,
        "credits": 4
      },
      {
        "id": 304,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 18,
        "total": 25,
        "cat1_marks": 13.2,
        "cat2_marks": 13.9,
        "da_marks": 26.8,
        "credits": 3
      },
      {
        "id": 305,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 28,
        "cat1_marks": 14.1,
        "cat2_marks": 12.3,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 306,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 24,
        "total": 29,
        "cat1_marks": 13.1,
        "cat2_marks": 13.0,
        "da_marks": 28.6,
        "credits": 4
      },
      {
        "id": 307,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 23,
        "total": 25,
        "cat1_marks": 14.2,
        "cat2_marks": 12.9,
        "da_marks": 29.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1201,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1202,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1203,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1204,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1205,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1206,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1207,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1208,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1209,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1210,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1211,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1212,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1213,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1214,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1215,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1216,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1217,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1218,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1219,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1220,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10049",
    "reg_no": "25MIM10049",
    "name": "Kolisetty Vignesh",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.85,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-4 (Boys Hostel)",
    "room_no": "413-A",
    "courses": [
      {
        "id": 308,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 25,
        "total": 27,
        "cat1_marks": 13.5,
        "cat2_marks": 13.9,
        "da_marks": 27.7,
        "credits": 4
      },
      {
        "id": 309,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 18,
        "total": 26,
        "cat1_marks": 10.8,
        "cat2_marks": 14.2,
        "da_marks": 26.6,
        "credits": 3
      },
      {
        "id": 310,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 29,
        "cat1_marks": 11.9,
        "cat2_marks": 11.7,
        "da_marks": 27.8,
        "credits": 4
      },
      {
        "id": 311,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 22,
        "total": 27,
        "cat1_marks": 14.1,
        "cat2_marks": 14.4,
        "da_marks": 28.8,
        "credits": 4
      },
      {
        "id": 312,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 25,
        "total": 27,
        "cat1_marks": 10.8,
        "cat2_marks": 13.8,
        "da_marks": 25.8,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1221,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1222,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1223,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1224,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1225,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1226,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1227,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1228,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1229,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1230,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1231,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1232,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1233,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1234,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1235,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1236,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1237,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1238,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1239,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1240,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10077",
    "reg_no": "25MIM10077",
    "name": "Rayansh Jaiswal",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.96,
    "is_nine_pointer": false,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "432-A",
    "courses": [
      {
        "id": 313,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 24,
        "total": 29,
        "cat1_marks": 12.6,
        "cat2_marks": 12.6,
        "da_marks": 26.6,
        "credits": 4
      },
      {
        "id": 314,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 29,
        "cat1_marks": 13.2,
        "cat2_marks": 13.4,
        "da_marks": 27.6,
        "credits": 3
      },
      {
        "id": 315,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 24,
        "cat1_marks": 12.9,
        "cat2_marks": 14.5,
        "da_marks": 28.8,
        "credits": 4
      },
      {
        "id": 316,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 26,
        "total": 30,
        "cat1_marks": 11.5,
        "cat2_marks": 11.9,
        "da_marks": 29.2,
        "credits": 4
      },
      {
        "id": 317,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 21,
        "total": 25,
        "cat1_marks": 12.7,
        "cat2_marks": 12.6,
        "da_marks": 29.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1241,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1242,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1243,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1244,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1245,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1246,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1247,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1248,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1249,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1250,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1251,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1252,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1253,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1254,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1255,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1256,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1257,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1258,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1259,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1260,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10093",
    "reg_no": "25MIM10093",
    "name": "Vibhor Srivastava",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.97,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "316-A",
    "courses": [
      {
        "id": 318,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 24,
        "total": 26,
        "cat1_marks": 12.3,
        "cat2_marks": 12.6,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 319,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 10.8,
        "cat2_marks": 11.1,
        "da_marks": 28.6,
        "credits": 3
      },
      {
        "id": 320,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 21,
        "total": 27,
        "cat1_marks": 10.8,
        "cat2_marks": 14.7,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 321,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 25,
        "total": 30,
        "cat1_marks": 12.4,
        "cat2_marks": 14.7,
        "da_marks": 29.9,
        "credits": 4
      },
      {
        "id": 322,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 22,
        "total": 25,
        "cat1_marks": 10.8,
        "cat2_marks": 13.4,
        "da_marks": 29.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1261,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1262,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1263,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1264,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1265,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1266,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1267,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1268,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1269,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1270,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1271,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1272,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1273,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1274,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1275,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1276,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1277,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1278,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1279,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1280,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10096",
    "reg_no": "25MIM10096",
    "name": "Palodkar Gayatri Gajanan",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 9.06,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "127-A",
    "courses": [
      {
        "id": 323,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 23,
        "total": 26,
        "cat1_marks": 11.8,
        "cat2_marks": 11.7,
        "da_marks": 27.6,
        "credits": 4
      },
      {
        "id": 324,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 28,
        "cat1_marks": 14.1,
        "cat2_marks": 11.6,
        "da_marks": 26.6,
        "credits": 3
      },
      {
        "id": 325,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 26,
        "cat1_marks": 14.0,
        "cat2_marks": 14.6,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 326,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 26,
        "total": 30,
        "cat1_marks": 14.5,
        "cat2_marks": 13.4,
        "da_marks": 25.9,
        "credits": 4
      },
      {
        "id": 327,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 27,
        "total": 30,
        "cat1_marks": 11.4,
        "cat2_marks": 14.0,
        "da_marks": 27.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1281,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1282,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1283,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1284,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1285,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1286,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1287,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1288,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1289,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1290,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1291,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1292,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1293,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1294,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1295,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1296,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1297,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1298,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1299,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1300,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10099",
    "reg_no": "25MIM10099",
    "name": "G Sai Ganesh",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.84,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "429-B",
    "courses": [
      {
        "id": 328,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 23,
        "total": 25,
        "cat1_marks": 14.0,
        "cat2_marks": 11.3,
        "da_marks": 26.6,
        "credits": 4
      },
      {
        "id": 329,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 12.8,
        "cat2_marks": 13.0,
        "da_marks": 25.9,
        "credits": 3
      },
      {
        "id": 330,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 24,
        "cat1_marks": 13.2,
        "cat2_marks": 13.4,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 331,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 24,
        "total": 28,
        "cat1_marks": 11.2,
        "cat2_marks": 13.3,
        "da_marks": 27.3,
        "credits": 4
      },
      {
        "id": 332,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 26,
        "total": 30,
        "cat1_marks": 10.9,
        "cat2_marks": 11.0,
        "da_marks": 27.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1301,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1302,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1303,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1304,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1305,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1306,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1307,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1308,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1309,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1310,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1311,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1312,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1313,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1314,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1315,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1316,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1317,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1318,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1319,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1320,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10104",
    "reg_no": "25MIM10104",
    "name": "Khushboo Vinod Patil",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.72,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-1 (Girls Hostel)",
    "room_no": "134-A",
    "courses": [
      {
        "id": 333,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 22,
        "total": 25,
        "cat1_marks": 13.4,
        "cat2_marks": 14.7,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 334,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 11.4,
        "cat2_marks": 13.9,
        "da_marks": 25.9,
        "credits": 3
      },
      {
        "id": 335,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 29,
        "cat1_marks": 12.5,
        "cat2_marks": 12.6,
        "da_marks": 25.3,
        "credits": 4
      },
      {
        "id": 336,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 23,
        "total": 25,
        "cat1_marks": 13.1,
        "cat2_marks": 11.5,
        "da_marks": 26.1,
        "credits": 4
      },
      {
        "id": 337,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 25,
        "total": 28,
        "cat1_marks": 10.8,
        "cat2_marks": 11.6,
        "da_marks": 28.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1321,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1322,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1323,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1324,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1325,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1326,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1327,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1328,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1329,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1330,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1331,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1332,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1333,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1334,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1335,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1336,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1337,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1338,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1339,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1340,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10111",
    "reg_no": "25MIM10111",
    "name": "Gopinath R",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 9.11,
    "is_nine_pointer": true,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "419-A",
    "courses": [
      {
        "id": 338,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 22,
        "total": 26,
        "cat1_marks": 12.2,
        "cat2_marks": 11.1,
        "da_marks": 26.9,
        "credits": 4
      },
      {
        "id": 339,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 28,
        "cat1_marks": 13.4,
        "cat2_marks": 14.7,
        "da_marks": 29.2,
        "credits": 3
      },
      {
        "id": 340,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 25,
        "cat1_marks": 13.8,
        "cat2_marks": 14.2,
        "da_marks": 28.3,
        "credits": 4
      },
      {
        "id": 341,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 24,
        "total": 27,
        "cat1_marks": 12.8,
        "cat2_marks": 15.0,
        "da_marks": 28.3,
        "credits": 4
      },
      {
        "id": 342,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 23,
        "total": 25,
        "cat1_marks": 13.2,
        "cat2_marks": 12.1,
        "da_marks": 29.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1341,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1342,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1343,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1344,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1345,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1346,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1347,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1348,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1349,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1350,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1351,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1352,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1353,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1354,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1355,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1356,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1357,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1358,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1359,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1360,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10171",
    "reg_no": "25MIM10171",
    "name": "Sanu Singh",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.87,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "310-B",
    "courses": [
      {
        "id": 343,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 24,
        "total": 28,
        "cat1_marks": 11.8,
        "cat2_marks": 13.9,
        "da_marks": 25.9,
        "credits": 4
      },
      {
        "id": 344,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 17,
        "total": 24,
        "cat1_marks": 11.5,
        "cat2_marks": 14.1,
        "da_marks": 25.7,
        "credits": 3
      },
      {
        "id": 345,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 26,
        "cat1_marks": 10.8,
        "cat2_marks": 13.4,
        "da_marks": 29.8,
        "credits": 4
      },
      {
        "id": 346,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 20,
        "total": 25,
        "cat1_marks": 12.2,
        "cat2_marks": 12.7,
        "da_marks": 28.7,
        "credits": 4
      },
      {
        "id": 347,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 20,
        "total": 24,
        "cat1_marks": 13.4,
        "cat2_marks": 15.0,
        "da_marks": 26.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1361,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1362,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1363,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1364,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1365,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1366,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1367,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1368,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1369,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1370,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1371,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1372,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1373,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1374,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1375,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1376,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1377,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1378,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1379,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1380,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10176",
    "reg_no": "25MIM10176",
    "name": "Tushar Sen",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.52,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "116-A",
    "courses": [
      {
        "id": 348,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 24,
        "cat1_marks": 13.3,
        "cat2_marks": 13.2,
        "da_marks": 26.0,
        "credits": 4
      },
      {
        "id": 349,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 11.7,
        "cat2_marks": 11.8,
        "da_marks": 29.9,
        "credits": 3
      },
      {
        "id": 350,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 30,
        "cat1_marks": 13.4,
        "cat2_marks": 14.1,
        "da_marks": 29.7,
        "credits": 4
      },
      {
        "id": 351,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 25,
        "total": 28,
        "cat1_marks": 10.8,
        "cat2_marks": 12.1,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 352,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 26,
        "total": 30,
        "cat1_marks": 11.1,
        "cat2_marks": 12.8,
        "da_marks": 28.5,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1381,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1382,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1383,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1384,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1385,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1386,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1387,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1388,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1389,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1390,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1391,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1392,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1393,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1394,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1395,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1396,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1397,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1398,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1399,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1400,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10181",
    "reg_no": "25MIM10181",
    "name": "Jeet Biswas",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.6,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "433-B",
    "courses": [
      {
        "id": 353,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 23,
        "total": 26,
        "cat1_marks": 11.4,
        "cat2_marks": 14.5,
        "da_marks": 29.8,
        "credits": 4
      },
      {
        "id": 354,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 17,
        "total": 24,
        "cat1_marks": 14.1,
        "cat2_marks": 11.4,
        "da_marks": 25.8,
        "credits": 3
      },
      {
        "id": 355,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 25,
        "cat1_marks": 13.6,
        "cat2_marks": 13.3,
        "da_marks": 29.8,
        "credits": 4
      },
      {
        "id": 356,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 26,
        "total": 28,
        "cat1_marks": 13.5,
        "cat2_marks": 14.9,
        "da_marks": 29.8,
        "credits": 4
      },
      {
        "id": 357,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 23,
        "total": 26,
        "cat1_marks": 12.7,
        "cat2_marks": 15.0,
        "da_marks": 27.0,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1401,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1402,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1403,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1404,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1405,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1406,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1407,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1408,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1409,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1410,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1411,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1412,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1413,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1414,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1415,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1416,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1417,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1418,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1419,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1420,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10186",
    "reg_no": "25MIM10186",
    "name": "Kumari Saumya",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.98,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-1 (Girls Hostel)",
    "room_no": "414-A",
    "courses": [
      {
        "id": 358,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 25,
        "total": 29,
        "cat1_marks": 13.6,
        "cat2_marks": 13.4,
        "da_marks": 28.8,
        "credits": 4
      },
      {
        "id": 359,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 29,
        "cat1_marks": 10.7,
        "cat2_marks": 12.9,
        "da_marks": 27.5,
        "credits": 3
      },
      {
        "id": 360,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 23,
        "total": 30,
        "cat1_marks": 11.5,
        "cat2_marks": 13.1,
        "da_marks": 26.3,
        "credits": 4
      },
      {
        "id": 361,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 23,
        "total": 25,
        "cat1_marks": 12.3,
        "cat2_marks": 12.3,
        "da_marks": 25.7,
        "credits": 4
      },
      {
        "id": 362,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 22,
        "total": 27,
        "cat1_marks": 13.7,
        "cat2_marks": 12.5,
        "da_marks": 28.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1421,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1422,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1423,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1424,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1425,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1426,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1427,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1428,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1429,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1430,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1431,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1432,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1433,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1434,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1435,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1436,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1437,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1438,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1439,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1440,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10197",
    "reg_no": "25MIM10197",
    "name": "Atharv Balraj Vishwakarma",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.43,
    "is_nine_pointer": false,
    "proctor": "Dr. Pushpinder Singh Patheja",
    "proctor_cabin": "AB01 G-09",
    "hostel_block": "Block-1 (Boys Hostel)",
    "room_no": "318-B",
    "courses": [
      {
        "id": 363,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 23,
        "total": 27,
        "cat1_marks": 13.2,
        "cat2_marks": 11.6,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 364,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 28,
        "cat1_marks": 13.2,
        "cat2_marks": 12.5,
        "da_marks": 27.1,
        "credits": 3
      },
      {
        "id": 365,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 25,
        "cat1_marks": 14.1,
        "cat2_marks": 12.8,
        "da_marks": 29.9,
        "credits": 4
      },
      {
        "id": 366,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 22,
        "total": 27,
        "cat1_marks": 10.9,
        "cat2_marks": 12.8,
        "da_marks": 29.4,
        "credits": 4
      },
      {
        "id": 367,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 24,
        "total": 26,
        "cat1_marks": 13.1,
        "cat2_marks": 14.4,
        "da_marks": 27.7,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1441,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1442,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1443,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1444,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1445,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1446,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1447,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1448,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1449,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1450,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1451,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1452,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1453,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1454,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1455,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1456,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1457,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1458,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1459,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1460,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10213",
    "reg_no": "25MIM10213",
    "name": "Raj Verma",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.64,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Boys Hostel)",
    "room_no": "331-B",
    "courses": [
      {
        "id": 368,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 21,
        "total": 24,
        "cat1_marks": 12.4,
        "cat2_marks": 14.5,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 369,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 18,
        "total": 25,
        "cat1_marks": 10.7,
        "cat2_marks": 12.0,
        "da_marks": 27.3,
        "credits": 3
      },
      {
        "id": 370,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 29,
        "cat1_marks": 10.8,
        "cat2_marks": 11.8,
        "da_marks": 27.8,
        "credits": 4
      },
      {
        "id": 371,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 26,
        "total": 30,
        "cat1_marks": 10.6,
        "cat2_marks": 11.3,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 372,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 21,
        "total": 24,
        "cat1_marks": 12.2,
        "cat2_marks": 13.9,
        "da_marks": 28.4,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1461,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1462,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1463,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1464,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1465,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1466,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1467,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1468,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1469,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1470,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1471,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1472,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1473,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1474,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1475,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1476,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1477,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1478,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1479,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1480,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10230",
    "reg_no": "25MIM10230",
    "name": "Yashvi Ghatiya",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 9.23,
    "is_nine_pointer": true,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-5 (Girls Hostel)",
    "room_no": "312-A",
    "courses": [
      {
        "id": 373,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 25,
        "total": 27,
        "cat1_marks": 13.5,
        "cat2_marks": 14.8,
        "da_marks": 29.5,
        "credits": 4
      },
      {
        "id": 374,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 14.3,
        "cat2_marks": 14.6,
        "da_marks": 28.4,
        "credits": 3
      },
      {
        "id": 375,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 18,
        "total": 24,
        "cat1_marks": 10.5,
        "cat2_marks": 13.3,
        "da_marks": 28.0,
        "credits": 4
      },
      {
        "id": 376,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 23,
        "total": 26,
        "cat1_marks": 12.0,
        "cat2_marks": 11.3,
        "da_marks": 26.6,
        "credits": 4
      },
      {
        "id": 377,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 24,
        "total": 30,
        "cat1_marks": 12.5,
        "cat2_marks": 14.2,
        "da_marks": 25.8,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1481,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1482,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1483,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1484,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1485,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1486,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1487,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1488,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1489,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1490,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1491,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1492,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1493,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1494,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1495,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1496,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1497,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1498,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1499,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1500,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10236",
    "reg_no": "25MIM10236",
    "name": "Kuldeep",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 9.06,
    "is_nine_pointer": true,
    "proctor": "Dr. Abhishek Kumar Shukla",
    "proctor_cabin": "AB01 A-116",
    "hostel_block": "Block-5 (Boys Hostel)",
    "room_no": "218-A",
    "courses": [
      {
        "id": 378,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 22,
        "total": 27,
        "cat1_marks": 14.1,
        "cat2_marks": 12.0,
        "da_marks": 25.2,
        "credits": 4
      },
      {
        "id": 379,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 29,
        "cat1_marks": 11.0,
        "cat2_marks": 14.7,
        "da_marks": 27.3,
        "credits": 3
      },
      {
        "id": 380,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 22,
        "total": 29,
        "cat1_marks": 12.3,
        "cat2_marks": 14.1,
        "da_marks": 27.0,
        "credits": 4
      },
      {
        "id": 381,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 24,
        "total": 29,
        "cat1_marks": 13.5,
        "cat2_marks": 12.2,
        "da_marks": 26.4,
        "credits": 4
      },
      {
        "id": 382,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 27,
        "total": 29,
        "cat1_marks": 14.1,
        "cat2_marks": 15.0,
        "da_marks": 25.2,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1501,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1502,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1503,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1504,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1505,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1506,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1507,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1508,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1509,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1510,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1511,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1512,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1513,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1514,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1515,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1516,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1517,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1518,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1519,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1520,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10237",
    "reg_no": "25MIM10237",
    "name": "Priyanshi Parashar",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.24,
    "is_nine_pointer": false,
    "proctor": "Dr. Baseera A",
    "proctor_cabin": "AB01 A-103",
    "hostel_block": "Block-3 (Girls Hostel)",
    "room_no": "215-B",
    "courses": [
      {
        "id": 383,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 26,
        "total": 28,
        "cat1_marks": 14.4,
        "cat2_marks": 13.3,
        "da_marks": 29.3,
        "credits": 4
      },
      {
        "id": 384,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 20,
        "total": 28,
        "cat1_marks": 13.4,
        "cat2_marks": 11.9,
        "da_marks": 27.6,
        "credits": 3
      },
      {
        "id": 385,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 19,
        "total": 25,
        "cat1_marks": 12.1,
        "cat2_marks": 12.1,
        "da_marks": 25.9,
        "credits": 4
      },
      {
        "id": 386,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 20,
        "total": 24,
        "cat1_marks": 11.9,
        "cat2_marks": 11.9,
        "da_marks": 27.6,
        "credits": 4
      },
      {
        "id": 387,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 24,
        "total": 28,
        "cat1_marks": 14.5,
        "cat2_marks": 15.0,
        "da_marks": 25.3,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1521,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1522,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1523,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1524,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1525,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1526,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1527,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1528,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1529,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1530,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1531,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1532,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1533,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1534,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1535,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1536,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1537,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1538,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1539,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1540,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10241",
    "reg_no": "25MIM10241",
    "name": "Laura Joshy",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 7.64,
    "is_nine_pointer": false,
    "proctor": "Dr. Sneha Kulkarni",
    "proctor_cabin": "AB02 FC303",
    "hostel_block": "Block-2 (Girls Hostel)",
    "room_no": "433-B",
    "courses": [
      {
        "id": 388,
        "code": "CSE2001",
        "title": "Data Structures & Algorithms",
        "slot": "A1+TA1",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni",
        "attended": 23,
        "total": 28,
        "cat1_marks": 11.1,
        "cat2_marks": 11.4,
        "da_marks": 27.5,
        "credits": 4
      },
      {
        "id": 389,
        "code": "AIM1001",
        "title": "Foundations of Artificial Intelligence",
        "slot": "B1+TB1",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma",
        "attended": 21,
        "total": 30,
        "cat1_marks": 11.6,
        "cat2_marks": 14.3,
        "da_marks": 25.4,
        "credits": 3
      },
      {
        "id": 390,
        "code": "MAT2002",
        "title": "Linear Algebra & Probability",
        "slot": "C1+TC1",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram",
        "attended": 20,
        "total": 26,
        "cat1_marks": 11.0,
        "cat2_marks": 14.7,
        "da_marks": 29.9,
        "credits": 4
      },
      {
        "id": 391,
        "code": "CSE2003",
        "title": "Database Management Systems",
        "slot": "D1+TD1",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla",
        "attended": 24,
        "total": 26,
        "cat1_marks": 13.0,
        "cat2_marks": 14.7,
        "da_marks": 27.4,
        "credits": 4
      },
      {
        "id": 392,
        "code": "PHY1001",
        "title": "Engineering Physics",
        "slot": "E1+TE1",
        "venue": "AB-1 116",
        "faculty": "Dr. Baseera A",
        "attended": 23,
        "total": 26,
        "cat1_marks": 12.5,
        "cat2_marks": 12.7,
        "da_marks": 28.9,
        "credits": 4
      }
    ],
    "timetables": [
      {
        "id": 1541,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1542,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1543,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1544,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1545,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1546,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1547,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1548,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1549,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1550,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1551,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1552,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1553,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1554,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1555,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1556,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      },
      {
        "id": 1557,
        "day": "",
        "slot": "A1+TA1",
        "time": "",
        "course": "Data Structures & Algorithms",
        "code": "CSE2001",
        "venue": "AB-1 305",
        "faculty": "Dr. Sneha Kulkarni"
      },
      {
        "id": 1558,
        "day": "",
        "slot": "B1+TB1",
        "time": "",
        "course": "Foundations of Artificial Intelligence",
        "code": "AIM1001",
        "venue": "AB-1 405",
        "faculty": "Dr. Rajesh Verma"
      },
      {
        "id": 1559,
        "day": "",
        "slot": "C1+TC1",
        "time": "",
        "course": "Linear Algebra & Probability",
        "code": "MAT2002",
        "venue": "AB-1 210",
        "faculty": "Dr. Priya Sundaram"
      },
      {
        "id": 1560,
        "day": "",
        "slot": "D1+TD1",
        "time": "",
        "course": "Database Management Systems",
        "code": "CSE2003",
        "venue": "AB-2 301",
        "faculty": "Dr. Abhishek Kumar Shukla"
      }
    ]
  },
  {
    "id": "25MIM10003",
    "reg_no": "25MIM10003",
    "name": "Rehman Saini",
    "program": "Integrated M.Tech Artificial Intelligence",
    "semester": 2,
    "cgpa": 8.59,
    "is_nine_pointer": false,
    "proctor": "Dr. Prakash N B",
    "proctor_cabin": "AB02 S-214",
    "hostel_block": "Block-3 (Boys Hostel)",
    "room_no": "314-B",
    "courses": [
      {
        "id": 393,
        "code": "CSA2001",
        "title": "Fundamentals in AI and ML",
        "slot": "A21+A22+A23",
        "venue": "AB02-224",
        "faculty": "Atul Onkarrao Thakare - SCAI",
        "attended": 25,
        "total": 26,
        "cat1_marks": 13.5,
        "cat2_marks": 14.0,
        "da_marks": 28.5,
        "credits": 4
      },
      {
        "id": 394,
        "code": "CSE2002",
        "title": "Data Structures and Algorithms",
        "slot": "A14+D11+D12",
        "venue": "AB02-414",
        "faculty": "Raghavendra Mishra - SCAI",
        "attended": 24,
        "total": 24,
        "cat1_marks": 14.0,
        "cat2_marks": 14.5,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 395,
        "code": "ECE2002",
        "title": "Digital Logic Design",
        "slot": "A11+A12+A13",
        "venue": "AB-313",
        "faculty": "Rupesh Kumari - SEEE",
        "attended": 25,
        "total": 26,
        "cat1_marks": 13.0,
        "cat2_marks": 13.5,
        "da_marks": 28.0,
        "credits": 4
      },
      {
        "id": 396,
        "code": "HUM0003",
        "title": "Indian Constitution",
        "slot": "E11",
        "venue": "CR-001",
        "faculty": "Ashok Kumar Baral - SASL",
        "attended": 7,
        "total": 7,
        "cat1_marks": 14.0,
        "cat2_marks": 14.0,
        "da_marks": 29.5,
        "credits": 2
      },
      {
        "id": 397,
        "code": "HUM1012",
        "title": "Logic And Language Structure",
        "slot": "B21+E14",
        "venue": "AB02-301",
        "faculty": "Velmani R - SCAI",
        "attended": 16,
        "total": 16,
        "cat1_marks": 13.5,
        "cat2_marks": 14.0,
        "da_marks": 28.0,
        "credits": 3
      },
      {
        "id": 398,
        "code": "MAT2002",
        "title": "Discrete Mathematics and Graph Theory",
        "slot": "B14+B23+D21",
        "venue": "AB-307",
        "faculty": "Palas Mandal - SASL",
        "attended": 24,
        "total": 24,
        "cat1_marks": 14.5,
        "cat2_marks": 14.0,
        "da_marks": 29.0,
        "credits": 4
      },
      {
        "id": 399,
        "code": "SST1003",
        "title": "Professional Communication Skills for Engineers",
        "slot": "F12",
        "venue": "AB-101",
        "faculty": "Vinod Bhatt - SASL",
        "attended": 7,
        "total": 8,
        "cat1_marks": 13.0,
        "cat2_marks": 13.5,
        "da_marks": 28.5,
        "credits": 2
      }
    ],
    "timetables": [
      {
        "id": 1561,
        "day": "",
        "slot": "A11",
        "time": "",
        "course": "Digital Logic Design",
        "code": "ECE2002",
        "venue": "AB-313",
        "faculty": "Rupesh Kumari"
      },
      {
        "id": 1562,
        "day": "",
        "slot": "A14",
        "time": "",
        "course": "Data Structures and Algorithms",
        "code": "CSE2002",
        "venue": "AB02-414",
        "faculty": "Raghavendra Mishra"
      },
      {
        "id": 1563,
        "day": "",
        "slot": "B14",
        "time": "",
        "course": "Discrete Mathematics & Graph Theory",
        "code": "MAT2002",
        "venue": "AB-307",
        "faculty": "Palas Mandal"
      },
      {
        "id": 1564,
        "day": "",
        "slot": "A21+A22",
        "time": "",
        "course": "Fundamentals in AI and ML (Lab)",
        "code": "CSA2001",
        "venue": "AB02-224",
        "faculty": "Atul Onkarrao Thakare"
      },
      {
        "id": 1565,
        "day": "",
        "slot": "A23",
        "time": "",
        "course": "Fundamentals in AI and ML",
        "code": "CSA2001",
        "venue": "AB02-224",
        "faculty": "Atul Onkarrao Thakare"
      },
      {
        "id": 1566,
        "day": "",
        "slot": "B21",
        "time": "",
        "course": "Logic And Language Structure",
        "code": "HUM1012",
        "venue": "AB02-301",
        "faculty": "Velmani R"
      },
      {
        "id": 1567,
        "day": "",
        "slot": "A12",
        "time": "",
        "course": "Digital Logic Design",
        "code": "ECE2002",
        "venue": "AB-313",
        "faculty": "Rupesh Kumari"
      },
      {
        "id": 1568,
        "day": "",
        "slot": "B23",
        "time": "",
        "course": "Discrete Math Tutorial",
        "code": "MAT2002",
        "venue": "AB-307",
        "faculty": "Palas Mandal"
      },
      {
        "id": 1569,
        "day": "",
        "slot": "D11",
        "time": "",
        "course": "Data Structures and Algorithms",
        "code": "CSE2002",
        "venue": "AB02-414",
        "faculty": "Raghavendra Mishra"
      },
      {
        "id": 1570,
        "day": "",
        "slot": "A13",
        "time": "",
        "course": "Digital Logic Design",
        "code": "ECE2002",
        "venue": "AB-313",
        "faculty": "Rupesh Kumari"
      },
      {
        "id": 1571,
        "day": "",
        "slot": "E11",
        "time": "",
        "course": "Indian Constitution",
        "code": "HUM0003",
        "venue": "CR-001",
        "faculty": "Ashok Kumar Baral"
      },
      {
        "id": 1572,
        "day": "",
        "slot": "F12",
        "time": "",
        "course": "Professional Communication Skills",
        "code": "SST1003",
        "venue": "AB-101",
        "faculty": "Vinod Bhatt"
      },
      {
        "id": 1573,
        "day": "",
        "slot": "D12",
        "time": "",
        "course": "Data Structures and Algorithms",
        "code": "CSE2002",
        "venue": "AB02-414",
        "faculty": "Raghavendra Mishra"
      },
      {
        "id": 1574,
        "day": "",
        "slot": "D21",
        "time": "",
        "course": "Discrete Mathematics",
        "code": "MAT2002",
        "venue": "AB-307",
        "faculty": "Palas Mandal"
      },
      {
        "id": 1575,
        "day": "",
        "slot": "E14",
        "time": "",
        "course": "Logic And Language Structure",
        "code": "HUM1012",
        "venue": "AB02-301",
        "faculty": "Velmani R"
      },
      {
        "id": 1576,
        "day": "",
        "slot": "A21",
        "time": "",
        "course": "Fundamentals in AI and ML",
        "code": "CSA2001",
        "venue": "AB02-224",
        "faculty": "Atul Onkarrao Thakare"
      },
      {
        "id": 1577,
        "day": "",
        "slot": "A11",
        "time": "",
        "course": "Digital Logic Design",
        "code": "ECE2002",
        "venue": "AB-313",
        "faculty": "Rupesh Kumari"
      },
      {
        "id": 1578,
        "day": "",
        "slot": "L11+L12",
        "time": "",
        "course": "DSA Programming Lab",
        "code": "CSE2002",
        "venue": "AB02-414",
        "faculty": "Raghavendra Mishra"
      }
    ]
  }
];

export const FACULTIES: FacultyMember[] = [
  {
  "id": 9991,
  "name": "Dr. S. POORNIMA",
  "designation": "ASSOCIATE PROFESSOR GRADE 2",
  "school": "School of Computer Science and Engineering",
  "cabin": "AB-308A, Ramanujan Block",
  "email": "poornima.s@vitbhopal.ac.in",
  "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
  "courses": [
    "Computational Intelligence",
    "Computer Science Core"
  ]
},
  {
  "id": 9992,
  "name": "Dr. RUDRA KALYAN NAYAK",
  "designation": "Associate Professor",
  "school": "School of Computing Science Engineering and Artificial Intelligence (SCAI)",
  "cabin": "AB02-218",
  "email": "rudrakalyan.nayak@vitbhopal.ac.in",
  "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
  "courses": [
    "Fundamentals in AI and ML"
  ]
},
  {
    "id": 7,
    "name": "Abhinav & Muthu Singh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-518",
    "email": "abhinav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893526322, Courses: Core"
    ]
  },
  {
    "id": 8,
    "name": "Abhishek Raj",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-514",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8179700264, Courses: Core"
    ]
  },
  {
    "id": 9,
    "name": "Abhishek Shrivastava",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-229",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8887820195, Courses: Core"
    ]
  },
  {
    "id": 10,
    "name": "Ajay Kumar Bhurjee",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-301",
    "email": "ajay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9178913172, Courses: Core"
    ]
  },
  {
    "id": 11,
    "name": "Akshara Makrariya",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-302",
    "email": "akshara.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7748836973, Courses: Core"
    ]
  },
  {
    "id": 12,
    "name": "Amit Kumar Singh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-502",
    "email": "amit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8840574075, Courses: Core"
    ]
  },
  {
    "id": 13,
    "name": "Anil Kumar",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-237",
    "email": "anil.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9918094075, Courses: Core"
    ]
  },
  {
    "id": 14,
    "name": "Anita Yadav",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-315",
    "email": "anita.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9977588551, Courses: Core"
    ]
  },
  {
    "id": 15,
    "name": "Ankit Pal",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-502",
    "email": "ankit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8586875502, Courses: Core"
    ]
  },
  {
    "id": 16,
    "name": "Ashok Kumar Baral",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-531",
    "email": "ashok.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9861999643, Courses: Core"
    ]
  },
  {
    "id": 17,
    "name": "Atul & Vaisali Vike",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-511",
    "email": "atul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8269576451, Courses: Core"
    ]
  },
  {
    "id": 18,
    "name": "Avirup Das",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-313",
    "email": "avirup.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9674927124, Courses: Core"
    ]
  },
  {
    "id": 19,
    "name": "Badla Pawan Babu",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-410",
    "email": "badla.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9030539752, Courses: Core"
    ]
  },
  {
    "id": 20,
    "name": "Balaguru S",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-210",
    "email": "balaguru.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9444465649, Courses: Core"
    ]
  },
  {
    "id": 21,
    "name": "Chandrama Swain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-310",
    "email": "chandrama.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8460934933, Courses: Core"
    ]
  },
  {
    "id": 22,
    "name": "Chour Singh Rajput",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-503",
    "email": "chour.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9587505462, Courses: Core"
    ]
  },
  {
    "id": 23,
    "name": "Deep Chandra Upadhyay",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-524",
    "email": "deep.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9119935285, Courses: Core"
    ]
  },
  {
    "id": 24,
    "name": "Devendra Kumar & Ashutosh Singh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-539",
    "email": "devendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8989806880, Courses: Core"
    ]
  },
  {
    "id": 25,
    "name": "Dipankar Sutradhar",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-507",
    "email": "dipankar.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7308126760, Courses: Core"
    ]
  },
  {
    "id": 26,
    "name": "Dipti Bhojwari & Vikas",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-507",
    "email": "dipti.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9748581767, Courses: Core"
    ]
  },
  {
    "id": 27,
    "name": "Dr. A Balaji",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-241",
    "email": "a.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9444433518, Courses: Core"
    ]
  },
  {
    "id": 28,
    "name": "Dr. A V R Mayuri",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-209",
    "email": "a.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9441438843, Courses: Core"
    ]
  },
  {
    "id": 29,
    "name": "Dr. A. Baseera",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC306",
    "email": "a..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 30,
    "name": "Dr. Aanjan Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC322",
    "email": "aanjan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 31,
    "name": "Dr. Abdul Rahman",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-113",
    "email": "abdul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 32,
    "name": "Dr. Abdul Rashid",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-406",
    "email": "abdul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8109171886, Courses: Core"
    ]
  },
  {
    "id": 33,
    "name": "Dr. Abha Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-17",
    "email": "abha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 34,
    "name": "Dr. Abha Trivedi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-205",
    "email": "abha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 35,
    "name": "Dr. Abhay Vidyarthi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-27 (AB015-005)",
    "email": "abhay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8878844486, Courses: Core"
    ]
  },
  {
    "id": 36,
    "name": "Dr. Abhinav",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-404",
    "email": "abhinav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9475451245, Courses: Core"
    ]
  },
  {
    "id": 37,
    "name": "Dr. Abhinav Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-408",
    "email": "abhinav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 38,
    "name": "Dr. Abhishek",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-405",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7415259169, Courses: Core"
    ]
  },
  {
    "id": 39,
    "name": "Dr. Abhishek Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-11",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 40,
    "name": "Dr. Abhishek Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-121",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9203837010, Courses: Core"
    ]
  },
  {
    "id": 41,
    "name": "Dr. Abhishek Kumar Shukla",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-116",
    "email": "abhishek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8754089331, Courses: Core"
    ]
  },
  {
    "id": 42,
    "name": "Dr. Adarsh Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-121",
    "email": "adarsh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 43,
    "name": "Dr. Adnan Abbasi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-107",
    "email": "adnan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 44,
    "name": "Dr. Ajay Kumar Phulre",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-211",
    "email": "ajay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 45,
    "name": "Dr. Ajay Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-120",
    "email": "ajay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8804552592, Courses: Core"
    ]
  },
  {
    "id": 46,
    "name": "Dr. Ajay Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC413",
    "email": "ajay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 47,
    "name": "Dr. Ajeet Singh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-315",
    "email": "ajeet.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9805075085, Courses: Core"
    ]
  },
  {
    "id": 48,
    "name": "Dr. Ajeet Singh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC404",
    "email": "ajeet.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 49,
    "name": "Dr. Ambey Verma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-410",
    "email": "ambey.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8770450967 / 9009218023, Courses: Core"
    ]
  },
  {
    "id": 50,
    "name": "Dr. Amit Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-526",
    "email": "amit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 51,
    "name": "Dr. Amrita Parashar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-110",
    "email": "amrita.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 52,
    "name": "Dr. Anand Motwani",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-407",
    "email": "anand.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8818965776, Courses: Core"
    ]
  },
  {
    "id": 53,
    "name": "Dr. Anantha Kumaran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-07",
    "email": "anantha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 54,
    "name": "Dr. Anil Kumar Yadav",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-120",
    "email": "anil.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 55,
    "name": "Dr. Anirban Bhowmick",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "anirban.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9547155428, Courses: Core"
    ]
  },
  {
    "id": 56,
    "name": "Dr. Anjali Mathur",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-319",
    "email": "anjali.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9928986023, Courses: Core"
    ]
  },
  {
    "id": 57,
    "name": "Dr. Anjali Mathur",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC424",
    "email": "anjali.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 58,
    "name": "Dr. Anju",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-02",
    "email": "anju.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 59,
    "name": "Dr. Ankur Beohar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-244",
    "email": "ankur.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893383443, 9425704533, Courses: Core"
    ]
  },
  {
    "id": 60,
    "name": "Dr. Ankur Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-219",
    "email": "ankur.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 61,
    "name": "Dr. Ankush Tharkar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-411",
    "email": "ankush.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8087181373, Courses: Core"
    ]
  },
  {
    "id": 62,
    "name": "Dr. Antima Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-225",
    "email": "antima.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 63,
    "name": "Dr. Antima Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC324",
    "email": "antima.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 64,
    "name": "Dr. Anupam Sen",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-522",
    "email": "anupam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9599492589, Courses: Core"
    ]
  },
  {
    "id": 65,
    "name": "Dr. Anvesh Nella",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-322",
    "email": "anvesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9503132874, Courses: Core"
    ]
  },
  {
    "id": 66,
    "name": "Dr. Arindam Dutta",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-509",
    "email": "arindam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7387114521, Courses: Core"
    ]
  },
  {
    "id": 67,
    "name": "Dr. Arindam Ghosh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-506",
    "email": "arindam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8328808499, Courses: Core"
    ]
  },
  {
    "id": 68,
    "name": "Dr. Arindam Sadhukhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-119",
    "email": "arindam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7415659511, Courses: Core"
    ]
  },
  {
    "id": 69,
    "name": "Dr. Arun Kumar K.",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-108",
    "email": "arun.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 70,
    "name": "Dr. Arup Torai",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-414",
    "email": "arup.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9514264651 / 8103981414, Courses: Core"
    ]
  },
  {
    "id": 71,
    "name": "Dr. Ashfaq Ahmad Najar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC305",
    "email": "ashfaq.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 72,
    "name": "Dr. Ashish Kumar Kesarwany",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-314",
    "email": "ashish.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9043787298, Courses: Core"
    ]
  },
  {
    "id": 73,
    "name": "Dr. Ashok Kumar Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-03",
    "email": "ashok.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9360654171, Courses: Core"
    ]
  },
  {
    "id": 74,
    "name": "Dr. Ava Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-21",
    "email": "ava.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893948272, Courses: Core"
    ]
  },
  {
    "id": 75,
    "name": "Dr. Bandla Pavan Babu",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC314",
    "email": "bandla.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 76,
    "name": "Dr. BASEERA A",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-103",
    "email": "baseera.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9698960667, Courses: Core"
    ]
  },
  {
    "id": 77,
    "name": "Dr. Benevatho Jaison A",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-401",
    "email": "benevatho.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9994066779, Courses: Core"
    ]
  },
  {
    "id": 78,
    "name": "Dr. Bhakti Parashar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-304",
    "email": "bhakti.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9826722177, Courses: Core"
    ]
  },
  {
    "id": 79,
    "name": "Dr. Bhumika Choksi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-318",
    "email": "bhumika.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7016527953, Courses: Core"
    ]
  },
  {
    "id": 80,
    "name": "Dr. Bhupendra Panchal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC415",
    "email": "bhupendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 81,
    "name": "Dr. Bhuvenshwari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-18",
    "email": "bhuvenshwari.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8838270601, Courses: Core"
    ]
  },
  {
    "id": 82,
    "name": "Dr. C. P. Koushik",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-08",
    "email": "c..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 83,
    "name": "Dr. Chandan Behera",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-314",
    "email": "chandan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9039490306, Courses: Core"
    ]
  },
  {
    "id": 84,
    "name": "Dr. Chandan Kumar Behera",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-215",
    "email": "chandan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 85,
    "name": "Dr. Chour Singh Rajpoot",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC402",
    "email": "chour.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 86,
    "name": "Dr. D. Saravanan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-112",
    "email": "d..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 87,
    "name": "Dr. Daood Saleem",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-513",
    "email": "daood.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7832065425, Courses: Core"
    ]
  },
  {
    "id": 88,
    "name": "Dr. Daood Saleem",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC307",
    "email": "daood.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 89,
    "name": "Dr. Debashis Adhikari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 019",
    "email": "debashis.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9822347215, Courses: Core"
    ]
  },
  {
    "id": 90,
    "name": "Dr. Dev brat Gupta",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-10",
    "email": "dev.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9079344563, Courses: Core"
    ]
  },
  {
    "id": 91,
    "name": "Dr. Devraj Vishnu",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-108",
    "email": "devraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 92,
    "name": "Dr. Dheeresh Soni",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-217",
    "email": "dheeresh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8878743351, Courses: Core"
    ]
  },
  {
    "id": 93,
    "name": "Dr. Dheresh Soni",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC418",
    "email": "dheresh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 94,
    "name": "Dr. Dilip Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-20",
    "email": "dilip.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 95,
    "name": "Dr. Dip Mukherjee",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-211",
    "email": "dip.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9758648636, Courses: Core"
    ]
  },
  {
    "id": 96,
    "name": "Dr. Dipanjana Hazra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-524",
    "email": "dipanjana.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9340355344, Courses: Core"
    ]
  },
  {
    "id": 97,
    "name": "Dr. E. Nirmala",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-104",
    "email": "e..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 98,
    "name": "Dr. Enagandula Prasad",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-416",
    "email": "enagandula.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9908150216, Courses: Core"
    ]
  },
  {
    "id": 99,
    "name": "Dr. Feroz Babu",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-505",
    "email": "feroz.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 100,
    "name": "Dr. G. R. Hemalakshmi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-221",
    "email": "g..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 101,
    "name": "Dr. G.R. Hemalakshmi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-14",
    "email": "g.r..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9500396629, Courses: Core"
    ]
  },
  {
    "id": 102,
    "name": "Dr. Ganeshan G.",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-415",
    "email": "ganeshan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 103,
    "name": "Dr. Gaurav Soni",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-404",
    "email": "gaurav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9826018671, Courses: Core"
    ]
  },
  {
    "id": 104,
    "name": "Dr. Gaurav Soni",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC301",
    "email": "gaurav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 105,
    "name": "Dr. Geetanjali Giri",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-309",
    "email": "geetanjali.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9840403316, Courses: Core"
    ]
  },
  {
    "id": 106,
    "name": "Dr. GK",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-250",
    "email": "gk.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9910010941, Courses: Core"
    ]
  },
  {
    "id": 107,
    "name": "Dr. Gobinda Ghosh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-421",
    "email": "gobinda.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9131128386, Courses: Core"
    ]
  },
  {
    "id": 108,
    "name": "Dr. Gopal S Tandel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-218",
    "email": "gopal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893773358, Courses: Core"
    ]
  },
  {
    "id": 109,
    "name": "Dr. Gunjan Ansari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC417",
    "email": "gunjan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 110,
    "name": "Dr. Gunjan Ansari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 2nd Floor Ext. Cabin",
    "email": "gunjan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9910010941, Courses: Core"
    ]
  },
  {
    "id": 111,
    "name": "Dr. Hariharan R",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-207",
    "email": "hariharan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 112,
    "name": "Dr. Hariharasitaraman. S",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "hariharasitaraman..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9940295262, Courses: Core"
    ]
  },
  {
    "id": 113,
    "name": "Dr. Harish Babu",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-22",
    "email": "harish.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9885168010, Courses: Core"
    ]
  },
  {
    "id": 114,
    "name": "Dr. Harshlata Vishwakarma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-105",
    "email": "harshlata.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 115,
    "name": "Dr. Hemant Kumar Nashine",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-109",
    "email": "hemant.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8770771319, Courses: Core"
    ]
  },
  {
    "id": 116,
    "name": "Dr. Hemraj S.L.",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-107",
    "email": "hemraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 117,
    "name": "Dr. Humaira Fatima",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-509",
    "email": "humaira.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7455838246 / 8307962979, Courses: Core"
    ]
  },
  {
    "id": 118,
    "name": "Dr. Indhumathi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-311",
    "email": "indhumathi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9748005527, Courses: Core"
    ]
  },
  {
    "id": 119,
    "name": "Dr. Irfan Alam",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-202",
    "email": "irfan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 120,
    "name": "Dr. J MANIKANDAN",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "j.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7871114176 / 9842221962 / 9962029293, Courses: Core"
    ]
  },
  {
    "id": 121,
    "name": "Dr. J.P. Shritharanyaa",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-17",
    "email": "j.p..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8098999684, Courses: Core"
    ]
  },
  {
    "id": 122,
    "name": "Dr. Jagriti Gupta",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-409",
    "email": "jagriti.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8655564262, Courses: Core"
    ]
  },
  {
    "id": 123,
    "name": "Dr. Jalaluddin Khan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-218",
    "email": "jalaluddin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 124,
    "name": "Dr. Jasmine Selvakumari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-05",
    "email": "jasmine.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9003397713, Courses: Core"
    ]
  },
  {
    "id": 125,
    "name": "Dr. Jastin Samual",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-205",
    "email": "jastin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9445842201, Courses: Core"
    ]
  },
  {
    "id": 126,
    "name": "Dr. Jitendra Pratap Singh Mathur",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC311",
    "email": "jitendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 127,
    "name": "Dr. Juhi Yasmeen",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-238",
    "email": "juhi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8273788594, Courses: Core"
    ]
  },
  {
    "id": 128,
    "name": "Dr. Jyothi Chouhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-14",
    "email": "jyothi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 129,
    "name": "Dr. K. Murugeswari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-403",
    "email": "k..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9994276824, Courses: Core"
    ]
  },
  {
    "id": 130,
    "name": "Dr. K. Murugeswari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC408",
    "email": "k..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 131,
    "name": "Dr. Kamlesh Chandravanshi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC403",
    "email": "kamlesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 132,
    "name": "Dr. Kamlesh Chandravanshi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-410",
    "email": "kamlesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9009217763, Courses: Core"
    ]
  },
  {
    "id": 133,
    "name": "Dr. Kannaiya Raja N",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-240",
    "email": "kannaiya.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9179948303, Courses: Core"
    ]
  },
  {
    "id": 134,
    "name": "Dr. Komarasamy G",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-03",
    "email": "komarasamy.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 135,
    "name": "Dr. KR. SIVABALAN",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-532",
    "email": "kr..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9698766754, Courses: Core"
    ]
  },
  {
    "id": 136,
    "name": "Dr. Krishna Chouhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-31 (AB015-009)",
    "email": "krishna.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 137,
    "name": "Dr. Kumkum Dubey",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-501",
    "email": "kumkum.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9944059288, Courses: Core"
    ]
  },
  {
    "id": 138,
    "name": "Dr. Lakshmi D.",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-122",
    "email": "lakshmi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9945379089, Courses: Core"
    ]
  },
  {
    "id": 139,
    "name": "Dr. Lokesh Malviya",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC313",
    "email": "lokesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7394999590, Courses: Core"
    ]
  },
  {
    "id": 140,
    "name": "Dr. M K Jayanthi Kannan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-115",
    "email": "m.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 141,
    "name": "Dr. M Manimaran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-09",
    "email": "m.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 142,
    "name": "Dr. M Suresh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-28 (AB015-006)",
    "email": "m.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9437217290, Courses: Core"
    ]
  },
  {
    "id": 143,
    "name": "Dr. M. Maragatharajan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-212",
    "email": "m..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9003613484, Courses: Core"
    ]
  },
  {
    "id": 144,
    "name": "Dr. M. Maragatharajan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC303",
    "email": "m..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 145,
    "name": "Dr. Mahendran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-210",
    "email": "mahendran.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 146,
    "name": "Dr. Mamta Agarwal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-201",
    "email": "mamta.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9425027637, Courses: Core"
    ]
  },
  {
    "id": 147,
    "name": "Dr. Manisha Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-04",
    "email": "manisha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9993110355 / 9039826104, Courses: Core"
    ]
  },
  {
    "id": 148,
    "name": "Dr. Manisha Singh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-33 (AB015-011)",
    "email": "manisha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9425005177, Courses: Core"
    ]
  },
  {
    "id": 149,
    "name": "Dr. Manoj Acharya",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-204",
    "email": "manoj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7354155194 / 9826215494, Courses: Core"
    ]
  },
  {
    "id": 150,
    "name": "Dr. Manoj Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-118",
    "email": "manoj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 151,
    "name": "Dr. Manorma Chouhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-102",
    "email": "manorma.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 152,
    "name": "Dr. Mayank Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-113",
    "email": "mayank.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9755213002, Courses: Core"
    ]
  },
  {
    "id": 153,
    "name": "Dr. Md. Zeeshan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-112",
    "email": "md..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9760356167, Courses: Core"
    ]
  },
  {
    "id": 154,
    "name": "Dr. Mohammad Ishrat",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC319",
    "email": "mohammad.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 155,
    "name": "Dr. Mohammad Sultan Alam",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC321",
    "email": "mohammad.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 156,
    "name": "Dr. Mohd Rafi Lone",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-222",
    "email": "mohd.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 157,
    "name": "Dr. Monalisha",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-403",
    "email": "monalisha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9949830498, Courses: Core"
    ]
  },
  {
    "id": 158,
    "name": "Dr. Monica",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC405",
    "email": "monica.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 159,
    "name": "Dr. Mostaid Ahmed",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-504",
    "email": "mostaid.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8085102581, Courses: Core"
    ]
  },
  {
    "id": 160,
    "name": "Dr. Muneeswaran V",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-204",
    "email": "muneeswaran.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 161,
    "name": "Dr. Munsifa Firdaus Khan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-515",
    "email": "munsifa.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9630400659, Courses: Core"
    ]
  },
  {
    "id": 162,
    "name": "Dr. Munsifa Firdaus Khan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC412",
    "email": "munsifa.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 163,
    "name": "Dr. Prakash N B",
    "designation": "Associate Professor Senior Grade 1 (Faculty ID: 100693)",
    "school": "School of Computer Science and Engineering (SCOPE) - BCE Dept",
    "cabin": "AB02 S-214",
    "email": "prakash@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9443414744, Courses: Core"
    ]
  },
  {
    "id": 164,
    "name": "Dr. N. Kanniya Raja",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC423",
    "email": "n..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 165,
    "name": "Dr. Narottam Das Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-117",
    "email": "narottam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 166,
    "name": "Dr. Navneet Kumar Verma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-203",
    "email": "navneet.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9598663322, Courses: Core"
    ]
  },
  {
    "id": 167,
    "name": "Dr. Neeraj Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 1st Floor Ext. Cabin",
    "email": "neeraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9770240818, Courses: Core"
    ]
  },
  {
    "id": 168,
    "name": "Dr. Neeraj Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-122",
    "email": "neeraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9770240818, Courses: Core"
    ]
  },
  {
    "id": 169,
    "name": "Dr. Neha Choubey",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Admission office",
    "email": "neha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9713606045, Courses: Core"
    ]
  },
  {
    "id": 170,
    "name": "Dr. Nilamadhab Mishra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-119",
    "email": "nilamadhab.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 171,
    "name": "Dr. Nilesh Kunhare",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-401",
    "email": "nilesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9685251246, Courses: Core"
    ]
  },
  {
    "id": 172,
    "name": "Dr. Nilesh Kunhare",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC310",
    "email": "nilesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 173,
    "name": "Dr. Om Prakash Pahari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-316",
    "email": "om.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9583085832, Courses: Core"
    ]
  },
  {
    "id": 174,
    "name": "Dr. P. Monica",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-519",
    "email": "p..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9014462249, Courses: Core"
    ]
  },
  {
    "id": 175,
    "name": "Dr. Pallabi Sarkar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-310",
    "email": "pallabi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8249232450, Courses: Core"
    ]
  },
  {
    "id": 176,
    "name": "Dr. Pallav",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-215",
    "email": "pallav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7063696967, Courses: Core"
    ]
  },
  {
    "id": 177,
    "name": "Dr. Pankaj Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-417",
    "email": "pankaj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9508237322, Courses: Core"
    ]
  },
  {
    "id": 178,
    "name": "Dr. Paras Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-22",
    "email": "paras.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 179,
    "name": "Dr. Pavan Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-110",
    "email": "pavan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 180,
    "name": "Dr. Pavithra Rathinavel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-415",
    "email": "pavithra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9994988310, Courses: Core"
    ]
  },
  {
    "id": 181,
    "name": "Dr. Pijush Kanti Mondal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-214",
    "email": "pijush.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8670758175, Courses: Core"
    ]
  },
  {
    "id": 182,
    "name": "Dr. Pon Harshavardhanan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-12",
    "email": "pon.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 183,
    "name": "Dr. Pooja",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-312",
    "email": "pooja.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8610285129, Courses: Core"
    ]
  },
  {
    "id": 184,
    "name": "Dr. Poonkuntran S",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "poonkuntran.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9894432890, Courses: Core"
    ]
  },
  {
    "id": 185,
    "name": "Dr. Pradeep Kashyap",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-325",
    "email": "pradeep.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7465967251, Courses: Core"
    ]
  },
  {
    "id": 186,
    "name": "Dr. Pradeep Kumar Mishra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-21",
    "email": "pradeep.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 187,
    "name": "Dr. Pratosh Kumar Pal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-19",
    "email": "pratosh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 188,
    "name": "Dr. Praveen Kumar Tyagi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC414",
    "email": "praveen.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 189,
    "name": "Dr. Praveen Lalwani",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-15",
    "email": "praveen.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 190,
    "name": "Dr. Preetam Suman",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC421",
    "email": "preetam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 191,
    "name": "Dr. Preetam Suman",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-208",
    "email": "preetam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7376333523, Courses: Core"
    ]
  },
  {
    "id": 192,
    "name": "Dr. Priscilla Dinkar Morya",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-224",
    "email": "priscilla.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 193,
    "name": "Dr. Priya Mumaran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-418",
    "email": "priya.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7004465671, Courses: Core"
    ]
  },
  {
    "id": 194,
    "name": "Dr. Priyanka Ray",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-114",
    "email": "priyanka.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7006910686, Courses: Core"
    ]
  },
  {
    "id": 195,
    "name": "Dr. PUSHINDER SINGH PATHEJA",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-09",
    "email": "pushinder.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893273243, Courses: Core"
    ]
  },
  {
    "id": 196,
    "name": "Dr. Pushpinder Singh Patheja",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-101",
    "email": "pushpinder.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 197,
    "name": "Dr. R. Senthil Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-11",
    "email": "r..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7904219703, Courses: Core"
    ]
  },
  {
    "id": 198,
    "name": "Dr. R. Sukumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-210",
    "email": "r..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 199,
    "name": "Dr. Raghavendra Mishra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-06",
    "email": "raghavendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 200,
    "name": "Dr. Rahul Shrivastava",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 5th Floor Ext. Cabin",
    "email": "rahul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 201,
    "name": "Dr. Rajdeep Singh Payal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-321",
    "email": "rajdeep.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9389634514, Courses: Core"
    ]
  },
  {
    "id": 202,
    "name": "Dr. Rajeev",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-248",
    "email": "rajeev.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 203,
    "name": "Dr. Rajit Nair",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-123",
    "email": "rajit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 204,
    "name": "Dr. Rajneesh Kumar Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC407",
    "email": "rajneesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 205,
    "name": "Dr. Rakesh Shrivastava",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-213",
    "email": "rakesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 206,
    "name": "Dr. Ram Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-114",
    "email": "ram.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 207,
    "name": "Dr. Ram Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-501",
    "email": "ram.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9770045634, Courses: Core"
    ]
  },
  {
    "id": 208,
    "name": "Dr. Ramraj Dangi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-424",
    "email": "ramraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8770781163 / 9691650660, Courses: Core"
    ]
  },
  {
    "id": 209,
    "name": "Dr. Ramraj Dangi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC401",
    "email": "ramraj.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 210,
    "name": "Dr. Ramu Pashupathi Suganeshwar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-308",
    "email": "ramu.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7899036744, Courses: Core"
    ]
  },
  {
    "id": 211,
    "name": "Dr. Ranjitha Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-402",
    "email": "ranjitha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8050463898, Courses: Core"
    ]
  },
  {
    "id": 212,
    "name": "Dr. Ravi Verma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-514",
    "email": "ravi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8770995536, Courses: Core"
    ]
  },
  {
    "id": 213,
    "name": "Dr. Ravi Verma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC309",
    "email": "ravi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 214,
    "name": "Dr. Reena Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-104",
    "email": "reena.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8989982847, Courses: Core"
    ]
  },
  {
    "id": 215,
    "name": "Dr. Rizwan Ur Rahman",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-220",
    "email": "rizwan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 216,
    "name": "Dr. Rudra Kalyan Nayak",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-208",
    "email": "rudra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 217,
    "name": "Dr. Rupesh Kumari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-111",
    "email": "rupesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 218,
    "name": "Dr. S Devaraju",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-116",
    "email": "s.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 219,
    "name": "Dr. S. AANJANKUMAR",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-224",
    "email": "s..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9786501012, Courses: Core"
    ]
  },
  {
    "id": 220,
    "name": "Dr. S. K. Das",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-508",
    "email": "s..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 221,
    "name": "Dr. S. Kannan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-01",
    "email": "s..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7702672411, Courses: Core"
    ]
  },
  {
    "id": 222,
    "name": "Dr. S. Periyanayagi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-13",
    "email": "s..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 223,
    "name": "Dr. S. Poonkuntran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC312",
    "email": "s..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 224,
    "name": "Dr. Sajjad Ahmed",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-10",
    "email": "sajjad.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 225,
    "name": "Dr. Sanat Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-535",
    "email": "sanat.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9770890583, Courses: Core"
    ]
  },
  {
    "id": 226,
    "name": "Dr. Sanay Naha",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-249",
    "email": "sanay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9865483413, Courses: Core"
    ]
  },
  {
    "id": 227,
    "name": "Dr. Sandeep Monga",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-13",
    "email": "sandeep.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7999324362, Courses: Core"
    ]
  },
  {
    "id": 228,
    "name": "Dr. Sandip Mal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-207",
    "email": "sandip.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7974537024, Courses: Core"
    ]
  },
  {
    "id": 229,
    "name": "Dr. Sandip Mal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC422",
    "email": "sandip.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 230,
    "name": "Dr. Sanjib Nayak",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-517",
    "email": "sanjib.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9635474279, Courses: Core"
    ]
  },
  {
    "id": 231,
    "name": "Dr. Santhosh Kumar Sahoo",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-103",
    "email": "santhosh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 232,
    "name": "Dr. Santosh Bal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-301",
    "email": "santosh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9791322178, Courses: Core"
    ]
  },
  {
    "id": 233,
    "name": "Dr. Santosh Kumar Bhal",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-512",
    "email": "santosh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9373410389, Courses: Core"
    ]
  },
  {
    "id": 234,
    "name": "Dr. Santosh Sahu",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "4th Floor Ext. Cabin",
    "email": "santosh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 235,
    "name": "Dr. Saravanan S",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-07",
    "email": "saravanan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 236,
    "name": "Dr. Sasmita Padhy",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-206",
    "email": "sasmita.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9040946658, Courses: Core"
    ]
  },
  {
    "id": 237,
    "name": "Dr. Sasmita Padhy",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC420",
    "email": "sasmita.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 238,
    "name": "Dr. Saurabh Kumar Maurya",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-520",
    "email": "saurabh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9532437348, Courses: Core"
    ]
  },
  {
    "id": 239,
    "name": "Dr. Saurabh Mishra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-313",
    "email": "saurabh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7394999590, Courses: Core"
    ]
  },
  {
    "id": 240,
    "name": "Dr. Senthilkumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-01",
    "email": "senthilkumar.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 241,
    "name": "Dr. Shafiul Alom Ahmed",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-117 / AB01 B-513",
    "email": "shafiul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9706931206, Courses: Core"
    ]
  },
  {
    "id": 242,
    "name": "Dr. Shagun Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-216",
    "email": "shagun.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 243,
    "name": "Dr. Shahab Saquib Sohail",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-515",
    "email": "shahab.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9897771213, Courses: Core"
    ]
  },
  {
    "id": 244,
    "name": "Dr. Shahab Saquib Sohail",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC317",
    "email": "shahab.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 245,
    "name": "Dr. Shahana Gajala Qureshi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-20",
    "email": "shahana.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 246,
    "name": "Dr. Sharat Chandra Tripati",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-15",
    "email": "sharat.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8310597038, Courses: Core"
    ]
  },
  {
    "id": 247,
    "name": "Dr. Sharmila",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-402",
    "email": "sharmila.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9715614081, Courses: Core"
    ]
  },
  {
    "id": 248,
    "name": "Dr. Sharmila Joseph",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC416",
    "email": "sharmila.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 249,
    "name": "Dr. Sheetal Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-102",
    "email": "sheetal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8103553591, Courses: Core"
    ]
  },
  {
    "id": 250,
    "name": "Dr. Shiv Shankar Prasad",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-217",
    "email": "shiv.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 251,
    "name": "Dr. Shriram R",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "shriram.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7358194673, Courses: Core"
    ]
  },
  {
    "id": 252,
    "name": "Dr. Shweta Saxena",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-206",
    "email": "shweta.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 253,
    "name": "Dr. Shweta Singh",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-518",
    "email": "shweta.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7237065141, Courses: Core"
    ]
  },
  {
    "id": 254,
    "name": "Dr. Shwetha Mukarjee",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "shwetha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7697867027, Courses: Core"
    ]
  },
  {
    "id": 255,
    "name": "Dr. Sibananda Mohanty",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-507",
    "email": "sibananda.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7680854848, Courses: Core"
    ]
  },
  {
    "id": 256,
    "name": "Dr. Siddartha Maiti",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-245",
    "email": "siddartha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 257,
    "name": "Dr. Siddharth Singh Chouhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC316",
    "email": "siddharth.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 258,
    "name": "Dr. Sidharth Singh Chauhan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-242",
    "email": "sidharth.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 259,
    "name": "Dr. Siradujun",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-30 (AB015-008)",
    "email": "siradujun.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9043787298, Courses: Core"
    ]
  },
  {
    "id": 260,
    "name": "Dr. Sivabalan KR",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC320",
    "email": "sivabalan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 261,
    "name": "Dr. Sivasankaran",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-243",
    "email": "sivasankaran.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9843856991, Courses: Core"
    ]
  },
  {
    "id": 262,
    "name": "Dr. Soma Saha",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-406",
    "email": "soma.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8269896171, Courses: Core"
    ]
  },
  {
    "id": 263,
    "name": "Dr. Sonjoy Pan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-305",
    "email": "sonjoy.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 264,
    "name": "Dr. Soumitra Keshari Nayak",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-246",
    "email": "soumitra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9321923010, Courses: Core"
    ]
  },
  {
    "id": 265,
    "name": "Dr. Sripriyan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-115",
    "email": "sripriyan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7006483148, Courses: Core"
    ]
  },
  {
    "id": 266,
    "name": "Dr. Subash Chandra Bose",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-04",
    "email": "subash.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 267,
    "name": "Dr. Subash Chandra Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-16",
    "email": "subash.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 268,
    "name": "Dr. Subhash Chandra Patel",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-404",
    "email": "subhash.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7905407837, Courses: Core"
    ]
  },
  {
    "id": 269,
    "name": "Dr. Subrata Nath",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-508",
    "email": "subrata.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 270,
    "name": "Dr. Sultan Alam",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-504",
    "email": "sultan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 271,
    "name": "Dr. Sumit Som",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-426",
    "email": "sumit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8697506423, Courses: Core"
    ]
  },
  {
    "id": 272,
    "name": "Dr. Sumit Som",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 4th Floor Ext. Cabin",
    "email": "sumit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 273,
    "name": "Dr. Suneet Joshi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-512",
    "email": "suneet.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7748946630, Courses: Core"
    ]
  },
  {
    "id": 274,
    "name": "Dr. Suneet Joshi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC308",
    "email": "suneet.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 275,
    "name": "Dr. Tanya Nishad, Disha Kumari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-513",
    "email": "tanya.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8257041061 / 9007847469, Courses: Core"
    ]
  },
  {
    "id": 276,
    "name": "Dr. Thamim",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-408",
    "email": "thamim.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8667230036, Courses: Core"
    ]
  },
  {
    "id": 277,
    "name": "Dr. Trapti Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-124",
    "email": "trapti.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 278,
    "name": "Dr. Velmurugan L",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-111",
    "email": "velmurugan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 279,
    "name": "Dr. Velmurugan L",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-24 (AB015-002)",
    "email": "velmurugan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9698227440, Courses: Core"
    ]
  },
  {
    "id": 280,
    "name": "Dr. Venkat Prasad Padhy",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-24",
    "email": "venkat.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 281,
    "name": "Dr. Venkateswara Rao",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC302",
    "email": "venkateswara.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 282,
    "name": "Dr. Vijay Birchha",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-203",
    "email": "vijay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 283,
    "name": "Dr. Vijay Kumar Patidar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-226",
    "email": "vijay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 284,
    "name": "Dr. Vijay Kumar Trivedi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC409",
    "email": "vijay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9455222528, Courses: Core"
    ]
  },
  {
    "id": 285,
    "name": "Dr. Vijendra Singh Bramhe",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC410",
    "email": "vijendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 286,
    "name": "Dr. Vikas Panthi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC419",
    "email": "vikas.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 287,
    "name": "Dr. Vikas Panthi",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-324",
    "email": "vikas.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9778460751, Courses: Core"
    ]
  },
  {
    "id": 288,
    "name": "Dr. Vinesh Kumar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-05",
    "email": "vinesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 289,
    "name": "Dr. Vinod Bhatt",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-02",
    "email": "vinod.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9826143220, Courses: Core"
    ]
  },
  {
    "id": 290,
    "name": "Dr. Vinod Kumar Jata",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-510",
    "email": "vinod.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8239074693, Courses: Core"
    ]
  },
  {
    "id": 291,
    "name": "Dr. Vipin Jain",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC318",
    "email": "vipin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 292,
    "name": "Dr. Vipin Mishra",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-409",
    "email": "vipin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8349390186, Courses: Core"
    ]
  },
  {
    "id": 293,
    "name": "Dr. Virenar Kushwaha",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-309",
    "email": "virenar.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7415869616, Courses: Core"
    ]
  },
  {
    "id": 294,
    "name": "Dr. Virendra Singh Kushwah",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-212",
    "email": "virendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 295,
    "name": "Dr. Vivek Parashar",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-239",
    "email": "vivek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 296,
    "name": "Dr. Vivek Sharma",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-219",
    "email": "vivek.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 297,
    "name": "Dr. Xavier",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-312",
    "email": "xavier.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9486915394, Courses: Core"
    ]
  },
  {
    "id": 298,
    "name": "Dr. Yogesh Shukla",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "Admission office",
    "email": "yogesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9479877102, Courses: Core"
    ]
  },
  {
    "id": 299,
    "name": "Dr. Zaheer Kareem Ansari",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-12",
    "email": "zaheer.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 300,
    "name": "Dr. Zavad Khan",
    "designation": "Faculty Member / Professor",
    "school": "VIT Bhopal University",
    "cabin": "AB01 G-16",
    "email": "zavad.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 301,
    "name": "E. NIRMALA",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-412",
    "email": "e..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8778539987, Courses: Core"
    ]
  },
  {
    "id": 302,
    "name": "Evangeline Christina",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-227",
    "email": "evangeline.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7708667691, Courses: Core"
    ]
  },
  {
    "id": 303,
    "name": "Harish Chandra",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-216",
    "email": "harish.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7248659909, Courses: Core"
    ]
  },
  {
    "id": 304,
    "name": "Hemanta Kalita",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-522",
    "email": "hemanta.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8811039996, Courses: Core"
    ]
  },
  {
    "id": 305,
    "name": "Imroz Khan & Azimal Husan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-520",
    "email": "imroz.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9508237322, Courses: Core"
    ]
  },
  {
    "id": 306,
    "name": "IPR & WEC",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-306",
    "email": "ipr.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 307,
    "name": "Jay Prakash Maurya",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC304",
    "email": "jay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 308,
    "name": "Jitendra Pratap Singh Mathur",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-413",
    "email": "jitendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893536675, Courses: Core"
    ]
  },
  {
    "id": 309,
    "name": "Jyoti Badge",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-504",
    "email": "jyoti.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9993945259, Courses: Core"
    ]
  },
  {
    "id": 310,
    "name": "Kajal Agarwal & Tanya Srivastava",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-511",
    "email": "kajal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893954987, Courses: Core"
    ]
  },
  {
    "id": 311,
    "name": "Kiran Kumar Behera",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-523",
    "email": "kiran.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8267808230, Courses: Core"
    ]
  },
  {
    "id": 312,
    "name": "Kumar Pandey",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-303",
    "email": "kumar.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8178376418, Courses: Core"
    ]
  },
  {
    "id": 313,
    "name": "M.R. Thiyagu Priyadharsan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-510",
    "email": "m.r..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9994115629, Courses: Core"
    ]
  },
  {
    "id": 314,
    "name": "Mayank Gupta",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "Admission Office",
    "email": "mayank.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7722993939, Courses: Core"
    ]
  },
  {
    "id": 315,
    "name": "Md. Tauseef Qamar",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-413",
    "email": "md..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7217353750, Courses: Core"
    ]
  },
  {
    "id": 316,
    "name": "Mohd Tangeel & Chaitanya",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-512",
    "email": "mohd.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8984235974, Courses: Core"
    ]
  },
  {
    "id": 317,
    "name": "Mr. Abdur Raoof Khan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-223",
    "email": "abdur.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 318,
    "name": "Mr. ANIL MEWADA (Secy. of Registrar)",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "anil.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9131094751, Courses: Core"
    ]
  },
  {
    "id": 319,
    "name": "Mr. Ashfaq Ahmed",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-406",
    "email": "ashfaq.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 320,
    "name": "Mr. Deepak Kimar",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-419",
    "email": "deepak.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9826081038, Courses: Core"
    ]
  },
  {
    "id": 321,
    "name": "Mr. G. Ganesan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC406",
    "email": "g..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 322,
    "name": "Mr. Imroz Khan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-18",
    "email": "imroz.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 323,
    "name": "Mr. Javed Khan Sheikh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC315",
    "email": "javed.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 324,
    "name": "MR. JAY PRAKASH MAURYA",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-221",
    "email": "mr..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7354549227, Courses: Core"
    ]
  },
  {
    "id": 325,
    "name": "Mr. K.K. Nair",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-B019",
    "email": "k.k..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9822347215, Courses: Core"
    ]
  },
  {
    "id": 326,
    "name": "Mr. M. Suresh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-201",
    "email": "m..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 327,
    "name": "Mr. Manikandan S.P",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-407",
    "email": "manikandan.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9597525705, Courses: Core"
    ]
  },
  {
    "id": 328,
    "name": "Mr. Mohd Amir",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-506",
    "email": "mohd.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7906944085, Courses: Core"
    ]
  },
  {
    "id": 329,
    "name": "Mr. Praveen Kumar Tyagi",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-317",
    "email": "praveen.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9926170794, Courses: Core"
    ]
  },
  {
    "id": 330,
    "name": "Mr. RAVI KUMAR SINGH",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-310",
    "email": "ravi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 331,
    "name": "Mr. Sanat Jain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-109",
    "email": "sanat.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 332,
    "name": "Mr. Sanat Jain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-514",
    "email": "sanat.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9893979695, Courses: Core"
    ]
  },
  {
    "id": 333,
    "name": "Mr. Sathyabrata Nath",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC411",
    "email": "sathyabrata.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 334,
    "name": "Mr. Vipin Jain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-510",
    "email": "vipin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 335,
    "name": "Mr. Vishal Singh Bhati",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-528",
    "email": "vishal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 336,
    "name": "Mrs. Adeeba Bilquees",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-406",
    "email": "adeeba.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 6396089994, Courses: Core"
    ]
  },
  {
    "id": 337,
    "name": "Mrs. Garima Jain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 F-106",
    "email": "garima.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 338,
    "name": "Mrs. Kumkum Dueby",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-414",
    "email": "kumkum.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7879852589/9994613458, Courses: Core"
    ]
  },
  {
    "id": 339,
    "name": "Ms. Adyasha Sahu",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 S-223",
    "email": "adyasha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8984235974, Courses: Core"
    ]
  },
  {
    "id": 340,
    "name": "Ms. Deeksha Singh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-402",
    "email": "deeksha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 341,
    "name": "Ms. Geeta Singh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 G-23",
    "email": "geeta.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7680854848, Courses: Core"
    ]
  },
  {
    "id": 342,
    "name": "Ms. J. Jayanthi",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB02 FC323",
    "email": "j..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 343,
    "name": "Ms. Kalyani Wankehde",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-422",
    "email": "kalyani.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9970069072, Courses: Core"
    ]
  },
  {
    "id": 344,
    "name": "Ms. Komal",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-101",
    "email": "komal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9826573350, Courses: Core"
    ]
  },
  {
    "id": 345,
    "name": "Ms. ManJari Upamanyu",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-511",
    "email": "manjari.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9899774943/9674383283, Courses: Core"
    ]
  },
  {
    "id": 346,
    "name": "Ms. Manorama Chouhan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-118",
    "email": "manorama.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7006543347, Courses: Core"
    ]
  },
  {
    "id": 347,
    "name": "Ms. Rani Kumari",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-247",
    "email": "rani.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7978166023, Courses: Core"
    ]
  },
  {
    "id": 348,
    "name": "Ms. Ravina Toppo",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 3rd Floor Ext. Cabin",
    "email": "ravina.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 349,
    "name": "N. Vignesh",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-209",
    "email": "n..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 350,
    "name": "Nilam Venkatakoteswararao",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-302",
    "email": "nilam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9177477722, Courses: Core"
    ]
  },
  {
    "id": 351,
    "name": "Nitisha Pandey & Disha Kunda",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-508",
    "email": "nitisha.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7011745833, Courses: Core"
    ]
  },
  {
    "id": 352,
    "name": "P. Narendra Babu",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-410",
    "email": "p..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 6281571216, 9553773487, Courses: Core"
    ]
  },
  {
    "id": 353,
    "name": "P. Vayunandanakishore",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-526",
    "email": "p..faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9730951876, Courses: Core"
    ]
  },
  {
    "id": 354,
    "name": "Prasad Begde",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-540",
    "email": "prasad.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8225048609, Courses: Core"
    ]
  },
  {
    "id": 355,
    "name": "Pushpdant Jain",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-412",
    "email": "pushpdant.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9437786562, Courses: Core"
    ]
  },
  {
    "id": 356,
    "name": "Rahul Kumar Chaturvedi",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-234",
    "email": "rahul.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8858709096 / 8299748659, Courses: Core"
    ]
  },
  {
    "id": 357,
    "name": "Rajendra Mahanandia",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "Consult Academic Block Reception",
    "email": "rajendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9438659192, Courses: Core"
    ]
  },
  {
    "id": 358,
    "name": "Rajneesh Kumar Patel",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-306",
    "email": "rajneesh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8871235814, Courses: Core"
    ]
  },
  {
    "id": 359,
    "name": "Rohit Sharma",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-320",
    "email": "rohit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9131960256, Courses: Core"
    ]
  },
  {
    "id": 360,
    "name": "Satyam Ravi",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-536",
    "email": "satyam.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9646937054, Courses: Core"
    ]
  },
  {
    "id": 361,
    "name": "Saurabh Bhargava",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-401",
    "email": "saurabh.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8901539669, Courses: Core"
    ]
  },
  {
    "id": 362,
    "name": "Saurav Prasad",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-506",
    "email": "saurav.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9310157546, Courses: Core"
    ]
  },
  {
    "id": 363,
    "name": "SDC Team",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 AB-311",
    "email": "sdc.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 364,
    "name": "Sheerin Kayenat",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-303",
    "email": "sheerin.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7870955315, Courses: Core"
    ]
  },
  {
    "id": 365,
    "name": "Shilpa Suman",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-538",
    "email": "shilpa.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9693750319, Courses: Core"
    ]
  },
  {
    "id": 366,
    "name": "Shivmanjree Gopaliya",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-307",
    "email": "shivmanjree.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9891354291, Courses: Core"
    ]
  },
  {
    "id": 367,
    "name": "Shrrshthika Raikwal",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-405",
    "email": "shrrshthika.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 368,
    "name": "Snskrithi Mishra & Pawan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-510",
    "email": "snskrithi.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9111211104, Courses: Core"
    ]
  },
  {
    "id": 369,
    "name": "Suchismita Patra",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-233",
    "email": "suchismita.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9540610053, Courses: Core"
    ]
  },
  {
    "id": 370,
    "name": "Sumit Mittal",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-304",
    "email": "sumit.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9318325748, Courses: Core"
    ]
  },
  {
    "id": 371,
    "name": "Swati Chauhan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-236",
    "email": "swati.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 6398505154, Courses: Core"
    ]
  },
  {
    "id": 372,
    "name": "T Venkateswarao",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-305",
    "email": "t.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 6294524861, Courses: Core"
    ]
  },
  {
    "id": 373,
    "name": "Udai Kumar",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-537",
    "email": "udai.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 7651914458, Courses: Core"
    ]
  },
  {
    "id": 374,
    "name": "Ujjwal Kumar Mishra",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-220",
    "email": "ujjwal.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9852977391, Courses: Core"
    ]
  },
  {
    "id": 375,
    "name": "Usama Khan",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 B-509",
    "email": "usama.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: Campus Directory, Courses: Core"
    ]
  },
  {
    "id": 376,
    "name": "Vijay Kumar Patel",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 A-232",
    "email": "vijay.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9026050579, Courses: Core"
    ]
  },
  {
    "id": 377,
    "name": "Vijendra Singh Bramhe",
    "designation": "Assistant Professor / Faculty",
    "school": "VIT Bhopal University",
    "cabin": "AB01 C-505",
    "email": "vijendra.faculty@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 8954675017, Courses: Core"
    ]
  },
  {
    "id": 378,
    "name": "Dr. Prakash N B",
    "designation": "Associate Professor Senior Grade 1 (Faculty ID: 100693)",
    "school": "School of Computer Science and Engineering (SCOPE) - BCE Dept",
    "cabin": "AB02 S-214",
    "email": "prakash@vitbhopal.ac.in",
    "office_hours": "Mon - Fri: 10:00 AM - 4:30 PM",
    "courses": [
      "Mobile: 9443414744, Courses: Core"
    ]
  }
];

export const KNOWLEDGE_RULES: KnowledgeRule[] = [
  {
    "id": "attendance_policy",
    "category": "Academics & Attendance",
    "title": "Attendance Requirement & Debarred Criteria",
    "content": "A minimum of 75% attendance is mandatory in each course to be eligible to appear for the Final Assessment Test (FAT). Students having less than 75% attendance are debarred ('N' grade / Debarred category) from appearing in the FAT for that specific course and must re-register for the course in subsequent semesters.",
    "keywords": [
      "attendance",
      "75%",
      "debarred",
      "minimum attendance",
      "shortage",
      "eligible",
      "fat",
      "n grade"
    ]
  },
  {
    "id": "nine_pointer_privilege",
    "category": "Academics & Attendance",
    "title": "9-Pointer Attendance Exemption / Waiver",
    "content": "Students with a Cumulative Grade Point Average (CGPA) of 9.0 and above ('9-Pointers') are exempted from the mandatory 75% minimum attendance requirement. However, they are still strongly encouraged to attend lectures and must appear for all continuous assessments (CAT-1, CAT-2, DA, Lab assessments) and FAT.",
    "keywords": [
      "9 pointer",
      "9 cgpa",
      "attendance exemption",
      "attendance waiver",
      "9.0",
      "privilege"
    ]
  },
  {
    "id": "grading_system",
    "category": "Academics & Grading",
    "title": "Grading System and Grade Points",
    "content": "VIT Bhopal follows a 10-point Letter Grading scale: 'S' (10 Grade Points - Outstanding), 'A' (9 Grade Points - Excellent), 'B' (8 Grade Points - Very Good), 'C' (7 Grade Points - Good), 'D' (6 Grade Points - Average), 'E' (5 Grade Points - Satisfactory / Minimum Pass), 'F' (0 Grade Points - Fail), 'N' (0 Grade Points - Debarred due to low attendance). Relative grading or absolute grading cutoffs are determined by the academic council and course coordinators.",
    "keywords": [
      "grading",
      "grade scale",
      "s grade",
      "a grade",
      "b grade",
      "e grade",
      "f grade",
      "cgpa calculation",
      "grade points",
      "marks"
    ]
  },
  {
    "id": "assessment_weightage",
    "category": "Academics & Evaluation",
    "title": "Course Evaluation Weightages (Theory Courses)",
    "content": "Typical evaluation scheme for a 3-credit theory course comprises: Continuous Assessment Test 1 (CAT-1) = 15%, Continuous Assessment Test 2 (CAT-2) = 15%, Digital Assignments / Quizzes (DA) = 30% (usually 3 DAs of 10% each), and Final Assessment Test (FAT) = 40%. Total = 100%. Passing requires at least 40% in FAT (16 out of 40) and overall 50% composite aggregate.",
    "keywords": [
      "weightage",
      "cat 1",
      "cat 2",
      "da",
      "fat",
      "marks distribution",
      "evaluation",
      "passing marks",
      "split"
    ]
  },
  {
    "id": "ffcs_guidelines",
    "category": "Academics & Registration",
    "title": "FFCS (Fully Flexible Credit System)",
    "content": "Under FFCS, students have the freedom to select courses, choose their preferred faculty, slots, and balance their semester credit load. The minimum credit limit per regular semester is typically 16 credits and maximum credit limit is 27 credits (soft cap). Add/Drop options are provided during the initial week of the semester.",
    "keywords": [
      "ffcs",
      "course registration",
      "credits",
      "slots",
      "add drop",
      "flexible credits",
      "credit limit"
    ]
  },
  {
    "id": "hostel_rules",
    "category": "Hostel & Campus Life",
    "title": "Hostel Outing, Leave, and Night Curfew Timings",
    "content": "Hostel gate closure / in-time for students is strictly 8:30 PM (or 9:00 PM on weekends/holidays). For overnight stay or home visits, students must apply for Digital Outing / Leave on the VTOP portal at least 24 hours in advance. The leave must be approved by the designated Faculty Proctor and Hostel Warden before biometric gate clearance.",
    "keywords": [
      "hostel",
      "in time",
      "curfew",
      "outing",
      "leave application",
      "warden",
      "gate pass",
      "biometric"
    ]
  },
  {
    "id": "proctor_system",
    "category": "Mentorship & Proctoring",
    "title": "Faculty Proctoring System",
    "content": "Every student is assigned a dedicated Faculty Proctor who serves as a mentor, academic guide, and guardian on campus. The proctor reviews attendance, academic performance, approves hostel leave applications, and interacts periodically with parents.",
    "keywords": [
      "proctor",
      "mentor",
      "leave approval",
      "proctor meet",
      "counselor"
    ]
  },
  {
    "id": "re_evaluation_grade_improvement",
    "category": "Examinations",
    "title": "FAT Paper Viewing, Re-evaluation & Grade Improvement",
    "content": "Following the FAT result declaration, students can register on VTOP for Paper Seeing / Re-evaluation within the notified window by paying the prescribed fee. Students with 'F' or 'E'/'D' grades can also opt for Grade Improvement during summer/weekend semesters under FFCS.",
    "keywords": [
      "paper seeing",
      "re-evaluation",
      "re-eval",
      "grade improvement",
      "re-checking",
      "arrear",
      "backlog"
    ]
  },
  {
    "id": "campus_blocks",
    "category": "Campus Navigation",
    "title": "Campus Buildings & Infrastructure",
    "content": "VIT Bhopal campus includes Academic Block 1 (AB-1), Academic Block 2 (AB-2 / Main Building), Lab Complex & Computing Center, Central Library, Multi-Purpose Auditorium, Boys Hostels (Blocks 1 to 6), Girls Hostel, Food Court & Canteen, and Sports Complex.",
    "keywords": [
      "ab1",
      "ab2",
      "academic block",
      "library",
      "canteen",
      "hostel blocks",
      "location",
      "venue",
      "campus map"
    ]
  },
  {
    "id": "wifi_vtop_access",
    "category": "IT & Wi-Fi Services",
    "title": "Campus Wi-Fi & VTOP Access Guidelines",
    "content": "Campus Wi-Fi is authenticated using 802.1X student credentials (Registration Number and Password). VTOP is accessible internally via campus intranet and outside through the official portal URL (https://vtop.vitbhopal.ac.in/vtop/content). For password resets, contact the CTS (Centre for Technical Support) helpdesk.",
    "keywords": [
      "wifi",
      "internet",
      "vtop login",
      "password reset",
      "cts",
      "credentials",
      "intranet"
    ]
  },
  {
    "id": "vit_programs_all",
    "category": "Academic Programmes & Admissions",
    "title": "All Academic Programmes & Branches Offered at VIT Bhopal",
    "content": "**B.Tech Programmes (4 Years):**\n- B.Tech Aerospace Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/aerospace-engineering/)\n- B.Tech Bioengineering (4 Years) - [More Info](https://vitbhopal.ac.in/bio-engineering/)\n- B.Tech Computer Science & Engineering (Core) (4 Years) - [More Info](https://vitbhopal.ac.in/computer-science-and-engg/)\n- B.Tech CSE (Artificial Intelligence & Machine Learning) (4 Years) - [More Info](https://vitbhopal.ac.in/ai/)\n- B.Tech CSE (Cyber Security & Digital Forensics) (4 Years) - [More Info](https://vitbhopal.ac.in/cyber-security/)\n- B.Tech CSE (Cloud Computing & Automation) (4 Years) - [More Info](https://vitbhopal.ac.in/cloud/)\n- B.Tech CSE (E-Commerce Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/ecommerce/)\n- B.Tech CSE (Education Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/edutech/)\n- B.Tech CSE (Gaming Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/gaming-technology/)\n- B.Tech CSE (Health Informatics) (4 Years) - [More Info](https://vitbhopal.ac.in/health-informatics/)\n- B.Tech Electronics & Communication Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/electronics-and-communication-engg/)\n- B.Tech ECE (Artificial Intelligence & Cybernetics) (4 Years) - [More Info](https://vitbhopal.ac.in/cybernetics/)\n- B.Tech Mechanical Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/mechanical-engineering/)\n- B.Tech Mechanical (Artificial Intelligence & Robotics) (4 Years) - [More Info](https://vitbhopal.ac.in/robotics/)\n\n**Integrated PG & M.Tech / MBA / MCA Programmes:**\n- Integrated M.Tech Artificial Intelligence (5 Years Integrated) - [More Info](https://vitbhopal.ac.in/ai/)\n- Integrated M.Tech CSE (Cyber Security) (5 Years Integrated) - [More Info](https://vitbhopal.ac.in/cyber-security/)\n- Integrated M.Tech CSE (Computational and Data Science) (5 Years Integrated) - [More Info](https://vitbhopal.ac.in/int-mtech-cse-scds/)\n- Integrated M.Tech AI and Bioinformatics (5 Years Integrated) - [More Info](https://vitbhopal.ac.in/integrated-m-tech-ai-and-bioinformatics/)\n- M.Tech CSE (Cyber Security & Digital Forensics) (2 Years) - [More Info](https://vitbhopal.ac.in/mtech-cyber-digital-forensics/)\n- M.Tech Artificial Intelligence & Data Science (2 Years) - [More Info](https://vitbhopal.ac.in/mtechaids/)\n- M.Tech VLSI Design (2 Years) - [More Info](https://vitbhopal.ac.in/m-tech-vlsi-design/)\n- MBA (Master of Business Administration) (2 Years) - [More Info](https://vitbhopal.ac.in/mba/)\n- MCA (Master of Computer Applications) (2 Years) - [More Info](https://vitbhopal.ac.in/mca/)\n\n**Architecture, BBA & Ph.D Programmes:**\n- B.Arch (Bachelor of Architecture) (5 Years) - [More Info](https://vitbhopal.ac.in/architecture/)\n- BBA (Bachelor of Business Administration) (3 Years) - [More Info](https://vitbhopal.ac.in/business-school/)\n- Ph.D in Engineering (Research Degree) - [More Info](https://vitbhopal.ac.in/phd/)\n- Ph.D in Sciences (Research Degree) - [More Info](https://vitbhopal.ac.in/phd/)\n- Ph.D in Business Studies (Research Degree) - [More Info](https://vitbhopal.ac.in/phd/)\n- Ph.D in Humanities (Research Degree) - [More Info](https://vitbhopal.ac.in/phd/)",
    "keywords": [
      "branches",
      "programmes",
      "courses offered",
      "btech",
      "cse",
      "aiml",
      "cyber security",
      "aerospace",
      "bioengineering",
      "bba",
      "barch",
      "mtech",
      "mca",
      "mba",
      "phd",
      "admissions",
      "specializations"
    ]
  },
  {
    "id": "vit_btech_specializations",
    "category": "Academic Programmes & Admissions",
    "title": "B.Tech Specializations & Branches at VIT Bhopal",
    "content": "VIT Bhopal offers 14 specialized B.Tech engineering branches:\n- B.Tech Aerospace Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/aerospace-engineering/)\n- B.Tech Bioengineering (4 Years) - [More Info](https://vitbhopal.ac.in/bio-engineering/)\n- B.Tech Computer Science & Engineering (Core) (4 Years) - [More Info](https://vitbhopal.ac.in/computer-science-and-engg/)\n- B.Tech CSE (Artificial Intelligence & Machine Learning) (4 Years) - [More Info](https://vitbhopal.ac.in/ai/)\n- B.Tech CSE (Cyber Security & Digital Forensics) (4 Years) - [More Info](https://vitbhopal.ac.in/cyber-security/)\n- B.Tech CSE (Cloud Computing & Automation) (4 Years) - [More Info](https://vitbhopal.ac.in/cloud/)\n- B.Tech CSE (E-Commerce Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/ecommerce/)\n- B.Tech CSE (Education Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/edutech/)\n- B.Tech CSE (Gaming Technology) (4 Years) - [More Info](https://vitbhopal.ac.in/gaming-technology/)\n- B.Tech CSE (Health Informatics) (4 Years) - [More Info](https://vitbhopal.ac.in/health-informatics/)\n- B.Tech Electronics & Communication Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/electronics-and-communication-engg/)\n- B.Tech ECE (Artificial Intelligence & Cybernetics) (4 Years) - [More Info](https://vitbhopal.ac.in/cybernetics/)\n- B.Tech Mechanical Engineering (4 Years) - [More Info](https://vitbhopal.ac.in/mechanical-engineering/)\n- B.Tech Mechanical (Artificial Intelligence & Robotics) (4 Years) - [More Info](https://vitbhopal.ac.in/robotics/)",
    "keywords": [
      "btech branches",
      "cse specializations",
      "engineering branches",
      "aerospace",
      "mechanical",
      "ece",
      "aiml",
      "cloud",
      "gaming",
      "health informatics",
      "ecommerce",
      "edutech"
    ]
  },
  {
    "id": "vit_branch_codes_decoder",
    "category": "Academic Programmes & Admissions",
    "title": "Official Branch Registration Codes (BCE, BAI, BCG, BET, BCY, BSA, BAS, MIM, MIP)",
    "content": "### \ud83d\udd24 Official VIT Bhopal Registration Branch Codes\n\nEvery student's registration number (e.g. `22BAI10245`, `23BCE10890`) encodes their admission year and branch code:\n\n- **`BAI`**: B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning) (4 Years)\n- **`BCE`**: B.Tech Computer Science & Engineering (Core) (4 Years)\n- **`BCG`**: B.Tech Computer Science & Engineering (Gaming Technology) (4 Years)\n- **`BET`**: B.Tech Computer Science & Engineering (Education Technology) (4 Years)\n- **`BCY`**: B.Tech Computer Science & Engineering (Cyber Security & Digital Forensics) (4 Years)\n- **`BSA`**: B.Tech Computer Science & Engineering (Cloud Computing & Automation) (4 Years)\n- **`BAS`**: B.Tech Aerospace Engineering (4 Years)\n- **`BEC`**: B.Tech Electronics & Communication Engineering (4 Years)\n- **`BME`**: B.Tech Mechanical Engineering (4 Years)\n- **`BAR`**: B.Arch (Bachelor of Architecture) (5 Years)\n- **`BBA`**: BBA (Bachelor of Business Administration) (3 Years)\n- **`MIM`**: Integrated M.Tech Artificial Intelligence (5 Years Integrated)\n- **`MIP`**: Integrated M.Tech Computer Science & Engineering (Computational and Data Science) (5 Years Integrated)\n\n\ud83d\udca1 *Example: In `22BAI10245`, '22' is the 2022 batch, 'BAI' is CSE (AI & ML), and '10245' is the unique student roll number.*",
    "keywords": [
      "branch codes",
      "registration number decoder",
      "reg no",
      "bai",
      "bce",
      "bcg",
      "bet",
      "bcy",
      "bsa",
      "bas",
      "mim",
      "mip",
      "bec",
      "bme",
      "bar",
      "bba",
      "roll number code"
    ]
  },
  {
    "id": "mess_timings",
    "category": "Hostel & Mess Life",
    "title": "Hostel Mess Timings & Meal Schedule",
    "content": "### \ud83c\udf7d\ufe0f Official Hostel Mess Timings (Boys & Girls Hostels):\n\n- **Breakfast:** 07:30 AM \u2013 09:00 AM\n- **Lunch:** 12:30 PM \u2013 02:00 PM\n- **Evening Snacks & Tea:** 05:00 PM \u2013 06:00 PM\n- **Dinner:** 07:30 PM \u2013 09:00 PM\n\nMess options include Special Mess, South Indian Mess, and Veg/Non-Veg Caterer Mess. Mess change applications can be submitted on VTOP between the 20th and 25th of every month.",
    "keywords": [
      "mess",
      "food",
      "breakfast",
      "lunch",
      "dinner",
      "snacks",
      "timings",
      "meal",
      "south indian",
      "non-veg",
      "mess change"
    ]
  },
  {
    "id": "campus_food_outlets",
    "category": "Campus Navigation & Amenities",
    "title": "Campus Canteens, Food Court & Cafeterias",
    "content": "### \u2615 Campus Food Outlets & Cafeterias:\n\n- **Central Food Court (Underbelly):** Open 09:00 AM \u2013 10:30 PM (Multi-cuisine meals, shakes, rolls & pizza)\n- **Nescafe Kiosks:** Near AB-1 and Central Plaza (Coffee, Maggi, patties & quick bites)\n- **Night Canteen (Hostel Blocks):** Open 09:30 PM \u2013 12:30 AM during exams\n- **Campus Convenience Store & Bakery:** Ground Floor, Student Activity Centre",
    "keywords": [
      "canteen",
      "food court",
      "nescafe",
      "underbelly",
      "cafe",
      "night canteen",
      "food park",
      "snacks",
      "tea"
    ]
  },
  {
    "id": "bus_transport_timings",
    "category": "Campus Transport & Shuttle",
    "title": "Campus Transport & Bus Schedule (Bhopal, Indore, Sehore)",
    "content": "### \ud83d\ude8c University Bus & Shuttle Schedule:\n\n- **Bhopal to Campus (Kothri Kalan):** Morning pickup at 07:00 AM from key pickup points (ISBT, Lalghati, MP Nagar, Bairagarh). Evening return at 05:30 PM.\n- **Indore to Campus:** Morning pickup at 06:30 AM (Vijay Nagar, Palasia, Bengali Square). Return at 05:30 PM.\n- **Sehore & Ashta Local Shuttles:** Frequent shuttles between 08:00 AM and 06:00 PM.\n- **Hostel to Academic Block Internal Shuttles:** Continuous golf carts and e-rickshaws between 08:00 AM and 08:30 PM.",
    "keywords": [
      "bus",
      "transport",
      "shuttle",
      "pickup",
      "timings",
      "bhopal bus",
      "indore bus",
      "sehore",
      "route",
      "morning bus",
      "return bus"
    ]
  },
  {
    "id": "medical_health_centre",
    "category": "Healthcare & Emergency",
    "title": "Campus Health Centre & 24/7 Ambulance",
    "content": "### \ud83c\udfe5 Health Centre & Medical Services:\n\n- **Campus Health Centre:** Located near Boys Hostel Block-1, open 24x7 with resident doctors and nurses.\n- **Emergency Ambulance:** Available on-call 24x7 for transport to Chirayu / AIIMS Bhopal.\n- **Emergency Helpline:** Contact Security Desk (Extension 100/108) or Hostel Caretaker.",
    "keywords": [
      "hospital",
      "doctor",
      "health centre",
      "medical",
      "ambulance",
      "emergency",
      "pharmacy",
      "medicine",
      "sick"
    ]
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    "id": 1,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Aerospace Engineering",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/aerospace-engineering/"
  },
  {
    "id": 2,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Bioengineering",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/bio-engineering/"
  },
  {
    "id": 3,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Computer Science & Engineering (Core)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/computer-science-and-engg/"
  },
  {
    "id": 4,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/ai/"
  },
  {
    "id": 5,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Cyber Security & Digital Forensics)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/cyber-security/"
  },
  {
    "id": 6,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Cloud Computing & Automation)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/cloud/"
  },
  {
    "id": 7,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (E-Commerce Technology)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/ecommerce/"
  },
  {
    "id": 8,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Education Technology)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/edutech/"
  },
  {
    "id": 9,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Gaming Technology)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/gaming-technology/"
  },
  {
    "id": 10,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech CSE (Health Informatics)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/health-informatics/"
  },
  {
    "id": 11,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Electronics & Communication Engineering",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/electronics-and-communication-engg/"
  },
  {
    "id": 12,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech ECE (Artificial Intelligence & Cybernetics)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/cybernetics/"
  },
  {
    "id": 13,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Mechanical Engineering",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/mechanical-engineering/"
  },
  {
    "id": 14,
    "category": "B.Tech Programmes (4 Years)",
    "name": "B.Tech Mechanical (Artificial Intelligence & Robotics)",
    "duration": "4 Years",
    "url": "https://vitbhopal.ac.in/robotics/"
  },
  {
    "id": 15,
    "category": "Architecture Programmes (5 Years)",
    "name": "B.Arch (Bachelor of Architecture)",
    "duration": "5 Years",
    "url": "https://vitbhopal.ac.in/architecture/"
  },
  {
    "id": 16,
    "category": "Other UG Programmes (3 Years)",
    "name": "BBA (Bachelor of Business Administration)",
    "duration": "3 Years",
    "url": "https://vitbhopal.ac.in/business-school/"
  },
  {
    "id": 17,
    "category": "Integrated PG Programmes (5 Years)",
    "name": "Integrated M.Tech Artificial Intelligence",
    "duration": "5 Years Integrated",
    "url": "https://vitbhopal.ac.in/ai/"
  },
  {
    "id": 18,
    "category": "Integrated PG Programmes (5 Years)",
    "name": "Integrated M.Tech CSE (Cyber Security)",
    "duration": "5 Years Integrated",
    "url": "https://vitbhopal.ac.in/cyber-security/"
  },
  {
    "id": 19,
    "category": "Integrated PG Programmes (5 Years)",
    "name": "Integrated M.Tech CSE (Computational and Data Science)",
    "duration": "5 Years Integrated",
    "url": "https://vitbhopal.ac.in/int-mtech-cse-scds/"
  },
  {
    "id": 20,
    "category": "Integrated PG Programmes (5 Years)",
    "name": "Integrated M.Tech AI and Bioinformatics",
    "duration": "5 Years Integrated",
    "url": "https://vitbhopal.ac.in/integrated-m-tech-ai-and-bioinformatics/"
  },
  {
    "id": 21,
    "category": "Postgraduate Programmes (2 Years)",
    "name": "M.Tech CSE (Cyber Security & Digital Forensics)",
    "duration": "2 Years",
    "url": "https://vitbhopal.ac.in/mtech-cyber-digital-forensics/"
  },
  {
    "id": 22,
    "category": "Postgraduate Programmes (2 Years)",
    "name": "M.Tech Artificial Intelligence & Data Science",
    "duration": "2 Years",
    "url": "https://vitbhopal.ac.in/mtechaids/"
  },
  {
    "id": 23,
    "category": "Postgraduate Programmes (2 Years)",
    "name": "M.Tech VLSI Design",
    "duration": "2 Years",
    "url": "https://vitbhopal.ac.in/m-tech-vlsi-design/"
  },
  {
    "id": 24,
    "category": "Postgraduate Programmes (2 Years)",
    "name": "MBA (Master of Business Administration)",
    "duration": "2 Years",
    "url": "https://vitbhopal.ac.in/mba/"
  },
  {
    "id": 25,
    "category": "Postgraduate Programmes (2 Years)",
    "name": "MCA (Master of Computer Applications)",
    "duration": "2 Years",
    "url": "https://vitbhopal.ac.in/mca/"
  },
  {
    "id": 26,
    "category": "Ph.D Research Programmes",
    "name": "Ph.D in Engineering",
    "duration": "Research Degree",
    "url": "https://vitbhopal.ac.in/phd/"
  },
  {
    "id": 27,
    "category": "Ph.D Research Programmes",
    "name": "Ph.D in Sciences",
    "duration": "Research Degree",
    "url": "https://vitbhopal.ac.in/phd/"
  },
  {
    "id": 28,
    "category": "Ph.D Research Programmes",
    "name": "Ph.D in Business Studies",
    "duration": "Research Degree",
    "url": "https://vitbhopal.ac.in/phd/"
  },
  {
    "id": 29,
    "category": "Ph.D Research Programmes",
    "name": "Ph.D in Humanities",
    "duration": "Research Degree",
    "url": "https://vitbhopal.ac.in/phd/"
  }
];

export const BRANCH_CODES: BranchCode[] = [
  {
    "id": 1,
    "code": "BAI",
    "programme": "B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 2,
    "code": "BCE",
    "programme": "B.Tech Computer Science & Engineering (Core)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 3,
    "code": "BCG",
    "programme": "B.Tech Computer Science & Engineering (Gaming Technology)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 4,
    "code": "BET",
    "programme": "B.Tech Computer Science & Engineering (Education Technology)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 5,
    "code": "BCY",
    "programme": "B.Tech Computer Science & Engineering (Cyber Security & Digital Forensics)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 6,
    "code": "BSA",
    "programme": "B.Tech Computer Science & Engineering (Cloud Computing & Automation)",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 7,
    "code": "BAS",
    "programme": "B.Tech Aerospace Engineering",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 8,
    "code": "BEC",
    "programme": "B.Tech Electronics & Communication Engineering",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 9,
    "code": "BME",
    "programme": "B.Tech Mechanical Engineering",
    "type": "UG - B.Tech",
    "duration": "4 Years"
  },
  {
    "id": 10,
    "code": "BAR",
    "programme": "B.Arch (Bachelor of Architecture)",
    "type": "UG - Architecture",
    "duration": "5 Years"
  },
  {
    "id": 11,
    "code": "BBA",
    "programme": "BBA (Bachelor of Business Administration)",
    "type": "UG - Management",
    "duration": "3 Years"
  },
  {
    "id": 12,
    "code": "MIM",
    "programme": "Integrated M.Tech Artificial Intelligence",
    "type": "Integrated PG",
    "duration": "5 Years Integrated"
  },
  {
    "id": 13,
    "code": "MIP",
    "programme": "Integrated M.Tech Computer Science & Engineering (Computational and Data Science)",
    "type": "Integrated PG",
    "duration": "5 Years Integrated"
  }
];
