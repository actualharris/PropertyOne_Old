import express from "express";
import cors from "cors";
import db from "./pg.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //req.body

await db.connect();

app.get("/api/images", async (req, res) => {
  try {
    const allImages = await db.query("SELECT * FROM images ORDER BY id DESC");
    res.json(allImages.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});






// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
