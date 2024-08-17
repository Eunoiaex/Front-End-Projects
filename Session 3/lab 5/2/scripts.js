function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    document.getElementById('time').innerText =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('ampm').innerText = ampm;

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = dayNames[now.getDay()];
    document.querySelectorAll('.day').forEach(day => {
        day.classList.toggle('active', day.innerText === today);
    });
}

function setAlarm() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert("Please set a time for the alarm.");
        return;
    }

    const now = new Date();
    const alarmTime = new Date(now.getTime() + (hours * 3600000) + (minutes * 60000) + (seconds * 1000));

    const alarmTimer = setTimeout(() => {
        alert("Time's up!");
        clearTimeout(alarmTimer);
    }, alarmTime - now);

    alert(`Alarm set for ${hours} hours, ${minutes} minutes, and ${seconds} seconds from now.`);
}


function clearAlarm() {
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

setInterval(updateClock, 1000);
updateClock();