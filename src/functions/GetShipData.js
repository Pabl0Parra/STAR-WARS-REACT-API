import axios from "axios";

const getShipData = async (URL, _set) => {
  const res = await axios.get(URL);
  return res.data;
};

export default getShipData;
