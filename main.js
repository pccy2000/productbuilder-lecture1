const generateBtn = document.getElementById('generate-btn');
const menuText = document.getElementById('menu-text');
const themeToggleBtn = document.getElementById('theme-toggle');

const menus = [
    "김치찌개", "된장찌개", "삼겹살", "치킨", "피자", 
    "햄버거", "짜장면", "짬뽕", "탕수육", "떡볶이", 
    "순대국", "돈까스", "초밥", "회덮밥", "칼국수", 
    "파스타", "스테이크", "샐러드", "라멘", "우동",
    "부대찌개", "제육볶음", "오징어볶음", "낙지볶음",
    "갈비찜", "닭볶음탕", "족발", "보쌈", "비빔밥"
];

function getRandomMenu() {
    const randomIndex = Math.floor(Math.random() * menus.length);
    return menus[randomIndex];
}

function recommendMenu() {
    // Add a simple animation effect
    menuText.style.opacity = 0;
    setTimeout(() => {
        const menu = getRandomMenu();
        menuText.textContent = menu;
        menuText.style.opacity = 1;
    }, 200);
}

// Theme Toggling Logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
    }
}

generateBtn.addEventListener('click', recommendMenu);
themeToggleBtn.addEventListener('click', toggleTheme);

// Load theme on initial load
loadTheme();