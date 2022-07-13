const handleSelectedShip = (event, results, setSelectedShip, setIdShip) => {
  if (event.target.classList.contains("list_item")) {
    const filteredShip = results.filter((item) => {
      return item.name === event.target.firstChild.textContent;
    });
    setSelectedShip(...filteredShip);
    const id = filteredShip[0].url.match(/[0-9]+/);
    setIdShip(id[0]);
  }
};

export default handleSelectedShip;
