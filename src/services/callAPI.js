import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "localhost:3000/api",
    headers: { 
      "Accept": "application/json", 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": 'true'
    }
  });
  
  class callAPI {
    static getEntity(entity, config) {
      return AxiosInstance.get("/" + entity, config);
    }
    static postEntity(entity, data, config) {
        return AxiosInstance.post("/" + entity, data, config);
    }
  }
  export default callAPI;