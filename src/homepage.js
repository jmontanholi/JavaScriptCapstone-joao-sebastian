import createList from './homePageRequest.js';

const footer = document.getElementById('footer');
const listContainer = document.getElementById('homepageList');
const APIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8Ya3HGGvBBaT8zGxBGx/likes';

const getLikes = async (id) => {
  const likesList = await fetch(APIUrl);
  const likesObject = await likesList.json();
  for (let j = 0; j < likesObject.length; j += 1) {
    if (likesObject[j].item_id === Number(id)) {
      return likesObject[j].likes;
    }
  }
  return 0;
};

const addLikes = async () => {
  const likeBtn = document.querySelectorAll('.likeBtn');
  likeBtn.forEach((e) => {
    e.addEventListener('click', async () => {
      await fetch(APIUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: Number(e.id),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newLikesP = document.getElementById(e.id);
      getLikes(e.id).then((likesCount) => {
        newLikesP.innerHTML = `${likesCount} likes <a class="likeBtn" id="${e.id}"><i class="far fa-grin-hearts fs-4 like-icon-clicked"></i></a>`;
      });
    });
  });
};

const populateList = async (category) => {
  const itemList = await createList(category);
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i].strMealThumb !== undefined && itemList[i].strMealThumb !== null) {
      const listDiv = document.createElement('div');
      listDiv.classList.add('card', 'col-sm-3', 'creation');
      listContainer.appendChild(listDiv);
      const listImg = document.createElement('img');
      listImg.setAttribute('src', itemList[i].strMealThumb);
      listImg.classList.add('card-img-top', 'pt-2');
      listDiv.appendChild(listImg);
      const listInnerDiv = document.createElement('div');
      listInnerDiv.classList.add('card-body', 'mb-3', 'd-flex', 'flex-column', 'justify-content-between');
      listDiv.appendChild(listInnerDiv);
      const listH5 = document.createElement('h5');
      listH5.classList.add('card-title');
      listH5.innerText = itemList[i].strMeal;
      listInnerDiv.appendChild(listH5);
      const listP = document.createElement('p');
      listP.setAttribute('id', itemList[i].idMeal);
      // eslint-disable-next-line no-await-in-loop
      await getLikes(itemList[i].idMeal).then((likesCount) => {
        listP.innerHTML = `${likesCount} likes <a class="likeBtn" id="${itemList[i].idMeal}"><i class="far fa-grin-hearts fs-4 like-icon transition-all"></i></a>`;
      });
      listP.classList.add('card-text');
      listInnerDiv.appendChild(listP);
      const listBtn = document.createElement('a');
      listBtn.classList.add('commentBtn');
      listBtn.setAttribute('id', itemList[i].idMeal);
      listBtn.innerText = 'Comment';
      listInnerDiv.appendChild(listBtn);
    }
  }
  footer.classList.remove('d-none');
  footer.classList.add('d-md-flex');
  addLikes();
};

export default populateList;