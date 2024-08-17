document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerButton').addEventListener('click', function() {
        var username = document.getElementById('username').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();
        var messageElement = document.getElementById('message');

        messageElement.textContent = '';
        messageElement.style.color = 'red';

        var isValid = true;
        var messages = [];

        if (username === '') {
            isValid = false;
            messages.push('Username is required.');
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push('Invalid email format.');
        }

        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        if (password !== confirmPassword) {
            isValid = false;
            messages.push('Passwords do not match.');
        }

        if (isValid) {
            messageElement.textContent = 'Registration successful!';
            messageElement.style.color = 'green';
        } else {
            messageElement.innerHTML = messages.join('<br>');
        }

        messageElement.style.display = 'block';
    });
});