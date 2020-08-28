import { showDinoForm } from './components/navigation.js';
import { dinoActions } from './components/dinoCard.js';

const init = () => {
  showDinoForm();
  dinoActions();
};

init();
