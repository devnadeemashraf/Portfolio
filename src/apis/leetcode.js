import axios from "axios";

import config from "~/src/config";

const BASE_URL = config["leetcode"]["api"]["baseURL"];

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
