import Tokendata from "./Tokendata";
const Config = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  token: Tokendata && Tokendata.UserData.token,
  REACT_APP_API_KEY : process.env.REACT_APP_API_KEY,
};
export default Config;