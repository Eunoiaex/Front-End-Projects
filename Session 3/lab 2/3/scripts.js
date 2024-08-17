function convertTime() {
    const hour = parseInt(document.getElementById('hourInput').value);

    if (isNaN(hour) || hour < 0 || hour > 23) {
        document.getElementById('result').innerHTML = 'Please enter a valid hour between 0 and 23.';
        return;
    }

    let period = 'AM';
    let convertedHour = hour;

    if (hour === 0) {
        convertedHour = 12;
    } else if (hour === 12) {
        period = 'PM';
    } else if (hour > 12) {
        convertedHour = hour - 12;
        period = 'PM';
    }

    document.getElementById('result').innerHTML = `${hour} in 24-hour format is ${convertedHour}${period}`;
}