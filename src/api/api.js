import axios from "axios";

// const { API_POINT } = process.env;
const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=8`;

const api = async () => {
  return await axios
    .get(url, {
      headers: {
        "x-api-key": "o-VDgJ98fX1WqNced2OAYqngR9Vaopb0R1DH_r03-Qs",
      },
    })
    .then((response) => response);
};

export default api;
