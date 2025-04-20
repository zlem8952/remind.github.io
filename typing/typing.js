// 예시문 데이터 (줄 단위)
const sampleTexts = {
    ko: [
        ["동해물과 백두산이 마르고 닳도록", "하느님이 보우하사 우리나라 만세"],
        ["우리 모두 다 함께 손을 잡고 나아가자", "희망찬 미래를 향해 힘차게 달리자"],
        ["아침 햇살이 밝게 비추는 이 길 위에서", "새로운 하루를 시작해 봅시다"]
    ],
    en: [
        ["The quick brown fox jumps over the lazy dog.", "Practice typing to improve your skills."],
        ["Typing is fun and helps you work faster.", "Accuracy is more important than speed."],
        ["Consistent practice makes perfect.", "Never give up and keep trying!"]
    ]
};

let mode = "ko";
let lines = [];
let currentLine = 0;
let startTime = null;
let correctChars = 0;
let totalTyped = 0;
let errors = 0;
let testStarted = false;

// 요소
const modeBtns = document.querySelectorAll('.mode-btn');
const songInputArea = document.getElementById('song-input-area');
const songLyricsInput = document.getElementById('song-lyrics-input');
const challengeBtn = document.getElementById('challenge-btn');
const testArea = document.getElementById('test-area');
const exampleDisplay = document.getElementById('example-display');
const inputField = document.getElementById('input-field');
const wpmSpan = document.getElementById('wpm');
const accuracySpan = document.getElementById('accuracy');
const errorsSpan = document.getElementById('errors');
const restartBtn = document.getElementById('restart-btn');
const startMessage = document.getElementById('start-message');

// 모드 변경
modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mode = btn.dataset.mode;
        resetAll();
        if (mode === "song") {
            songInputArea.style.display = "";
            testArea.style.display = "none";
        } else {
            songInputArea.style.display = "none";
            lines = getRandomSample(mode);
            startTest();
        }
    });
});

// 한글/영어 랜덤 예시문 줄 배열 반환
function getRandomSample(mode) {
    const arr = sampleTexts[mode];
    return arr[Math.floor(Math.random() * arr.length)];
}

// 노래가사 도전 버튼
challengeBtn.addEventListener('click', () => {
    const raw = songLyricsInput.value.trim();
    if (!raw) {
        alert("노래 가사를 줄마다 입력해 주세요!");
        return;
    }
    lines = raw.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) {
        alert("한 줄 이상 입력해 주세요!");
        return;
    }
    songInputArea.style.display = "none";
    startMessage.style.display = "";
    testArea.style.display = "none";
    setTimeout(() => {
        startMessage.style.display = "none";
        startTest();
    }, 5000);
});

// 테스트 준비 및 첫 줄 표시
function startTest() {
    testArea.style.display = "";
    inputField.disabled = false;
    inputField.value = "";
    currentLine = 0;
    showLine();
    resetStats();
    testStarted = false;
    startTime = null;
    inputField.focus();
}

// 줄 표시 (한글자씩 span으로)
function showLine(typed = "") {
    if (currentLine >= lines.length) {
        exampleDisplay.innerHTML = "🎉 연습이 끝났습니다! 다시 시작하려면 [다시 시작]을 누르세요.";
        inputField.disabled = true;
        return;
    }
    const target = lines[currentLine];
    let html = "";
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
            if (typed[i] === target[i]) {
                html += `<span class="char-correct">${target[i]}</span>`;
            } else {
                html += `<span class="char-wrong">${target[i]}</span>`;
            }
        } else {
            html += `<span class="char-default">${target[i]}</span>`;
        }
    }
    exampleDisplay.innerHTML = html;
    if (typed.length > target.length) {
        // 초과 입력된 부분도 붉은색으로
        for (let i = target.length; i < typed.length; i++) {
            exampleDisplay.innerHTML += `<span class="char-wrong">${typed[i]}</span>`;
        }
    }
}

// 입력 이벤트
inputField.addEventListener('input', () => {
    if (!testStarted && inputField.value.length > 0) {
        testStarted = true;
        startTime = Date.now();
    }
    const target = lines[currentLine] || "";
    const typed = inputField.value;
    showLine(typed);

    // 실시간 오타/정확도/WPM 계산
    let correct = 0, err = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) correct++;
        else err++;
    }
    correctChars = correct;
    totalTyped = typed.length;
    errors = err;
    const elapsed = startTime ? (Date.now() - startTime) / 60000 : 1;
    const wpm = elapsed > 0 ? Math.round((correctChars / 5) / elapsed) : 0;
    const accuracy = totalTyped === 0 ? 100 : Math.round((correctChars / totalTyped) * 100);
    wpmSpan.textContent = wpm;
    accuracySpan.textContent = accuracy;
    errorsSpan.textContent = errors;
});

// 엔터로 다음 줄 이동
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const target = lines[currentLine] || "";
        if (inputField.value.trim() === target.trim()) {
            currentLine++;
            inputField.value = "";
            showLine("");
        }
    }
});

// 다시 시작
restartBtn.addEventListener('click', () => {
    resetAll();
    if (mode === "song") {
        songInputArea.style.display = "";
        testArea.style.display = "none";
    } else {
        lines = getRandomSample(mode);
        startTest();
    }
});

function resetStats() {
    wpmSpan.textContent = 0;
    accuracySpan.textContent = 100;
    errorsSpan.textContent = 0;
    correctChars = 0;
    totalTyped = 0;
    errors = 0;
    testStarted = false;
    startTime = null;
}

function resetAll() {
    inputField.value = "";
    exampleDisplay.innerHTML = "";
    resetStats();
    startMessage.style.display = "none";
    testArea.style.display = "none";
    songLyricsInput.value = "";
}

// 최초 진입시 한글 예시문
window.onload = () => {
    lines = getRandomSample("ko");
    startTest();
};
