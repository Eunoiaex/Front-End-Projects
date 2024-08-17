function calculateArea() {
    let shape = document.getElementById('shape').value.toLowerCase();
    let result = document.getElementById('result');
    let dimensions = document.getElementById('dimensions');
    let area;

    switch (shape) {
        case 'circle':
            let radius = parseFloat(prompt('Enter the radius of the circle:'));
            area = Math.PI * Math.pow(radius, 2);
            break;
        case 'triangle':
            let base = parseFloat(prompt('Enter the base of the triangle:'));
            let height = parseFloat(prompt('Enter the height of the triangle:'));
            area = 0.5 * base * height;
            break;
        case 'square':
            let side = parseFloat(prompt('Enter the length of the side of the square:'));
            area = Math.pow(side, 2);
            break;
        case 'rectangle':
            let length = parseFloat(prompt('Enter the length of the rectangle:'));
            let width = parseFloat(prompt('Enter the width of the rectangle:'));
            area = length * width;
            break;
        case 'parallelogram':
            let baseP = parseFloat(prompt('Enter the base of the parallelogram:'));
            let heightP = parseFloat(prompt('Enter the height of the parallelogram:'));
            area = baseP * heightP;
            break;
        case 'trapezium':
            let a = parseFloat(prompt('Enter the length of side a:'));
            let b = parseFloat(prompt('Enter the length of side b:'));
            let h = parseFloat(prompt('Enter the height of the trapezium:'));
            area = 0.5 * (a + b) * h;
            break;
        case 'ellipse':
            let aAxis = parseFloat(prompt('Enter the length of the minor axis (a):'));
            let bAxis = parseFloat(prompt('Enter the length of the major axis (b):'));
            area = Math.PI * aAxis * bAxis;
            break;
        default:
            alert('Shape not recognized. Please enter a valid shape name.');
            return;
    }

    result.textContent = `The area of the ${shape} is ${area.toFixed(2)}`;
}