const dinos = [];

const getDinos = () => {
  return dinos;
};

const getSelectedDino = e => {
  const target = e.target.id;
  const arr = target.split('-');
  arr[1] = parseInt(arr[1], 10);
  arr[2] = getDinos(arr[1] - 1);
  return arr;
};

export { getDinos, getSelectedDino };
