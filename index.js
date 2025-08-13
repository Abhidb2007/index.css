const fs = require("fs");
const path = require("path");

function main(fileName) {
  const filePath = path.join(__dirname, fileName); // Always read from same folder as index.js

  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // Split the text by whitespace and filter out empty strings
    const words = data.trim().split(/\s+/).filter(Boolean);
    console.log("Word count:", words.length);
  });
}

// Make sure you actually have a.txt in the same folder
main("a.txt");
