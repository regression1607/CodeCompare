import axios from "axios";

export const fetchLeetCodeUser = async (username) => {
  try {
    const response = await axios.post("http://localhost:5000/leetcode", { username });
    return response.data;
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return null;
  }
};
