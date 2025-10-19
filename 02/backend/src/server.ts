import express from "express";                 // Web framework
import path from "path";                       // Node module for file paths
import { fileURLToPath } from "url";          // Convert URL to file path (ESM)
import dotenv from "dotenv";      
import cors  from "cors"            // Load .env

dotenv.config();                               // Reads .env and sets process.env

const app = express();
app.use(cors())
const Jokes = [
  {
    id: 1,
    title: "Broken Pencil",
    joke: "Why did the pencil go to the principal's office? Because it was pointless."
  },
  {
    id: 2,
    title: "Scarecrow",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
  },
  {
    id: 3,
    title: "Math Teacher",
    joke: "Why was the math book sad? Because it had too many problems."
  },
  {
    id: 4,
    title: "Elevator",
    joke: "Why don’t elevators ever get lost? They always take you to the right level."
  },
  {
    id: 5,
    title: "Time Flies",
    joke: "Why did the clock get kicked out of school? It kept tocking back."
  },
  {
    id: 6,
    title: "Chicken",
    joke: "Why did the chicken join a band? Because it had the drumsticks."
  },
  {
    id: 7,
    title: "Sleepy Vegetable",
    joke: "Why did the tomato turn red? Because it saw the salad dressing!"
  },
  {
    id: 8,
    title: "Library",
    joke: "Why did the librarian get kicked off the plane? Because it was overbooked!"
  },
  {
    id: 9,
    title: "Bicycle",
    joke: "Why can't a bicycle stand up by itself? It's two-tired."
  },
  {
    id: 10,
    title: "Cookies",
    joke: "Why did the cookie go to the doctor? Because it felt crummy."
  }
];



// Define route
app.get("/", (req, res) => {
  res.send('Hello')                         // Render index.ejs
});

app.get("/api/jokes",(req,res)=>{
  res.json(Jokes)  
})
// Get PORT from environment variable
const PORT = process.env.PORT 

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
