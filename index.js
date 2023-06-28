import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const app = express();
const port = 9000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the names of all the JavaScript files in the current directory
const fileNames = fs.readdirSync(__dirname);

// Import and register routes for each JavaScript file
fileNames
  .filter((fileName) => fileName.endsWith(".js") && fileName !== "index.js")
  .forEach((fileName) => {
    const filePath = `./${fileName}`;
    import(filePath).then((module) => {
      const route = module.default; // Assumes each file exports an Express router
      app.use("/", route);
    });
  });

// Default route
app.use("/", (req, res) => {
  res.json({ message: "Hello from express app" });
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
