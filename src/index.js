import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createModal from './modalCreation.js';

const commentBtnEvent = () => {
  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((e) => {
    e.addEventListener('click', () => {
      createModal(e.id);
    });
  });
};

commentBtnEvent();