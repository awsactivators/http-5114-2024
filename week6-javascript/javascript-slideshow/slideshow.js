var currentImage = 0;
var total = 4;

function nextButton() {
  currentImage++;

  // if the current variable is greater than the number of slides, reset to zero
  if (currentImage >= total){
    currentImage = 0;
  }

  //create a reference to all slide divs
  var slides = document.getElementsByClassName("slide");

  //loop through all the slides
  for (var i = 0; i<slides.length; i++){
      slides[i].style.display = "none";
    }

    // image to display
    slides[currentImage].style.display = "block";
  }

  function prevButton() {
    currentImage--;
  
    // if the current variable is greater than the number of slides, reset to zero
    if (currentImage < 0){
      currentImage = total - 1;
    }
  
    //create a reference to all slide divs
    var slides = document.getElementsByClassName("slide");
  
    //loop through all the slides
    for (var i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
      }
  
      // image to display
      slides[currentImage].style.display = "block";
    }
  
