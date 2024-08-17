function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correctUsername = "admin";
    const correctPassword = "421$$";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('result').innerHTML = "Welcome, login success!";
    } else {
        if (username !== correctUsername && password !== correctPassword) {
            document.getElementById('result').innerHTML = "Both username and password are incorrect.";
        } else if (username !== correctUsername) {
            document.getElementById('result').innerHTML = "Incorrect username.";
        } else if (password !== correctPassword) {
            document.getElementById('result').innerHTML = "Incorrect password.";
        }
    }
}