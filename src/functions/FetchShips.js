import GetShipData from "./GetShipData";

const URL = "https://swapi.dev/api/starships/";

const FetchShips = async () => await GetShipData(URL);

export default FetchShips;
