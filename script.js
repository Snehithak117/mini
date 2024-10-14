const registrationForm = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
});

const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email!");
        return;
    }

    // Form validation successful, redirect to success page
    window.location.href = "success.html";
};

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};