//Register form
function validateForm1(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Simple email validation (you may want to use a more robust solution)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!');

    setTimeout(function () {
        window.location.replace('login.html');
    }, 2000);
}

//Login form
function validateForm2(event) {
    event.preventDefault();

    // Get form values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Login successful!');

    setTimeout(function () {
        window.location.replace('../index.html');
    }, 2000);
}