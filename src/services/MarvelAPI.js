import axios from "axios";
import md5 from "md5";

let ts = Date.now;
let hash = md5(
  ts + process.env.RAZZLE_MARVEL_PRIVATE + process.env.RAZZLE_MARVEL_PUBLIC
);

const AxiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  headers: { Accept: "application/json" },
  params: {
    apikey: process.env.RAZZLE_MARVEL_PUBLIC,
    ts: ts,
    hash: hash,
    limit: 20,
    offset: 100
  }
});

class MarvelAPI {
  static getEntity(entity, config) {
    return AxiosInstance.get("/" + entity, config);
  }
}
export default MarvelAPI;