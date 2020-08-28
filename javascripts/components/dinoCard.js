import { getDinos, getSelectedDino } from '../helpers/data/dinoData.js';

const createDinoCards = dinoArray => {
  const newestDino = dinoArray[dinoArray.length - 1];
  $('#dinoKennel').append(`
        <div class="card m-3" id=${newestDino.id} style="width: 16rem; ">
          <img class="card-img-top" src=https://i.pinimg.com/originals/60/72/b9/6072b96192d18a2167afeb64371e769f.jpg alt="Card image cap">
          <div class="card-body" >
            <h5 class="card-title text-center"> ${newestDino.name}</h5>
          </div>
          <div class = "container mb-3" style = "width: 75%">
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=${newestDino.id}>Feed</button>
              <button type="button" class="btn btn-danger m-1" id=${newestDino.id}>Adventure</button>
            </div>
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=${newestDino.id}>Pet</button>
              <button type="button" class="btn btn-danger m-1" id=${newestDino.id}>Delete</button>
            </div>
          </div>
        </div>
      `);
};

const deleteDino = () => {
  $('#dinoLocation').on('click', e => {
    const target = e.target.id;
    if (e.target.innerHTML === 'Delete') {
      $(`#${target}`).remove();
    }
  });
};

const feedDino = () => {
  $('#dinoLocation').on('click', e => {
    const target = parseInt(e.target.id, 10);
    if (e.target.innerHTML === 'Feed') {
      console.log(getSelectedDino(target).health);
    }
  });
};

const dinoActions = () => {
  deleteDino();
  feedDino();
};

export { createDinoCards, dinoActions };
