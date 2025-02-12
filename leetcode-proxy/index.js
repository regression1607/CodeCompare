const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cheerio = require("cheerio");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/leetcode", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.post("https://leetcode.com/graphql", {
      query: `
        query userProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              realName
              ranking
              userAvatar
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username },
    });

    res.json(response.data.data.matchedUser);
  } catch (error) {
    console.error("Error fetching LeetCode data:", error.message);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

app.post("/hackerrank", async (req, res) => {
    const { username } = req.body;
  
    try {
      const response = await axios.get(`https://www.hackerrank.com/${username}`);
      const $ = cheerio.load(response.data);
  
      // Scrape necessary data from the profile page
      const profile = {
        username,
        realName: $(".hrm-profile-header-title").text().trim(),
        rank: $(".hrm-profile-header-subtitle").text().trim(),
        avatar: $(".hrm-profile-header-image").attr("src"),
      };
  
      // You can add more data here based on the HTML structure of the HackerRank profile
  
      res.json(profile);
    } catch (error) {
      console.error("Error fetching HackerRank data:", error.message);
      res.status(500).json({ error: "Failed to fetch HackerRank data" });
    }
  });

// New route for GeeksforGeeks
app.post("/geeksforgeeks", async (req, res) => {
    const { username } = req.body;
  
    try {
      const response = await axios.get(`https://auth.geeksforgeeks.org/user/${username}`);
      const $ = cheerio.load(response.data);
  
      // Scrape necessary data from the profile page
      const profile = {
        username,
        realName: $("h1").text().trim(),
        rank: $(".profile-rank").text().trim(),
        avatar: $(".profile-pic").attr("src"),
      };
  
      res.json(profile);
    } catch (error) {
      console.error("Error fetching GeeksforGeeks data:", error.message);
      res.status(500).json({ error: "Failed to fetch GeeksforGeeks data" });
    }
  });
  

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
