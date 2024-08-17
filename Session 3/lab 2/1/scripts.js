function askForAge() {
    let age;
    while (true) {
        age = prompt("Please enter your age:");
        if (age === null) {
            break;
        }
        age = parseInt(age);
        if (!isNaN(age) && age > 0) {
            checkAgeStatus(age);
        } else {
            alert("Please enter a valid positive number.");
        }
    }
}

function checkAgeStatus(age) {
    let status;
    if (age >= 1 && age <= 10) {
        status = "You are a Child! XD";
    } else if (age >= 11 && age <= 18) {
        status = "You are a Teenager! :3";
    } else if (age >= 19 && age <= 50) {
        status = "You are Grown up! ><";
    } else if (age > 50) {
        status = "You are Old! ^^";
    } else {
        status = "Invalid age";
    }
    document.getElementById('result').innerHTML = `Age: ${age} - Status: ${status}`;
}