const createDinoCards = dinoArray => {
  const newestDino = dinoArray[dinoArray.length - 1];
  $('#dinoKennel').append(`<div class="card" style="width: 16rem;">
      <img class="card-img-top" src=https://i.pinimg.com/originals/60/72/b9/6072b96192d18a2167afeb64371e769f.jpg alt="Card image cap">
      <div class="card-body" >
        <h5 class="card-title text-center"  > ${newestDino.name}</h5>
      </div>
    </div>
      `);
};

export { createDinoCards };
