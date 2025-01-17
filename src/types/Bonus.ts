import { Tag } from '@/types/Tags';

export enum BonusType {
  // Base Game
  CONSERVATION_POINT = 'Conservation Point',
  REPUTATION = 'Reputation',
}

export interface Bonus {
  bonusType: BonusType;
  bonusRequirement: Tag;
  bonusDesc?: string;
  bonusValue: number;
}
