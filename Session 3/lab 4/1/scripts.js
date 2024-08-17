function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        document.getElementById('message').textContent = 'Welcome';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Not registered';
        document.getElementById('message').style.color = 'red';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var messageElement = document.getElementById('message');

        var login = {
            username: username,
            password: password
        };

        if (login.username === 'admin' && login.password === '123') {
            messageElement.textContent = 'Welcome';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Not registered';
            messageElement.style.color = 'red';
        }
    });
});