import axios from "axios";
import app from "@/main";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const createApiClient = (baseURL, withAuthToken = false, config) => {
  if (config) {
    commonConfig.headers["Content-Type"] = config;
  }
  const api = axios.create({
    baseURL,
    ...commonConfig,
  });
  return api;
};
