import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-test.herokuapp.com/",
});

export default instance;
