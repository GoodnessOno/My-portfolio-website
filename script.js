var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change the time interval as per your requirement
}

document.getElementsByClassName("form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var data = {
        "name": name,
        "email": email,
        "message": message
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/<EMAIL>", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
});
// Get the HTML element that contains the website content
const contentContainer = document.querySelector(".main_section");

// Define a function to scroll the content container
function scrollContent(direction) {
  // Determine the new scroll position
  let newScrollPos = contentContainer.scrollTop + direction;

  // Make sure the new scroll position is within the bounds of the content
  if (newScrollPos < 0) {
    newScrollPos = 0;
  } else if (newScrollPos > contentContainer.scrollHeight - window.innerHeight) {
    newScrollPos = contentContainer.scrollHeight - window.innerHeight;
  }

  // Set the new scroll position
  contentContainer.scrollTop = newScrollPos;
}

// Add event listeners for the up and down arrow keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    scrollContent(-10);
  } else if (event.key === "ArrowDown") {
    scrollContent(10);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded.");
  const catalog = document.querySelector(".blog_catalog");
  const items = document.querySelectorAll(".item");
  const itemWidth = items[0].offsetWidth;
  const containerWidth = catalog.offsetWidth;
  const maxVisibleItems = Math.floor(containerWidth / itemWidth);
  let currentIndex = 0;

  console.log("Max visible items:", maxVisibleItems);

  function updatePosition() {
    const newPosition = -currentIndex * itemWidth;
    catalog.style.transform = `translateX(${newPosition}px)`;
}
});
document.addEventListener('DOMContentLoaded', function() {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
  });
});
