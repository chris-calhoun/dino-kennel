import { getSelectedDino } from './dinoData.js';

const calcHealth = target => {
  const arr = target.split('-');
  const id = arr[1];
  const idToNum = parseInt(id, 10);
  if (target.includes('feed')) {
    getSelectedDino(idToNum).health += 25;
  } else if (target.includes('adventure')) {
    getSelectedDino(idToNum).health -= 30;
  } else if (target.includes('pet')) {
    getSelectedDino(idToNum).health += 10;
  }

  // Health max and min limits
  if (getSelectedDino(idToNum).health > 100) {
    getSelectedDino(idToNum).health = 100;
  } else if (getSelectedDino(idToNum).health < 0) {
    getSelectedDino(idToNum).health = 0;
  }
};

export { calcHealth };
