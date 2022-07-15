const filteredShips = (e, arr) =>
  arr.filter((item) => item.name === e.target.firstChild.textContent);

export default filteredShips;
