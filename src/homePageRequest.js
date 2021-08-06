const getCategory = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed.meals;
};

const createList = async (category) => {
  const list = [];
  const result = await getCategory(category);
  if (result.length > 12) {
    for (let i = 0; i < 12; i += 1) {
      list.push(result[i]);
    }
  } else {
    for (let i = 0; i < result.length; i += 1) {
      list.push(result[i]);
    }
  }
  return list;
};

export default createList;
