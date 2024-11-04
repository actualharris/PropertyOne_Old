import express from "express";
import cors from "cors";
import db from "./pg.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //req.body







// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
