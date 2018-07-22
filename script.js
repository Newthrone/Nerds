// Header-slider
var slideIndex = 1;
if (document.getElementsByClassName("slideshow-container").length != 0) showSlides(slideIndex);
var t; // timer


// for automatic slider
function plusSlides() {
  slideIndex += 1;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(t);
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("header-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  };
  //  if (n < 1) {
  //    slideIndex = slides.length
  //  };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //  for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //  }

  // automatic slider
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  onSwitchOfTime();
}

function onSwitchOfTime() {
  t = setTimeout(plusSlides, 4000); // Change image every 4 seconds
}

// google map

function myMap() {
  var spb = {
    lat: 59.938606,
    lng: 30.323631
  };
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: {
      lat: 59.939217,
      lng: 30.319035
    },
    zoom: 17,
    minZoom: 17,
    maxZoom: 17,
    //gestureHandling: 'none'
    zoomControl: false
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: spb,
    map: map,
    icon: '/image/marker.png'
  });

}

// Modal window - write us

document.addEventListener('DOMContentLoaded', onDomReady);

function onDomReady() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModal");
  var close = document.getElementsByClassName("close")[0];

  btn.addEventListener('click', function (event) {
    modal.style.display = "block";
    event.stopPropagation();
  });

  modal.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  function closebc() {
    modal.style.display = "none";
  }

  document.addEventListener('click', closebc);
  close.addEventListener('click', closebc);
}


// input[range]

function changerange() {
  rangemin.value = min1.value;
  rangemax.value = max1.value;
}









//var elm = document.querySelector('input');
//var container = elm.parentNode;
//var values = elm.getAttribute('data-values').split(' ');
//var min = document.getElementById('min');
//var max = document.getElementById('max');
//min.value = values[0];
//max.value = values[1];

//values.forEach(function (value, i, values) {
//  var rangePart = elm.cloneNode();
//  rangePart.type = 'range';
//  rangePart.removeAttribute('data-values');
//  rangePart.value = value;
//  rangePart = container.insertBefore(rangePart, elm);
//});

//elm.remove();
