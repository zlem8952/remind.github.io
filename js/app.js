// Posts data - 각 게시글의 메타 정보
const postsData = [
    {
        id: 1,
        tag: 'c-language',
        tagName: 'C언어',
        title: '포인터의 기본 개념과 활용',
        date: '2025-10-28',
        excerpt: 'C언어의 핵심 개념인 포인터에 대해 알아봅니다. 포인터의 기본 원리부터 실전 활용법까지 정리했습니다.',
        file: 'posts/c-language/pointer-basics.html'
    },
    {
        id: 2,
        tag: 'c-language',
        tagName: 'C언어',
        title: '동적 메모리 할당 (malloc, free)',
        date: '2025-10-29',
        excerpt: '동적 메모리 할당의 원리와 malloc, calloc, realloc, free 함수의 사용법을 다룹니다.',
        file: 'posts/c-language/dynamic-memory.html'
    },
    {
        id: 3,
        tag: 'python',
        tagName: '파이썬',
        title: '파이썬 리스트 컴프리헨션 완전 정복',
        date: '2025-10-30',
        excerpt: '파이썬의 강력한 기능인 리스트 컴프리헨션을 활용하여 간결하고 효율적인 코드를 작성하는 방법을 학습합니다.',
        file: 'posts/python/list-comprehension.html'
    },
    {
        id: 4,
        tag: 'python',
        tagName: '파이썬',
        title: '데코레이터 패턴 이해하기',
        date: '2025-10-31',
        excerpt: '파이썬 데코레이터의 작동 원리와 실용적인 활용 예제를 통해 고급 프로그래밍 기법을 익힙니다.',
        file: 'posts/python/decorators.html'
    },
    {
        id: 5,
        tag: 'software-english',
        tagName: '소프트웨어영어',
        title: '프로그래밍 문서 읽기 - API Documentation',
        date: '2025-10-27',
        excerpt: 'API 문서를 효과적으로 읽고 이해하는 방법과 자주 사용되는 영어 표현을 정리합니다.',
        file: 'posts/software-english/api-documentation.html'
    },
    {
        id: 6,
        tag: 'software-english',
        tagName: '소프트웨어영어',
        title: 'Git Commit Message 작성 가이드',
        date: '2025-10-29',
        excerpt: '효과적인 Git 커밋 메시지를 작성하는 방법과 컨벤션을 영어로 학습합니다.',
        file: 'posts/software-english/git-commit-messages.html'
    },
    {
        id: 7,
        tag: 'basic-math',
        tagName: '기초수학',
        title: '프로그래머를 위한 이진수와 비트 연산',
        date: '2025-10-26',
        excerpt: '이진수 체계와 비트 연산의 기초부터 실전 활용까지 프로그래밍에 필요한 수학 개념을 학습합니다.',
        file: 'posts/basic-math/binary-and-bitwise.html'
    },
    {
        id: 8,
        tag: 'basic-math',
        tagName: '기초수학',
        title: '알고리즘 복잡도 분석 - Big O 표기법',
        date: '2025-10-30',
        excerpt: '알고리즘의 시간 복잡도와 공간 복잡도를 분석하는 Big O 표기법을 수학적으로 이해합니다.',
        file: 'posts/basic-math/big-o-notation.html'
    }
];

// DOM Elements
const postsGrid = document.getElementById('posts-grid');
const noPosts = document.getElementById('no-posts');
const filterButtons = document.querySelectorAll('.filter-btn');

// 현재 선택된 태그
let currentTag = 'all';

// 게시글 렌더링 함수
function renderPosts(tag = 'all') {
    // 필터링
    const filteredPosts = tag === 'all'
        ? postsData
        : postsData.filter(post => post.tag === tag);

    // 날짜순 정렬 (최신순)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 게시글이 없는 경우
    if (filteredPosts.length === 0) {
        postsGrid.style.display = 'none';
        noPosts.style.display = 'block';
        return;
    }

    // 게시글 표시
    postsGrid.style.display = 'grid';
    noPosts.style.display = 'none';

    // HTML 생성
    postsGrid.innerHTML = filteredPosts.map(post => `
        <article class="post-card" onclick="location.href='${post.file}'">
            <span class="post-tag">${post.tagName}</span>
            <h2 class="post-title">${post.title}</h2>
            <time class="post-date">${formatDate(post.date)}</time>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.file}" class="post-link" onclick="event.stopPropagation()">
                자세히 보기
            </a>
        </article>
    `).join('');
}

// 날짜 포맷팅 함수
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// 필터 버튼 이벤트 리스너
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼의 active 클래스 제거
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // 클릭된 버튼에 active 클래스 추가
        button.classList.add('active');

        // 태그 가져오기
        const tag = button.getAttribute('data-tag');
        currentTag = tag;

        // 게시글 렌더링
        renderPosts(tag);
    });
});

// 페이지 로드 시 전체 게시글 표시
document.addEventListener('DOMContentLoaded', () => {
    renderPosts('all');
});
