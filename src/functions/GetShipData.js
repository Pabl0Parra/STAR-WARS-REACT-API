import axios from "axios";

const getShipData = async (URL, set) => {
  const res = await axios.get(URL);
  const result = await res.data;

  return result;
};

export default getShipData;
