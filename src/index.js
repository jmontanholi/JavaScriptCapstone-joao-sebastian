import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createModal from './modalCreation.js';

const commentBtns = document.getElementsByClassName('commentBtn');
for (let i = 0; i < commentBtns.length; i += 1) {
  commentBtns[i].addEventListener('click', () => {
    createModal(commentBtns[i].id);
  });
}
