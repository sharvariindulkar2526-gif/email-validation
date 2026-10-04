function validateForm() {

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check empty email
    if (email === "") {
        alert("Please enter your email address.");
        document.getElementById("email").focus();
        return;
    }

    // Check @ and .
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid Email! Email must contain @ and .");
        document.getElementById("email").focus();
        return;
    }

    // Check password
    if (password === "") {
        alert("Please enter your password.");
        document.getElementById("password").focus();
        return;
    }

    // Minimum password length
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        document.getElementById("password").focus();
        return;
    }

    // Check confirm password
    if (confirmPassword === "") {
        alert("Please confirm your password.");
        document.getElementById("confirmPassword").focus();
        return;
    }

    // Compare passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        document.getElementById("confirmPassword").focus();
        return;
    }

    // Successful login
    alert("Login Successful!");
}


// Show / Hide Password
function showPassword() {

    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}
