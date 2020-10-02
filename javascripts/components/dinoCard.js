import { calcHealth } from '../helpers/data/calculateHealth.js';
import { getSelectedDino } from '../helpers/data/dinoData.js';

const createDinoCards = (dinoArray) => {
  const newestDino = dinoArray[dinoArray.length - 1];
  console.log(newestDino);
  $('#dinoKennel').append(`
        <div class="card m-3" id=card-${newestDino.id} style="width: 16rem; ">
          <img class="card-img-top" src=https://i.pinimg.com/originals/60/72/b9/6072b96192d18a2167afeb64371e769f.jpg alt="Card image cap">
          <div class="card-body" >
            <h5 class="card-title text-center"> ${newestDino.name}</h5>
          </div>
        <div id = progress-${newestDino.id} class="progress mb-3" style="width:80%; margin: 0 auto;">
          <div class="progress-bar bg-success progress-bar-striped"  role="progressbar"
          aria-valuenow=${newestDino.health} aria-valuemin="0" aria-valuemax="100" style="width:${newestDino.health}%">
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

const deleteDino = (id) => {
  $(`#card-${id}`).remove();
};

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

const updateHealthBar = (selectedDino) => {
  const updatedHealth = `
    <div id = progress-${
      selectedDino.id
    } class="progress mb-3" style="width:80%; margin: 0 auto;">
      <div class="progress-bar bg-${healthBarColor(
        selectedDino
      )} progress-bar-striped"  role="progressbar"
      aria-valuenow=${
        selectedDino.health
      } aria-valuemin="0" aria-valuemax="100" style="width:${
    selectedDino.health
  }%">
        ${selectedDino.health}% 
      </div>
  </div>`;
  $(`#progress-${selectedDino.id}`).replaceWith(updatedHealth);
};

const healthBarColor = (selectedDino) => {
  if (selectedDino.health === 0) {
    return 'danger';
  } else if (selectedDino.health <= 70) {
    return 'warning';
  } else if (selectedDino.health <= 100) {
    return 'success';
  }
};

const dinoActions = (action, id, dinoObject) => {
  if (action === 'feed' || action === 'adventure' || action === 'pet') {
    const preActionHealth = dinoObject.health;
    calcHealth(action, dinoObject);
    updateHealthBar(dinoObject);
    healthBarColor(dinoObject);
    moveDino(dinoObject, preActionHealth);
  } else if (action === 'delete') {
    deleteDino(id);
  }
};

export { createDinoCards, dinoActions };
