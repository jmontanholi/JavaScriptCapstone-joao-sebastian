import getItem from './request.js';

const modalDiv = document.getElementById('modalDiv');

const createModal = async (id) => {
  modalDiv.classList.remove('my-modal-none');
  modalDiv.classList.add('my-modal');

  const foodObject = await getItem(id);
  const image = foodObject.strMealThumb;
  const foodName = foodObject.strMeal;
  const ingredients = [];
  for (let i = 1; i < 20; i += 1) {
    if (foodObject[`strIngredient${i}`] !== null && foodObject[`strIngredient${i}`] !== '') {
      ingredients.push(foodObject[`strIngredient${i}`]);
    }
  }

  const modalContent = document.createElement('div');
  modalContent.classList.add('my-modal-content');
  modalDiv.appendChild(modalContent);

  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('id', 'id-close');
  closeBtn.classList.add('fas', 'fa-times', 'closeBtn');
  modalContent.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    modalDiv.classList.add('my-modal-none');
    modalDiv.classList.remove('my-modal');
    modalDiv.innerHTML = '';
  });

  const modalImgDiv = document.createElement('div');
  modalImgDiv.classList.add('modal-img-div');
  modalContent.appendChild(modalImgDiv);

  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('alt', foodName);
  img.classList.add('modal-img');
  modalImgDiv.appendChild(img);

  const foodNameDiv = document.createElement('div');
  foodNameDiv.classList.add('food-name-div');
  modalImgDiv.appendChild(foodNameDiv);

  const foodTitle = document.createElement('h2');
  foodTitle.classList.add('roboto-font');
  foodTitle.classList.add('food-title');
  foodTitle.innerHTML = foodName;
  foodNameDiv.appendChild(foodTitle);

  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal-details');
  modalContent.appendChild(modalDetails);

  const modalIngredientsDiv = document.createElement('div');
  modalIngredientsDiv.classList.add('modal-ingredients-div');
  modalDetails.appendChild(modalIngredientsDiv);

  const ingredientsTitle = document.createElement('h4');
  ingredientsTitle.classList.add('ingredients-title', 'roboto-font');
  ingredientsTitle.innerText = 'Main Ingredients';
  modalIngredientsDiv.appendChild(ingredientsTitle);

  const modalIngredients = document.createElement('div');
  modalIngredients.classList.add('modal-ingredients');
  modalIngredientsDiv.appendChild(modalIngredients);

  for (let i = 0; i < ingredients.length; i += 1) {
    const ingredientItem = document.createElement('p');
    ingredientItem.classList.add('ingredients-item');
    ingredientItem.innerText = ingredients[i];
    modalIngredients.appendChild(ingredientItem);
  }

  const modalCommentsDiv = document.createElement('div');
  modalCommentsDiv.classList.add('modal-comment-list-div');
  modalDetails.appendChild(modalCommentsDiv);

  const commentTitle = document.createElement('h4');
  commentTitle.classList.add('roboto-font');
  commentTitle.innerText = 'Comments';
  modalCommentsDiv.appendChild(commentTitle);

  const modalCommentList = document.createElement('div');
  modalCommentList.classList.add('modal-comment-list');
  modalCommentList.innerHTML = `<p class="comments">João: This is great</p>
  <p class="comments">Marcia: Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere.</p>
  <p class="comments">Pedro: Where do I buy the last ingredient?</p>
  <p class="comments">Lorem: ipsum</p>
  <p class="comments">João: This is great</p>
  <p class="comments">Marcia: Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere.</p>
  <p class="comments">Pedro: Where do I buy the last ingredient?</p>
  <p class="comments">Lorem: ipsum</p>
  <p class="comments">João: This is great</p>
  <p class="comments">Marcia: Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere.</p>
  <p class="comments">Pedro: Where do I buy the last ingredient?</p>
  <p class="comments">Lorem: ipsum</p>`;
  modalCommentsDiv.append(modalCommentList);

  const modalCommentForm = document.createElement('div');
  modalCommentForm.classList.add('modal-comment');
  modalContent.appendChild(modalCommentForm);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'userName');
  nameInput.setAttribute('id', 'userName');
  nameInput.setAttribute('placeholder', 'Your name');
  nameInput.classList.add('comment-input');
  modalCommentForm.appendChild(nameInput);

  const commentInput = document.createElement('input');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('name', 'comment');
  commentInput.setAttribute('id', 'comment');
  commentInput.setAttribute('placeholder', 'Your comment');
  commentInput.classList.add('comment-input');
  modalCommentForm.appendChild(commentInput);

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.classList.add('submit-btn');
  modalCommentForm.appendChild(submitBtn);
};

export { createModal as default };
