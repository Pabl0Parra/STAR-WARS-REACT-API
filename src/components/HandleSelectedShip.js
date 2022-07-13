const handleSelectedShip = (event, results, setSelectedShip, setIdShip) => {
  const filterShip = results.filter(
    (item) => item.name === event.target.firstChild.textContent
  );
  setSelectedShip(...filterShip);
  const id = filterShip[0].url.match(/[0-9]+/);
  setIdShip(id[0]);
};

export default handleSelectedShip;
