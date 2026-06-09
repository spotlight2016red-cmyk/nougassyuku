import type { BrainTypeId } from './types';

export interface CampAvatar {
  id: BrainTypeId;
  name: string;
  image: string;
}

const AVATAR_BASE = '/avatars/camp-brain-check';

/** 合宿前診断専用の8タイプ初期アバター（育成・進化なし） */
export const CAMP_AVATARS: CampAvatar[] = [
  { id: 'intuition-expression', name: 'ひらめきの旅人', image: `${AVATAR_BASE}/intuition-expression.svg` },
  { id: 'intuition-empathy', name: 'こころの受信士', image: `${AVATAR_BASE}/intuition-empathy.svg` },
  { id: 'structure-stability', name: '地図づくりの賢者', image: `${AVATAR_BASE}/structure-stability.svg` },
  { id: 'structure-expression', name: '流れを編む設計士', image: `${AVATAR_BASE}/structure-expression.svg` },
  { id: 'action-intuition', name: '道ひらきの冒険者', image: `${AVATAR_BASE}/action-intuition.svg` },
  { id: 'action-stability', name: '積み上げの職人', image: `${AVATAR_BASE}/action-stability.svg` },
  { id: 'empathy-stability', name: '灯りの伴走者', image: `${AVATAR_BASE}/empathy-stability.svg` },
  { id: 'empathy-structure', name: '場を整える守り人', image: `${AVATAR_BASE}/empathy-structure.svg` },
];

export const AVATAR_BY_ID = Object.fromEntries(
  CAMP_AVATARS.map((a) => [a.id, a]),
) as Record<BrainTypeId, CampAvatar>;
