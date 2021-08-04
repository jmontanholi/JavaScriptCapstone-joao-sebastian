const displayCount = async (count) => {
    const navLink = document.getElementById('navLink');
    navLink.innerText = `All recipes (${count})`;
    return count;
  };

  export default displayCount;