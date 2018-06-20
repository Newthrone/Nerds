// Header-slider
var slideIndex = 1;
showSlides(slideIndex);

// for automatic slider
function plusSlides() {
  slideIndex += 1;
  showSlides(slideIndex);  
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("header-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} ;
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // automatic slider
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  setTimeout(plusSlides, 4000); // Change image every 2 seconds
}

// google map

function myMap() {
    var spb = {lat: 59.938606085305835, lng: 30.32306171777837};
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: spb,
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
    position: spb,
    map: map
});
}
