const dinos = [];

const getDinos = () => {
  return dinos;
};

const getSelectedDino = dino => {
  return dinos[dino - 1];
};

export { getDinos, getSelectedDino };
