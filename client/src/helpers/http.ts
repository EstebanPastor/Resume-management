import axios from "axios";

import { BASE_URL } from "../constants/url";

const httpModule = axios.create({
  baseURL: BASE_URL,
});

export default httpModule;
