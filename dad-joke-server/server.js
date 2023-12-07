const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());
// Middleware to set response headers
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Route to fetch and return a dad joke
app.get("/api/dadjoke", async (req, res) => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const jokeData = await response.json();
    res.json({ joke: jokeData.joke });
  } catch (error) {
    console.error("Error fetching dad joke:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
