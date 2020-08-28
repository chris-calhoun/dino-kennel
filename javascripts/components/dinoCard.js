import { getSelectedDino } from '../helpers/data/dinoData.js';

const createDinoCards = dinoArray => {
  const newestDino = dinoArray[dinoArray.length - 1];
  $('#dinoKennel').append(`
        <div class="card m-3" id=card${newestDino.id} style="width: 16rem; ">
          <img class="card-img-top" src=https://i.pinimg.com/originals/60/72/b9/6072b96192d18a2167afeb64371e769f.jpg alt="Card image cap">
          <div class="card-body" >
            <h5 class="card-title text-center"> ${newestDino.name}</h5>
          </div>
          <div class = "container mb-3" style = "width: 75%">
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=feed${newestDino.id}>Feed</button>
              <button type="button" class="btn btn-danger m-1" id=adventure${newestDino.id}>Adventure</button>
            </div>
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-danger m-1" id=pet${newestDino.id}>Pet</button>
              <button type="button" class="btn btn-danger m-1" id=delete${newestDino.id}>Delete</button>
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

const feedDino = () => {
  $('#dinoLocation').on('click', e => {
    const target = e.target.id;
    const id = target.slice(4, target.length);
    console.log(typeof id);
    const idToNum = parseInt(id, 10);
    console.log(typeof idToNum, idToNum);
    if (target.includes('feed')) {
      // getSelectedDino(idToNum).health + 25;
      console.log(getSelectedDino(idToNum).health + 25);
    }
  });
};

const dinoActions = () => {
  deleteDino();
  feedDino();
};

export { createDinoCards, dinoActions };
