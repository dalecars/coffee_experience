/* fucntion to display navigation menu on small screens */
function toggleSidePanel() {
    if ($(".sidePanel").width() === 0) {
        $(".sidePanel").width("60%");
        $('body').addClass('noScroll');
    } else {
        $(".sidePanel").width(0);
        $('body').removeClass('noScroll');
    }
}

/* function to change nav toggle icon to close button for side panel */
function changeIcon(icon) {
  icon.classList.toggle("change");
}

// slide show functions

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dotActive";
}