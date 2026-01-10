const generateBtn = document.getElementById('generate-btn');
const numberCircles = document.querySelectorAll('.number-circle');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
}

function displayNumbers(numbers) {
    numberCircles.forEach((circle, index) => {
        circle.textContent = numbers[index];
    });
}

function generateAndDisplayNumbers() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateBtn.addEventListener('click', generateAndDisplayNumbers);

// Generate numbers on initial load
generateAndDisplayNumbers();
