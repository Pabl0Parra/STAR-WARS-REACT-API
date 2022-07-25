import { useState, useEffect } from "react";
import { URL } from "../variables/URL";
import axios from "axios";
import ShipsList from "../components/ShipsList";
import FetchShips from "../functions/FetchShips";
import Button from "../components/Button";

import "../styles/Ships.css";

const Ships = ({ changeShip, changeId }) => {
  const [ships, setShips] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const GetShipsData = async () => {
      const res = await FetchShips(URL);
      setShips(res.results);
      setPage(res.next);
    };
    GetShipsData();

    return () => {
      source.cancel();
    };
  }, []); // [] so that it only makes the request once (at the start of the app)

  const handleAddShips = async () => {
    if (page) {
      const res = await FetchShips(page);
      setShips([...ships, ...res.results]);
      setPage(res.next);
    }
  };
  return (
    <>
      <ShipsList ships={ships} changeShip={changeShip} changeId={changeId} />
      <Button open={handleAddShips} text={"VIEW MORE"} name={"view_button"} />
    </>
  );
};

export default Ships;
