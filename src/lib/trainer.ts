import { knowledgeModules, trainerQuestions } from "../data/knowledge";

export function findModuleTitle(moduleId: string) {
  return knowledgeModules.find((module) => module.id === moduleId)?.shortTitle ?? "IA";
}

export function getQuestionSet(moduleId: string, level: string) {
  const filtered = trainerQuestions.filter(
    (question) => question.moduleId === moduleId && question.level === level,
  );

  if (filtered.length > 0) {
    return filtered;
  }

  const fallbackByModule = trainerQuestions.filter((question) => question.moduleId === moduleId);
  return fallbackByModule.length > 0 ? fallbackByModule : trainerQuestions;
}

export function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}
