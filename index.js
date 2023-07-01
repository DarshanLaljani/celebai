import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import celebs from "./controllers/celebs.js";

const app = express();
const Port = process.env.PORT || 9000;
import bodyParser from "body-parser";
import cors from 'cors';
import { OpenAIApi } from "openai";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(cors());

// Read the names of all the JavaScript files in the current directory
let fileNames = fs.readdirSync(path.join(__dirname, "static"));

// Import and register routes for each JavaScript file
fileNames = fileNames
  .filter((fileName) => fileName.endsWith(".html"))

app.get("/:name", (req, res) => {
  const name = req.params.name;
  if (name in fileNames) return res.sendFile(path.join(__dirname, "static", name + ".html"));
  return res.status(404).sendFile(path.join(__dirname, "static", "404.html"));
});

app.post("/:name", (req, res) => {
  const name = req.params.name;
  if (name in celebs) return celebs[name](req, res)
  return res.status(404).sendFile(path.join(__dirname, "static", "404.html"));
})

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.use((req, res, next) =>
  res.sendFile(path.join(__dirname, "static", "404.html")));

app.listen(Port, () => {
  console.log(`Starting server on port ${Port}`);
});

export default app;