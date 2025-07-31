const fs = require('fs');

function readFileAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile("abhi.text", "utf8", (err, data) => {
            if (err) {
                reject("file not found");
            } else {
                resolve(data);
            }
        });
    });

}

readFileAsync()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });