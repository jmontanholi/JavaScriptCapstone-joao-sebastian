const displayCount = async (element, count) => {
  if (count === null || count === undefined) {
    element.innerText = `${element.id} 0`;
  }
  element.innerText = `${element.id} ${count}`;
  return count;
};

export default displayCount;