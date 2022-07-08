import axios from "axios";

const getShipData = async (URL, set) => {
  const res = await axios.get(URL);
  const result = await res.data;
  set(result);
};

export default getShipData;
