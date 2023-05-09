export interface DifficultyInterface {
  cod: number;
  description: string;
}

export enum DifficultyEnum {
  EASY = 1,
  AVERAGE = 2,
  HARD = 3,
}

const difficultyMap = new Map<DifficultyEnum, DifficultyInterface>();
difficultyMap.set(DifficultyEnum.EASY, {
  cod: DifficultyEnum.EASY,
  description: "easy",
});

difficultyMap.set(DifficultyEnum.AVERAGE, {
  cod: DifficultyEnum.AVERAGE,
  description: "average",
});

difficultyMap.set(DifficultyEnum.HARD, {
  cod: DifficultyEnum.HARD,
  description: "hard",
});

export { difficultyMap as difficultMap };
