const dinos = [];

const getDinos = () => {
  return dinos;
};

const getSelectedDino = target => {
  const arr = target.split('-');
  const id = arr[1];
  const idToNum = parseInt(id, 10);
  return dinos[idToNum - 1];
};

export { getDinos, getSelectedDino };
