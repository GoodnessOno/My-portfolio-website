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