import { AttendanceCalculation, MarksCalculation } from "./types";

export function calculateAttendanceMargin(
  attended: number,
  total: number,
  targetPct: number = 75.0
): AttendanceCalculation {
  if (total <= 0) {
    return {
      attended,
      total,
      current_percentage: 100.0,
      status: "safe",
      safe_bunks: 0,
      classes_needed_to_recover: 0,
      target_percentage: targetPct,
      message: "No classes conducted yet.",
    };
  }

  const currentPct = Number(((attended / total) * 100).toFixed(2));
  const threshold = targetPct / 100.0;

  if (currentPct >= targetPct) {
    // Number of additional classes 'b' student can miss: attended / (total + b) >= threshold
    const safeBunks = Math.max(0, Math.floor((attended - threshold * total) / threshold));
    let status: "safe" | "warning" | "critical" = "safe";
    if (currentPct < 77.0) {
      status = "warning";
    }

    const message =
      safeBunks > 0
        ? `Your current attendance is ${currentPct}%. You can safely miss ${safeBunks} upcoming class(es) while staying above ${targetPct}%.`
        : `Your current attendance is ${currentPct}%. You are on the edge! You cannot miss any upcoming classes.`;

    return {
      attended,
      total,
      current_percentage: currentPct,
      status,
      safe_bunks: safeBunks,
      classes_needed_to_recover: 0,
      target_percentage: targetPct,
      message,
    };
  } else {
    // Below targetPct: Need 'c' consecutive classes: (attended + c) / (total + c) >= threshold
    const classesNeeded = Math.ceil((threshold * total - attended) / (1 - threshold));
    const message = `⚠️ Low attendance alert! Your current attendance is ${currentPct}% (below ${targetPct}%). You MUST attend the next ${classesNeeded} consecutive class(es) without absence to reach ${targetPct}%.`;

    return {
      attended,
      total,
      current_percentage: currentPct,
      status: "critical",
      safe_bunks: 0,
      classes_needed_to_recover: classesNeeded,
      target_percentage: targetPct,
      message,
    };
  }
}

export function calculateRequiredFatMarks(
  cat1: number,
  cat2: number,
  da: number,
  targetGrade: string = "A",
  catMax: number = 15.0,
  daMax: number = 30.0,
  fatWeightage: number = 40.0
): MarksCalculation {
  const gradeKey = targetGrade.toUpperCase().trim();
  const gradeThresholds: Record<string, number> = {
    S: 90.0,
    A: 80.0,
    B: 70.0,
    C: 60.0,
    D: 55.0,
    E: 50.0,
  };

  const threshold = gradeThresholds[gradeKey] ?? 80.0;
  const currentInternalTotal = Number((cat1 + cat2 + da).toFixed(2)); // out of 60

  // Required from FAT (out of 40):
  const requiredFromFat40 = threshold - currentInternalTotal;
  const minimumFatPass = 16.0;
  const finalRequired40 = Math.max(requiredFromFat40, minimumFatPass);

  // Convert to 100-mark FAT scale
  const requiredFat100 = Number(((finalRequired40 / fatWeightage) * 100).toFixed(1));
  const isAchievable = requiredFat100 <= 100.0;

  const gradesList = Object.keys(gradeThresholds);
  const currentIdx = gradesList.indexOf(gradeKey);
  const nextLowerGrade = currentIdx >= 0 && currentIdx < gradesList.length - 1 ? gradesList[currentIdx + 1] : "B";

  const message = isAchievable
    ? `With your current internal score of ${currentInternalTotal}/60 (CAT-1: ${cat1}, CAT-2: ${cat2}, DA: ${da}), you need at least ${finalRequired40.toFixed(1)}/40 (${requiredFat100}/100 in the written exam) to achieve an '${gradeKey}' grade.`
    : `With your internal score of ${currentInternalTotal}/60, an '${gradeKey}' grade requires ${finalRequired40.toFixed(1)}/40 (${requiredFat100}/100), which exceeds maximum marks. Consider aiming for a '${nextLowerGrade}' grade instead.`;

  return {
    target_grade: gradeKey,
    internal_marks_scored: currentInternalTotal,
    internal_max: catMax * 2 + daMax,
    required_fat_weighted_40: finalRequired40,
    required_fat_raw_100: requiredFat100,
    minimum_passing_fat_40: minimumFatPass,
    is_achievable: isAchievable,
    message,
  };
}
