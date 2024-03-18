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