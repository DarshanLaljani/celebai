
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const app = express();
const port = 9000;
import bodyParser from "body-parser";
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the names of all the JavaScript files in the current directory
let fileNames = fs.readdirSync(path.join(__dirname,"static"));

// Import and register routes for each JavaScript file
fileNames = fileNames
  .filter((fileName) => fileName.endsWith(".js") && fileName !== "index.js")

  console.log(fileNames);
 app.use(express.json()); 
app.use(express.static(path.join(__dirname,"static")));
// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"static","index.html"));
});
app.use((req, res,next) =>
res.sendFile(path.join(__dirname,"static","404.html")));
app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
