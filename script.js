window.onload = function() {
  var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
        slideIndex++;
        if (slideIndex >= slides.length) {slideIndex = 0;}
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}   
document.getElementById("datetime").innerHTML = new Date();
alert("JavaScript is working!");

