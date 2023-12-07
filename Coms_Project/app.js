

function displayImage(imageSrc) {
  // Get the element with the ID 'imageContainer'
  var imageContainer = document.getElementById('imageContainer');

  // Create a new 'img' element
  var imgElement = document.createElement('img');

  // Set the 'src' attribute of the image element to the provided image source
  imgElement.src = imageSrc;

  // Clear the contents of the 'imageContainer' to remove any previously displayed images
  imageContainer.innerHTML = '';

  // Append the newly created image element to the 'imageContainer'
  imageContainer.appendChild(imgElement);

  // Check if the image source is the MasterMap
  if (imageSrc === 'assets/MasterMap.png') {
    // Set the size of the appended image for MasterMap (adjust these values as needed)
    imgElement.style.width = "80%";
    imgElement.style.height = "auto"; // Maintain the aspect ratio
}

// Center the appended image
imgElement.style.margin = "0 auto";

// Update the usemap attribute to the appropriate map based on the image source
imgElement.useMap = (imageSrc === 'assets/MasterMap.png') ? '#defaultMap' : '';
}

// Display the MasterMap upon loading the webpage
displayImage('assets/MasterMap.png');