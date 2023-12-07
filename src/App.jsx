import React, { useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  const getDadJoke = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/dadjoke");
      setJoke(response.data.joke);
    } catch (error) {
      console.error("Error fetching dad joke:", error);
    }
  };

  return (
    <div>
      <h1>Dad Joke App</h1>
      <p>{joke}</p>
      <button onClick={getDadJoke}>PRESS ME FOR GOOD PHUN</button>
    </div>
  );
}

export default App;
