const getItem = async (id) => {
  const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed.meals[0];
};

export { getItem as default };