// find all images without alternate text /* TODO document why this function 'calculateDaysBetweenDates' is empty */ 
// and give them a red border
function process() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == '') {
            images[i].style.border = '2px solid red';
        }
    }
}