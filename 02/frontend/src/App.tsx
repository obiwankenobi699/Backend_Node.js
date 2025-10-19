import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Define a type for the joke
type DadJoke = {
  id: number;
  title: string;
  joke: string;
};

function App() {
  const [jokes, setJokes] = useState<DadJoke[]>([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get<DadJoke[]>("/api/jokes", {
          headers: { Accept: "application/json" },
        });
        setJokes(response.data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []); // empty dependency array = runs once

  return (
    <div className="App">
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
