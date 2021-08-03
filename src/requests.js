const getCategory = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed.meals;
};

const createList = async () => {
  const list = [];
  const result = await getCategory();
  for (let i = 0; i < 12; i += 1) {
    list.push(result[i]);
  }
  return list;
};

export default createList;
