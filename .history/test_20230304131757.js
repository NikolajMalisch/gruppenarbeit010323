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