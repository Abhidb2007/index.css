const fs = require("fs");

function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // Split the text by whitespace and filter out empty strings
    const words = data.trim().split(/\s+/).filter(Boolean);
    console.log(words.length);
  });
}

main("a.text");