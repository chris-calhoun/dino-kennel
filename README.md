# Dino Kennel

## Motivation

This project showcases all the vanilla JS I have learned in NSS up to this point. It is designed to be a record keeping application for a dinosaur kennel.

## Build Status

Reached MVP.
Working on styling and dino modal card.

## Screenshots

![Alt text](/assets/images/dino-kennel.png 'Dino-Kennel Website')

## Tech/Framwork

- Bootstrap for styling
- HTML and JavaScript ES6

## Features

- Healthy dinos show in the kennel
- Sick dinos show in the hospital
- Dead dinos show in the graveyard
- Dinos can be removed and added to the kennel
- Dinos can be fed, petted, and sent on an adventure

## Code Example

```
const moveDino = (selectedDino, originalHealth) => {
  //If the dino is in the graveyard
  if (originalHealth === 0) {
    if (selectedDino.health < 70 && selectedDino.health > 0) {
      $(`#dinoHospital`).append($(`#card-${selectedDino.id}`));
    }
    //If the dino is in the Kennel
  } else if (originalHealth > 70) {
    if (selectedDino.health <= 70) {
      $(`#dinoHospital`).append($(`#card-${selectedDino.id}`));
    }
    //If the dino is in the Hospital
  } else if (originalHealth <= 70 && originalHealth > 0) {
    if (selectedDino.health === 0) {
      $(`#dinoGraveyard`).append($(`#card-${selectedDino.id}`));
    } else if (selectedDino.health > 70) {
      $(`#dinoKennel`).append($(`#card-${selectedDino.id}`));
    }
  }
};
```

## Deployed Site

https://dino-kennel-cc.netlify.app/
