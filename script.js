// 앵커 링크를 위한 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 100 ? 'rgba(44, 62, 80, 0.9)' : 'var(--secondary-color)';
});

// 이미지 지연 로딩
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});

// 다크모드 토글 기능
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// 페이지 로드 시 저장된 테마 적용
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
// 추가된 JavaScript 기능
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', function(event) {
    const sideNav = document.getElementById('sideNav');
    const hamburger = document.getElementById('hamburger');
    
    if (!sideNav.contains(event.target) && !hamburger.contains(event.target)) {
        closeNav();
    }
});
