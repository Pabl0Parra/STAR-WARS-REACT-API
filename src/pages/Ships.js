import { useState, useEffect } from "react";
import axios from "axios";
import ShipsList from "../components/ShipsList";
import fetchShips from "../functions/FetchShips";
import Button from "../components/Button";
import { URL } from "../variables/URL";

const Ships = ({ changeShip, changeId }) => {
  const [ships, setShips] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getShipsData = async () => {
      const res = await fetchShips(URL);
      setShips(res.results);
      setPage(res.next);
    };
    getShipsData();

    return () => {
      source.cancel();
    };
  }, []); // [] so that it only makes the request once (at the start of the app)

  const handleAddShips = async () => {
    if (page) {
      const res = await fetchShips(page);
      setShips([...ships, ...res.results]);
      setPage(res.next);
    }
  };
  return (
    <>
      <ShipsList ships={ships} changeShip={changeShip} changeId={changeId} />
      <Button open={handleAddShips} text={"view more"} />
    </>
  );
};

export default Ships;
