import express from "express";
import { DataBase } from "./db/db.js";
import { router } from "./routes/router.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(router);

DataBase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`your app is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });
