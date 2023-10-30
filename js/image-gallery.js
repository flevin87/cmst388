// declaring the function which resets borders of all thumbnails
function resetBorders() {
    //Loop through all 5 images by their IDs
    for (let i = 1; i <= 5; i++) {
        // Set the border image of the thumbnails to none - effectively removing them
        document.getElementById(`img${i}`).style.border = "none";
    }
}

// The following function handles actions when a thumbnail is clicked
function thumbnailClick(imgId) {
    // Gets the clicked image element based on its ID
    const imgElement = document.getElementById(imgId);

    /* Call and execute the function to reset thumbnail image borders - helpful for when we're changing images*/
    resetBorders();

    // Apply a new border only to the clicked thumbnail
    imgElement.style.border = "1px #9D9C9C solid";

    // Update the source of the main/large image to match the clicked thumbnail
    document.getElementById('largeImage').src = imgElement.src;
}

// Start a loop to add event listeners
for (let i = 1; i <= 5; i++) {

    // Fetch the image element for the current iteration
    const imgElement = document.getElementById(`img${i}`);

    // Add a mouseover event listener then declare the function
    imgElement.addEventListener('mouseover', function () {

        /*When the image is hovered over, update the paragraph text which holds the caption id to that image's alt text */
        document.getElementById('caption').innerText = imgElement.alt;
    });

    // Add a click event listener and declare its function
    imgElement.addEventListener('click', function () {

        //When the image is clicked, execute the function which handles this click
        thumbnailClick(`img${i}`)
    });
}