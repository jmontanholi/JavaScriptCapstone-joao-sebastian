const displayCount = async (count) => {
  const navLink = document.getElementById('navLink');

  if (count === null || count === undefined) {
    navLink.innerText = 'No recipes available)';
    return 0;
  }
  navLink.innerText = `All recipes (${count})`;
  return count;
};

export default displayCount;