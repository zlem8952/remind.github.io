// ==================== 공통 유틸리티 ====================
const safeQuerySelector = (selector) => {
  const el = document.querySelector(selector);
  if (!el) console.error(`${selector} 요소를 찾을 수 없음`);
  return el;
};

// ==================== 부드러운 스크롤 ====================
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.hash) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = safeQuerySelector(this.hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
};

// ==================== 헤더 스크롤 효과 ====================
const initHeaderScroll = () => {
  const header = safeQuerySelector('header');
  let isScrolling;

  window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      header.style.backgroundColor = window.scrollY > 100 
        ? 'rgba(44, 62, 80, 0.9)' 
        : 'var(--secondary-color)';
    }, 50);
  });
};

// ==================== 이미지 지연 로딩 ====================
const initLazyLoading = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
};

// ==================== 다크 모드 토글 ====================
const initDarkMode = () => {
  const themeToggle = safeQuerySelector('#themeToggle');
  const body = document.body;

  const updateTheme = (isDark) => {
    body.classList.toggle('dark-mode', isDark);
    document.documentElement.style.setProperty(
      '--primary-color', 
      isDark ? '#ffffff' : '#2c3e50'
    );
    localStorage.setItem('darkMode', isDark);
  };

  themeToggle.addEventListener('click', () => 
    updateTheme(!body.classList.contains('dark-mode'))
  );

  // 초기 테마 설정
  updateTheme(localStorage.getItem('darkMode') === 'true');
};

// ==================== 네비게이션 시스템 ====================
const initNavigation = () => {
  const Navigation = {
    elements: {
      sideNav: null,
      hamburger: null
    },

    init() {
      this.cacheElements();
      this.bindEvents();
      this.initTouch();
    },

    cacheElements() {
      this.elements.sideNav = safeQuerySelector('#sideNav');
      this.elements.hamburger = safeQuerySelector('#hamburger');
    },

    bindEvents() {
      this.elements.hamburger.addEventListener('click', () => this.openNav());
      document.addEventListener('click', (e) => this.handleClick(e));
    },

    openNav() {
      this.elements.sideNav.style.width = '250px';
      this.elements.hamburger.setAttribute('aria-expanded', 'true');
    },

    closeNav() {
      this.elements.sideNav.style.width = '0';
      this.elements.hamburger.setAttribute('aria-expanded', 'false');
    },

    handleClick(e) {
      if (!e.target.closest('#sideNav, #hamburger')) this.closeNav();
    },

    initTouch() {
      let touchStartX = 0;
      
      document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
      });

      document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX - touchStartX > 50) this.openNav();
      });
    }
  };

  Navigation.init();
};

// ==================== 초기화 ====================
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initHeaderScroll();
  initLazyLoading();
  initDarkMode();
  initNavigation();
});
