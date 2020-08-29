const calcHealth = (action, dinoObject) => {
  if (action === 'feed') {
    dinoObject.health += 25;
  } else if (action === 'adventure') {
    dinoObject.health -= 30;
  } else if (action === 'pet') {
    dinoObject.health += 10;
  }

  // Health max and min limits
  if (dinoObject.health > 100) {
    dinoObject.health.health = 100;
  } else if (dinoObject.health < 0) {
    dinoObject.health.health = 0;
  }
};

export { calcHealth };
