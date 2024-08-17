function countVowels() {
    const inputString = document.getElementById('userString').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    document.getElementById('result').innerHTML = `Number of vowels in "${inputString}": ${vowelCount}`;
}