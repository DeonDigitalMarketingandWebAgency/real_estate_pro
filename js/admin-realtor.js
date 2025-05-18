document.getElementById('realtorRegistration').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Realtor account created successfully!');
});

const existingUsers = [
    { fullName: "John Doe", email: "john.doe@example.com" },
    { fullName: "Jane Smith", email: "jane.smith@example.com" }
];

document.getElementById("realtorRegistration").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("realtorName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const profilePhoto = document.getElementById("profilePhoto").value;

    // Validation flags
    let isValid = true;

    // Validate Full Name
    const nameError = document.getElementById("nameError");
    if (existingUsers.some(user => user.fullName === fullName)) {
        nameError.textContent = "Full Name already exists!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const emailError = document.getElementById("emailError");
    if (existingUsers.some(user => user.email === email)) {
        emailError.textContent = "Email Address already exists!";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Invalid email address!";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Password
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be 6-10 characters long, include uppercase, lowercase, a number, and a symbol.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (isValid) {
        // Add new user to the list
        existingUsers.push({ fullName, email });

        // Redirect after 4 seconds
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 4000);

        // Save to local storage for Manage Realtors
        const newUser = { fullName, email };
        const storedRealtors = JSON.parse(localStorage.getItem("realtors")) || [];
        storedRealtors.push(newUser);
        localStorage.setItem("realtors", JSON.stringify(storedRealtors));

        alert("Realtor Registered Successfully! Redirecting...");
    }
});