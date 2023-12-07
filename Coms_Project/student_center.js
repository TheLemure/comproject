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

  function displayImageWithText(imageSrc, text, newText) {
    // Get the element with the ID 'imageContainer'
    var imageContainer = document.getElementById('imageContainer');
  
    // Create a new 'img' element
    var imgElement = document.createElement('img');
  
    // Set the 'src' attribute of the image element to the provided image source
    imgElement.src = imageSrc;
  
    // Create a new 'p' (paragraph) element for the 'Green Route' text
    var textElement = document.createElement('p');
    textElement.textContent = text; // Set the text content
  
  
    // Clear the contents of the 'imageContainer' to remove any previously displayed content
    imageContainer.innerHTML = '';
  
    // Set display: inline-block for both image and text elements
    imgElement.style.display = "inline-block";
    textElement.style.display = "inline-block";
  
    // Change Style of the 'Green Route' text
    textElement.style.color = "DarkSlateBlue";
    textElement.style.fontWeight = "bold";
    textElement.style.fontSize = "20px";
    textElement.style.textDecoration = "underline";
    textElement.style.marginRight = "96px"; // 1 inch is approximately 96 pixels
  
    // Append the newly created image, 'Green Route' text, and new text elements to the 'imageContainer'
    imageContainer.appendChild(textElement);
    imageContainer.appendChild(imgElement);
  
    // Check if the image source is 'assets/student-center.png'
    if (imageSrc === 'assets/student-center.png') {
      // Set the size of the appended image for 'assets/student-center.png' (adjust these values as needed)
      imgElement.style.width = "20%";
      imgElement.style.height = "auto"; // Maintain the aspect ratio
    }
  
    // Center the appended image
    imgElement.style.margin = "0 auto";
  
    // Update the usemap attribute to the appropriate map based on the image source
    imgElement.useMap = (imageSrc === 'assets/student-center.png') ? '#defaultMap' : '';
  }
  
  // Display the "assets/student-center.png" image with 'Green Route' text and new text
  displayImageWithText('assets/student-center.png', 'All Routes');