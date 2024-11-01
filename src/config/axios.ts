import axios from "axios";

export const axiosApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:1337"}/api`, withCredentials: true, headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})