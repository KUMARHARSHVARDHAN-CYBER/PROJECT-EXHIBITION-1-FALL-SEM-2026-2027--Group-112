import { KNOWLEDGE_RULES, ACADEMIC_PROGRAMS, BRANCH_CODES, KnowledgeRule } from "./assistantData";

export interface RAGSearchResult {
  id: string;
  category: string;
  title: string;
  content: string;
  score: number;
}

export class RAGEngine {
  private rules: KnowledgeRule[];

  constructor() {
    this.rules = [...KNOWLEDGE_RULES];
  }

  public searchKnowledgeBase(query: string, topK: number = 2): RAGSearchResult[] {
    const qLower = query.toLowerCase().trim();
    const queryTokens = qLower.split(/\s+/).filter((t) => t.length > 2);

    const scored: RAGSearchResult[] = [];

    for (const rule of this.rules) {
      let score = 0;
      const titleLower = rule.title.toLowerCase();
      const contentLower = rule.content.toLowerCase();

      // Exact title match
      if (titleLower.includes(qLower)) {
        score += 15;
      }

      // Keyword match
      for (const kw of rule.keywords) {
        const kwLower = kw.toLowerCase();
        if (qLower.includes(kwLower)) {
          score += 10;
        }
        for (const token of queryTokens) {
          if (kwLower.includes(token)) {
            score += 4;
          }
        }
      }

      // Content match
      for (const token of queryTokens) {
        if (titleLower.includes(token)) {
          score += 5;
        }
        if (contentLower.includes(token)) {
          score += 2;
        }
      }

      if (score > 0) {
        scored.push({
          id: rule.id,
          category: rule.category,
          title: rule.title,
          content: rule.content,
          score,
        });
      }
    }

    // Also search Academic Programs if relevant
    if (qLower.includes("program") || qLower.includes("course") || qLower.includes("branch") || qLower.includes("degree") || qLower.includes("specialization")) {
      const matchedPrograms = ACADEMIC_PROGRAMS.filter((p) =>
        queryTokens.some((t) => p.name.toLowerCase().includes(t) || p.category.toLowerCase().includes(t))
      );
      if (matchedPrograms.length > 0) {
        scored.push({
          id: "academic_programs_match",
          category: "Academic Programmes Offered",
          title: `Academic Programmes at VIT Bhopal (${matchedPrograms.length} matching)`,
          content: matchedPrograms.map((p) => `• **${p.name}** (${p.category}) — Duration: ${p.duration}`).join("\n"),
          score: 12,
        });
      }
    }

    // Also search Branch Codes
    if (qLower.includes("branch code") || qLower.includes("code") || qLower.includes("registration prefix")) {
      const matchedBranches = BRANCH_CODES.filter((b) => {
        const prog = (b.programme || b.program || "").toLowerCase();
        const deg = (b.degree || "").toLowerCase();
        return queryTokens.some((t) => b.code.toLowerCase().includes(t) || prog.includes(t) || deg.includes(t));
      });
      if (matchedBranches.length > 0) {
        scored.push({
          id: "branch_codes_match",
          category: "Registration Branch Codes",
          title: "VIT Bhopal Branch Codes & Prefixes",
          content: matchedBranches.map((b) => `• \`${b.code}\`: **${b.programme || b.program || "Programme"}** (${b.degree || "Degree"}, ${b.school || "School"})`).join("\n"),
          score: 14,
        });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topK);
  }
}

export const ragEngine = new RAGEngine();
