import { getSelectedDino } from './dinoData.js';

const calcHealth = target => {
  const arr = target.split('-');
  const id = arr[1];
  if (target.includes('feed')) {
    const feedId = target.slice(4, target.length);
    const idToNum = parseInt(feedId, 10);
    console.log(getSelectedDino(idToNum).health + 25);
  } else if (target.includes('adventure')) {
  } else if (target.includes('pet')) {
  }
};

export { calcHealth };
