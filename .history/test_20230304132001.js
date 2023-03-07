// find all images without alternate text /* TODO document why this function 'calculateDaysBetweenDates' is empty */ 
// and give them a red border
function process() {
    let images = document.getElementsByTagName('img');
    for (const element of images) {
        if (element.alt == '') {
            elementtyle.border = '2px solid red';
        }
    }
}

// Express server on port 3000  
// Path: server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Path: test.js
// find all images without alternate text /* TODO document why this function 'calculateDaysBetweenDates' is empty */
// and give them a red border

// Return the current time
function getCurrentTime() {
    return new Date();
}

// Return the current date
function getCurrentDate() {
    return new Date();
}   

// Return the current date and time

function getCurrentDateTime() {
    return new Date();
}

// Return the current date and time



