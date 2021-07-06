const express = require("express");
const cors = require("cors");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const app = express();

app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
