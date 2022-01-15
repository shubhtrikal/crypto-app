import axios from "axios";

const URL = "https://coinranking1.p.rapidapi.com/coins";
const options = {
  method: "GET",
  url: URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    tiers: "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "804c84f800mshcd7aca6f0451c67p193ac0jsnba35d9fb30a8",
  },
};

const CoinData = async () => {
  try {
    const resoponse = await axios.get(URL, options);
    // console.log(resoponse.data);
    return resoponse.data.data.coins;
  } catch (error) {
    console.log(error);
  }
};

export default CoinData;
