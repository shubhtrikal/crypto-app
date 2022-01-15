import axios from "axios";

const PriceHistory = async (id) => {
  // const id = "Qwsogvtv82FCd";
  const URL = `https://coinranking1.p.rapidapi.com/coin/${id}/history`;
  // console.log(URL);
  const options = {
    method: "GET",
    url: URL,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "804c84f800mshcd7aca6f0451c67p193ac0jsnba35d9fb30a8",
    },
  };
  try {
    const response = await axios.get(URL, options);
    // console.log(response);
    return response.data.data.history;
  } catch (error) {
    console.log(error);
  }
};

export default PriceHistory;
