import { QUESTIONS } from './questions';
import { TYPE_RESULTS, type TypeResult } from './typeResults';
import { AVATAR_BY_ID } from './avatarData';
import { AXIS_ORDER, type AxisKey, type AxisScores, type BrainTypeId } from './types';

export interface CampBrainCheckResult extends TypeResult {
  avatarImage: string;
}

export function calculateAxisScores(answers: Record<number, number>): AxisScores {
  const scores: AxisScores = {
    intuition: 0,
    structure: 0,
    action: 0,
    empathy: 0,
    expression: 0,
    stability: 0,
  };

  for (const question of QUESTIONS) {
    const value = answers[question.id];
    if (value !== undefined) {
      scores[question.axis] += value;
    }
  }

  return scores;
}

function axisPairKey(a: AxisKey, b: AxisKey): string {
  return [a, b].sort().join('+');
}

const TYPE_BY_PAIR = new Map<string, TypeResult>(
  TYPE_RESULTS.map((type) => [axisPairKey(type.axes[0], type.axes[1]), type]),
);

export function determineTypeResult(scores: AxisScores): CampBrainCheckResult {
  const ranked = AXIS_ORDER.map((key) => ({ key, score: scores[key] }))
    .sort((a, b) => b.score - a.score || AXIS_ORDER.indexOf(a.key) - AXIS_ORDER.indexOf(b.key));

  const top1 = ranked[0].key;
  const top2 = ranked[1].key;

  let typeResult = TYPE_BY_PAIR.get(axisPairKey(top1, top2));

  if (!typeResult) {
    typeResult =
      TYPE_RESULTS.find((type) => {
        const pair = new Set(type.axes);
        return pair.has(top1) && pair.has(top2);
      }) ?? TYPE_RESULTS[0];
  }

  return toCampResult(typeResult);
}

export function getTypeResultById(id: BrainTypeId): CampBrainCheckResult {
  const typeResult = TYPE_RESULTS.find((t) => t.id === id) ?? TYPE_RESULTS[0];
  return toCampResult(typeResult);
}

function toCampResult(typeResult: TypeResult): CampBrainCheckResult {
  const avatar = AVATAR_BY_ID[typeResult.id];
  return {
    ...typeResult,
    avatarImage: avatar.image,
  };
}

export function getMaxScorePerAxis(): number {
  return QUESTIONS.filter((q) => q.axis === 'intuition').length * 5;
}
