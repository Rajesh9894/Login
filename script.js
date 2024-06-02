// Initializing flags to check whether the input is filled correctly or not
var nameCheck = false;
var phoneCheck = false;
var emailCheck = false;
var passwordCheck = false;
var confirmpsswordCheck = false;

var form = document.getElementById('form');

// Selecting containers
var nameContainer = document.querySelector(".username");
var phoneContainer = document.querySelector(".phone");
var emailContainer = document.querySelector(".Email");
var passwordContainer = document.querySelector(".password");
var confirmpasswordContainer = document.querySelector(".con-password");

// Selecting input fields
var nameInput = document.getElementById("username");
var phoneInput = document.getElementById("phone-no");
var emailInput = document.getElementById("mail");
var passwordInput = document.getElementById("password");
var confirmpasswordInput = document.getElementById("con-pass");

// Selecting icons
var nameIcon = nameContainer.querySelector("i");
var phoneIcon = phoneContainer.querySelector("i");
var emailIcon = emailContainer.querySelector("i");
var passwordIcon = passwordContainer.querySelector("i");
var confirmpasswordIcon = confirmpasswordContainer.querySelector("i");

// Selecting labels
var nameLabel = nameContainer.querySelector(".label");
var phoneLabel = phoneContainer.querySelector(".label");
var emailLabel = emailContainer.querySelector(".label");
var passwordLabel = passwordContainer.querySelector(".label");
var confirmpasswordLabel = confirmpasswordContainer.querySelector(".label");

// User input value for name
nameInput.addEventListener("keyup", function () {
    var enteredValue = nameInput.value.trim();

    if (enteredValue === "") {
        nameLabel.style.visibility = "visible";
        nameIcon.style.visibility = "hidden";
        nameCheck = false;
    } else {
        nameLabel.style.visibility = "hidden";
        nameIcon.style.visibility = "visible";
        nameCheck = true;
    }
});

// User input value for phone
phoneInput.addEventListener("keyup", function () {
    var enteredValue = phoneInput.value.trim();
    var phoneno = /^\d{10}$/;
    
    if (enteredValue === "") {
        phoneLabel.style.visibility = "visible";
        phoneIcon.style.visibility = "hidden";
        phoneCheck = false;
    } else if (!enteredValue.match(phoneno)) {
        phoneLabel.style.visibility = "visible";
        phoneIcon.style.visibility = "hidden";
        phoneLabel.textContent = "Please enter 10 digit no";
        phoneCheck = false;
    } else {
        phoneLabel.style.visibility = "hidden";
        phoneIcon.style.visibility = "visible";
        phoneCheck = true;
    }
});

// User input value for email
emailInput.addEventListener("keyup", function () {
    var EValue = emailInput.value.trim();

    if (EValue === "") {
        emailLabel.style.visibility = "visible";
        emailIcon.style.visibility = "hidden";
        emailLabel.textContent = "Please enter your email";
        emailCheck = false;
    } else if (!emailValidate(EValue)) {
        emailLabel.style.visibility = "visible";
        emailIcon.style.visibility = "hidden";
        emailLabel.textContent = "Invalid Email";
        emailCheck = false;
    } else {
        emailLabel.style.visibility = "hidden";
        emailIcon.style.visibility = "visible";
        emailCheck = true;
    }
});

function emailValidate(EValue) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(EValue);
}

// User input value for password
passwordInput.addEventListener("keyup", function () {
    var enteredpValue = passwordInput.value.trim();

    if (enteredpValue === "") {
        passwordLabel.style.visibility = "visible";
        passwordIcon.style.visibility = "hidden";
        passwordCheck = false;
    } else if (enteredpValue.length < 6) {
        passwordLabel.style.visibility = "visible";
        passwordIcon.style.visibility = "hidden";
        passwordLabel.textContent = "Password must contain at least 6 characters";
        passwordCheck = false;
    } else {
        passwordLabel.style.visibility = "hidden";
        passwordIcon.style.visibility = "visible";
        passwordCheck = true;
    }
});

// User input value for confirm password
confirmpasswordInput.addEventListener("keyup", function () {
    var enteredConValue = confirmpasswordInput.value.trim();

    if (enteredConValue === "") {
        confirmpasswordLabel.style.visibility = "visible";
        confirmpasswordIcon.style.visibility = "hidden";
        confirmpsswordCheck = false;
    } else if (passwordInput.value !== confirmpasswordInput.value) {
        confirmpasswordLabel.style.visibility = "visible";
        confirmpasswordIcon.style.visibility = "hidden";
        confirmpasswordLabel.textContent = "Entered value doesn't match";
        confirmpsswordCheck = false;
    } else {
        confirmpasswordLabel.style.visibility = "hidden";
        confirmpasswordIcon.style.visibility = "visible";
        confirmpsswordCheck = true;
    }
});

var registerbtn = document.getElementById("submit");
var popup = document.getElementById("popup");
registerbtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Display the success popup message
    if (nameCheck && phoneCheck && emailCheck && passwordCheck && confirmpsswordCheck) {
        popup.style.top = "20px";
        popup.style.opacity = "1";
        popup.textContent = "Form Submitted Successfully!!!";
    } else {
        popup.style.top = "20px";
        popup.style.opacity = "1";
        popup.textContent = "Please Fill the form correctly!!!";
        popup.style.backgroundColor = "#d74a16e3";
    }

    // Set timeout for popup
    setTimeout(function () {
        popup.style.top = "-40px";
        popup.style.opacity = "0";
    }, 2000);
});