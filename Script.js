function validateForm() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check email
    if (email == "") {
        alert("Please enter your email.");
        return;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Invalid Email! Please enter @ and .");
        return;
    }

    // Check password
    if (password == "") {
        alert("Please enter your password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Check confirm password
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Login Successful!");
}


// Show/Hide Password
function showPassword() {

    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password.type == "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}
