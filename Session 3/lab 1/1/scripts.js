function confirmName() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName && lastName) {
        const fullName = `${firstName} ${lastName}`;
        document.getElementById('fullName').innerText = `Your full name is: ${fullName}`;
        document.getElementById('confirmation').style.display = 'block';
    } else {
        alert('Please enter both your first and last names.');
    }
}

function welcomeUser() {
    const birthYear = document.getElementById('birthYear').value;
    const fullName = document.getElementById('fullName').innerText.split(": ")[1];
    const currentYear = new Date().getFullYear();

    if (birthYear) {
        const age = currentYear - birthYear;
        document.getElementById('welcomeText').innerText = `Welcome ${fullName}, you are ${age} years old.`;
        document.getElementById('welcomeMessage').style.display = 'block';
    } else {
        alert('Please enter your birth year.');
    }
}