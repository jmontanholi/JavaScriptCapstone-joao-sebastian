/**
 * @jest-environment jsdom
 */
import displayCount from '../itemscount.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        item_id: 53049,
        likes: 4,
      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('Counts all items', async () => {
  document.body.innerHTML = '<div id="navLink"></div>';
  const object = [{
    item_id: 53049,
    likes: 4,
  }];
  const objectLength = object.length;
  const itemsCountTest = await displayCount(objectLength);
  expect(itemsCountTest).toEqual(1);
});

test('Counts more than 1 item', async () => {
  document.body.innerHTML = '<div id="navLink"></div>';
  const object = [
    {
      strMeal: 'Apam balik',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
      idMeal: '53049',
    },
    {
      strMeal: 'Apple & Blackberry Crumble',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
      idMeal: '52893',
    },
    {
      strMeal: 'Apple Frangipan Tart',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
      idMeal: '52768',
    },
    {
      strMeal: 'Bakewell tart',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
      idMeal: '52767',
    },
    {
      strMeal: 'Banana Pancakes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
      idMeal: '52855',
    },
    {
      strMeal: 'Battenberg Cake',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg',
      idMeal: '52894',
    },
    {
      strMeal: 'BeaverTails',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
      idMeal: '52928',
    },
    {
      strMeal: 'Blackberry Fool',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
      idMeal: '52891',
    },
    {
      strMeal: 'Bread and Butter Pudding',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg',
      idMeal: '52792',
    },
    {
      strMeal: 'Budino Di Ricotta',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1549542877.jpg',
      idMeal: '52961',
    },
    {
      strMeal: 'Canadian Butter Tarts',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
      idMeal: '52923',
    },
    {
      strMeal: 'Carrot Cake',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
      idMeal: '52897',
    }];
  const objectLength = object.length;
  const itemsCountTest = await displayCount(objectLength);
  expect(itemsCountTest).toEqual(12);
});

test('Counts all items', async () => {
  document.body.innerHTML = '<div id="navLink"></div>';
  const object = null;
  const itemsCountTest = await displayCount(object);
  expect(itemsCountTest).toEqual(0);
});
