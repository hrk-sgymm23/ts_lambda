import axios from "axios";
import { resultData } from "../types";

const API_URL = "http://api.football-data.org/v4/competitions/PL";
const API_TOKEN = "ddbb1b8392ef4e3e8d5a2c58751bcc98"; // あなたのAPIトークン

export const fetchPremierLeagueData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "X-Auth-Token": API_TOKEN,
        },
      });
      console.log("Response Data:", response.data);
      const responseData: resultData = {
          status: response.status,
          data: response.data,
      }
    return responseData
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching data:", error.response?.status, error.message);
        return "error";
      } else {
        console.error("Unexpected Error:", error);
        return "error";
      }
    }
  };