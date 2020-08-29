import { calcHealth } from '../helpers/data/calculateHealth.js';
import { getSelectedDino } from '../helpers/data/dinoData.js';

const createDinoCards = dinoArray => {
  const newestDino = dinoArray[dinoArray.length - 1];
  $('#dinoKennel').append(`
        <div class="card m-3" id=card-${newestDino.id} style="width: 16rem; ">
          <img class="card-img-top" src=https://i.pinimg.com/originals/60/72/b9/6072b96192d18a2167afeb64371e769f.jpg alt="Card image cap">
          <div class="card-body" >
            <h5 class="card-title text-center"> ${newestDino.name}</h5>
          </div>
        <div id = progress-${newestDino.id} class="progress mb-3" style="width:80%; margin: 0 auto;">
          <div class="progress-bar bg-success progress-bar-striped"  role="progressbar"
          aria-valuenow="${newestDino.health}" aria-valuemin="0" aria-valuemax="100" style="width:s${newestDino.health}%">
            ${newestDino.health}% 
          </div>
        </div>
          <div class = "container mb-3" style = "width: 75%">
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=feed-${newestDino.id}>Feed</button>
              <button type="button" class="btn btn-danger m-1" id=adventure-${newestDino.id}>Adventure</button>
            </div>
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=pet-${newestDino.id}>Pet</button>
              <button type="button" class="btn btn-danger m-1" id=delete-${newestDino.id}>Delete</button>
            </div>
          </div>

        </div>
      `);
};

const deleteDino = () => {
  $('#dinoLocation').on('click', e => {
    const target = e.target.id;
    const id = target.slice(6, target.length);
    if (target.includes('delete')) {
      $(`#card${id}`).remove();
    }
  });
};

const dinoActions = () => {
  $('#dinoLocation').on('click', e => {
    const target = e.target.id;
    const arr = target.split('-');
    const id = arr[1];
    const idToNum = parseInt(id, 10);
    const preActionHealth = getSelectedDino(idToNum).health;
    calcHealth(target);
    updateHealthBar(target);
    moveDino(target, preActionHealth);
  });
};

const moveDino = (target, originalHealth) => {
  console.log(originalHealth, 'originalHealth');

  const arr = target.split('-');
  const id = arr[1];
  const idToNum = parseInt(id, 10);
  console.log(getSelectedDino(idToNum).health, 'newHealth');

  //If the dino is in the graveyard
  if (originalHealth === 0) {
    if (getSelectedDino(idToNum).health < 70) {
      $(`#dinoHospital`).append($(`#card-${idToNum}`));
    }
    //If the dino is in the Kennel
  } else if (originalHealth >= 70) {
    if (getSelectedDino(idToNum).health < 70) {
      $(`#dinoHospital`).append($(`#card-${idToNum}`));
    }
    //If the dino is in the Hospital
  } else if (originalHealth <= 70 && originalHealth > 0) {
    if (getSelectedDino(idToNum).health === 0) {
      $(`#dinoGraveyard`).append($(`#card-${idToNum}`));
    } else if (getSelectedDino(idToNum).health > 70) {
      $(`#dinoKennel`).append($(`#card-${idToNum}`));
    }
  }
};

const updateHealthBar = target => {
  const arr = target.split('-');
  const id = arr[1];
  // const idToNum = parseInt(id, 10);
  const updatedHealth = `
            `;
  $(`#progress-${id}`).replaceWith(updatedHealth);
};

const initDinoCards = () => {
  deleteDino();
  dinoActions();
};

export { createDinoCards, initDinoCards };
