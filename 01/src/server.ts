import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv'
dotenv.config()
const app = express();

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); // only views folder

// Sample data
const info = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" }
  ]
};

// Routes
app.get("/", (req, res) => {
  res.render("index"); // renders src/views/index.ejs
});

app.get("/info", (_req, res) => {
  res.json(info) // renders src/views/info.ejs
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
