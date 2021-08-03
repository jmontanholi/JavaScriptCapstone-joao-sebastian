import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createModal from './modalCreation.js';
import populateList from './homepage.js';

const commentBtnEvent = async () => {
  await populateList();
  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((e) => {
    e.addEventListener('click', () => {
      createModal(e.id);
    });
  });
};

commentBtnEvent();
