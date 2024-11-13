import axios from "axios";

import config from "../config";

const BASE_URL = config.apis.leetcode.baseURL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
