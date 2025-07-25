const fs = require("fs");

fs.readFile("grocery.txt", "utf-8", function(err, data) {
  if (err) {
    console.log("File not found!");
  } else {
    console.log(data); 
  }
});
