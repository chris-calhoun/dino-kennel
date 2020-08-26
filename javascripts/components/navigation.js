import { makeDinoForm, addNewDino } from './formAddDino.js';

const showDinoForm = () => {
  $('#btnShowForm').on('click', () => {
    makeDinoForm();
    addNewDino();
  });
};

export { showDinoForm };
