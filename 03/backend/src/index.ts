import { error } from "console";
import connectDB from "./db/db.ts";
import dotenv from "dotenv";
import { app } from "./app.ts";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost${process.env.PORT}`);
    });
  })
  .catch((error) => {
    error;
  });
