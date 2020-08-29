import { getSelectedDino } from './dinoData.js';

const calcHealth = target => {
  if (target.includes('feed')) {
    getSelectedDino(target).health += 25;
  } else if (target.includes('adventure')) {
    getSelectedDino(target).health -= 30;
  } else if (target.includes('pet')) {
    getSelectedDino(target).health += 10;
  }

  // Health max and min limits
  if (getSelectedDino(target).health > 100) {
    getSelectedDino(target).health = 100;
  } else if (getSelectedDino(target).health < 0) {
    getSelectedDino(target).health = 0;
  }
};

export { calcHealth };
