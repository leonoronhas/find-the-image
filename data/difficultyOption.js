let difficultyOption = "";

export const setDifficultyOption = (value) => {
  difficultyOption = value;
};

export const getDifficultyOption = () => {
  return difficultyOption;
};

export const timeHandler = () => {
  if (difficultyOption === "HARD") {
    time = 21;
  } else {
    time = 31;
  }
  return time;
};
