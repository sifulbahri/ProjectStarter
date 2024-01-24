/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Get the element with the id "image"
    var imageDiv = document.getElementById('image');
    
    // Log information for debugging
    console.log("Mouseover event triggered!");
    console.log("Alt text of previewPic: " + previewPic.alt);
    console.log("Source of previewPic: " + previewPic.src);

    // Change the background image URL to the source file of the preview image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text of the div to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Get the element with the id "image"
    var imageDiv = document.getElementById('image');
    
    // Restore the original background image URL using CSS
    imageDiv.style.backgroundImage = "url('original-image-url')";
    
    // Restore the original text using HTML
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabindexAttributes() {
    console.log("Page loaded. Adding tabindex attributes.");

    var images = document.querySelectorAll('img');

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', i + 1);
    }
}