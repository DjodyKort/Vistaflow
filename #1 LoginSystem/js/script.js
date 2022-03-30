// Declaring variables
const user = document.getElementById('formUsername');
const pass = document.getElementById('formPassword');
const loginBtn = document.getElementById('formSubmitButton');

// adding event listener to the login button
loginBtn.addEventListener("click", checkLogin);

// ======== Functions ========
    // Function to check if the username and password are correct
    function checkLogin() {
        if (user.value === "admin" && pass.value === "admin") {
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    }