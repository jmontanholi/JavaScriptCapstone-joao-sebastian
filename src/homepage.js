import createList from './requests.js';

const listContainer = document.getElementById('homepageList');

const populateList = async () => {
  const itemList = await createList();
  for (let i = 0; i < itemList.length; i += 1) {
    const listDiv = document.createElement('div');
    listDiv.classList.add('card', 'col-sm-3');
    listContainer.appendChild(listDiv);
    const listImg = document.createElement('img');
    listImg.setAttribute('src', itemList[i].strMealThumb);
    listImg.classList.add('card-img-top', 'pt-2');
    listDiv.appendChild(listImg);
    const listInnerDiv = document.createElement('div');
    listInnerDiv.classList.add('card-body');
    listDiv.appendChild(listInnerDiv);
    const listH5 = document.createElement('h5');
    listH5.classList.add('card-title');
    listH5.innerText = itemList[i].strMeal;
    listInnerDiv.appendChild(listH5);
    const listP = document.createElement('p');
    listP.innerText = '3 likes';
    listP.classList.add('card-text');
    listInnerDiv.appendChild(listP);
    const listBtn = document.createElement('a');
    listBtn.classList.add('btn', 'btn-secondary', 'commentBtn');
    listBtn.setAttribute('id', itemList[i].idMeal);
    listBtn.setAttribute('href', '#');
    listBtn.innerText = 'Comment';
    listInnerDiv.appendChild(listBtn);
  }
};

export default populateList;