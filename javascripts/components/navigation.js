import { makeDinoForm, addNewDino } from './dinoForm.js';

const showDinoForm = () => {
  $('#btnShowForm').on('click', () => {
    makeDinoForm();
    addNewDino();
  });
};

export { showDinoForm };
