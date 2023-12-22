document.querySelector('.login-box').style.display = 'block'; // Display Login box by default

function showSignUp() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.signup-box').style.display = 'block';
}

function showLogin() {
    document.querySelector('.signup-box').style.display = 'none';
    document.querySelector('.login-box').style.display = 'block';
}

// Rest of the JavaScript functions remain the same

function togglePassword(inputId) {
    var x = document.getElementById(inputId);
    var eye = document.querySelector(`#${inputId} + .eye`);

    if (x.type === "password") {
        x.type = "text";
        eye.style.backgroundImage = "url('eye-open.png')"; // Eye open icon image
    } else {
        x.type = "password";
        eye.style.backgroundImage = "url('eye.png')"; // Eye icon image
    }
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert("Please fill in all fields.");
    } else {
        alert("Login Successful!");
        // Redirect to index.html after successful login
        window.location.href = "index.html";
    }
}

function signup() {
    var signupEmail = document.getElementById('signupEmail').value;
    var signupPassword = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (signupEmail === '' || signupPassword === '' || confirmPassword === '') {
        alert("Please fill in all fields.");
    } else if (signupPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        alert("Account Created Successfully!");
        // Redirect to index.html after successful account creation
        window.location.href = "index.html";
    }
}

function showSignUp() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.signup-box').style.display = 'block';
}

function showLogin() {
    document.querySelector('.signup-box').style.display = 'none';
    document.querySelector('.login-box').style.display = 'block';
}
