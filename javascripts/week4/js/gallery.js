        /*Name this external file gallery.js*/

        function upDate(previewPic) {
            /* In this function you should 
            1) Change the URL for the background image of the div with the id = "image" 
            to the source file of the preview image

            2) Change the text  of the div with the id = "image" 
            to the alt text of the preview image 
            */

            var imageDiv = document.getElementById('image');
            imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')';
            imageDiv.innerHTML = previewPic.alt;
        }

        function unDo() {
            /* In this function you should 
            1) Update the URL for the background image of the div with the id = "image" 
            back to the original image. You can use the CSS code to see what that original URL was

            2) Change the text  of the div with the id = "image" 
            back to the original text. You can use the HTML code to see what that original text was
            */

            var imageDiv = document.getElementById('image');
            imageDiv.style.backgroundImage = 'url("")';
            imageDiv.innerHTML = 'Hover over an image below to display here.';
        }

        function onFocus(element) {
            /* This function will be called when the image gains focus */
            var imageDiv = document.getElementById('image');
            imageDiv.innerHTML = 'Image is in focus';
        }

        function onBlur(element) {
            /* This function will be called when the image loses focus */
            var imageDiv = document.getElementById('image');
            imageDiv.innerHTML = 'Hover over an image below to display here.';
        }

        function addTabIndex() {
            /* This function adds tabindex attributes to all images */
            var images = document.getElementsByClassName('preview');
            for (var i = 0; i < images.length; i++) {
                images[i].setAttribute('tabindex', i + 1);
            }
            console.log('Tabindex attributes added.');
        }

        window.onload = addTabIndex;