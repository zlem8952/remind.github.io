const sampleTexts = {
    ko: {
        short: [
            ["동해물과 백두산이 마르고 닳도록", "하느님이 보우하사 우리나라 만세", "무궁화 삼천리 화려강산"],
            ["우리 모두 다 함께 손을 잡고 나아가자", "희망찬 미래를 향해 힘차게 달리자", "오늘도 열심히 연습해요"]
        ],
        medium: [
            ["아침 햇살이 밝게 비추는 이 길 위에서", "새로운 하루를 시작해 봅시다", "작은 성공도 소중히 여기며", "꾸준히 노력하는 우리가 되자", "포기하지 말고 끝까지 도전하자"],
            ["건강한 몸과 마음을 위해", "매일 조금씩 운동을 해보자", "책을 읽으며 지식을 쌓고", "친구들과 함께 즐거운 시간을 보내자", "행복은 가까이에 있어요"]
        ],
        long: [
            ["세상에 쉬운 일은 하나도 없지만", "노력하면 언젠가 반드시 보답을 받는다", "오늘의 실패는 내일의 성공을 위한 밑거름이 된다", "실수를 두려워하지 말고", "도전하는 용기를 내자", "함께하는 친구들이 있어", "우리는 언제나 힘이 된다"],
            ["꿈을 이루기 위해서는", "꾸준한 연습과 노력이 필요하다", "작은 목표부터 차근차근 달성해 나가자", "실패를 두려워하지 말고", "다시 일어나는 용기를 가지자", "내일의 나는 오늘보다 더 성장할 것이다", "포기하지 말고 끝까지 도전하자"]
        ]
    },
    en: {
        short: [
            ["The quick brown fox jumps over the lazy dog.", "Practice typing to improve your skills.", "Keep going!"],
            ["Typing is fun and helps you work faster.", "Accuracy is more important than speed.", "Try your best!"]
        ],
        medium: [
            ["Consistent practice makes perfect.", "Never give up and keep trying!", "Typing every day will help you improve.", "Focus on accuracy before speed.", "You can do it!"],
            ["Learning to type is a valuable skill.", "It helps you in school and at work.", "Make sure to sit up straight.", "Keep your fingers on the home row.", "Don't look at the keyboard!"]
        ],
        long: [
            ["Typing is a skill that everyone should learn.", "It helps you finish your work faster and more accurately.", "Start by learning the correct finger positions.", "Practice regularly and you will see improvement.", "Remember to take breaks to rest your hands.", "Stay motivated and keep challenging yourself.", "Soon you will be a typing master!"],
            ["When you practice typing, focus on both speed and accuracy.", "Don't rush, but try to avoid making mistakes.", "Set small goals and celebrate your progress.", "Typing games can make practice more fun.", "Share your results with your friends.", "Keep practicing every day.", "Success will follow!"]
        ]
    }
};

let mode = "ko";
let lines = [];
let currentLine = 0;
let startTime = null;
let correctChars = 0;
let totalTyped = 0;
let errors = 0;
let testStarted = false;
let selectedLength = "short";
let songList = []; // 노래 파일 목록

// 요소
const modeBtns = document.querySelectorAll('.mode-btn');
const lengthSelectArea = document.getElementById('length-select-area');
const lengthSelect = document.getElementById('length-select');
const songSelectArea = document.getElementById('song-select-area');
const songSelect = document.getElementById('song-select');
const songChallengeBtn = document.getElementById('song-challenge-btn');
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
            lengthSelectArea.style.display = "none";
            songSelectArea.style.display = "";
            songInputArea.style.display = "none";
            fetchSongList();
        } else {
            lengthSelectArea.style.display = "";
            songSelectArea.style.display = "none";
            songInputArea.style.display = "none";
            lines = getRandomSample(mode, selectedLength);
            startTest();
        }
    });
});

// 분량 선택
lengthSelect.addEventListener('change', () => {
    selectedLength = lengthSelect.value;
    if (mode === "ko" || mode === "en") {
        lines = getRandomSample(mode, selectedLength);
        startTest();
    }
});

// 한글/영어 랜덤 예시문 줄 배열 반환
function getRandomSample(mode, length) {
    const arr = sampleTexts[mode][length];
    return arr[Math.floor(Math.random() * arr.length)];
}

// 노래가사 폴더의 파일 목록 불러오기 (정적 파일이라면 수동으로 리스트 작성 필요)
function fetchSongList() {
    // 아래 배열을 실제 가사 파일명에 맞게 수정하세요.
    // 예: [{name:"사랑은 늘 도망가", file:"song1.txt"}, ...]
    songList = [
        {name: "사랑은 늘 도망가", file: "song1.txt"},
        {name: "아로하", file: "song2.txt"}
    ];
    songSelect.innerHTML = '<option value="">노래를 선택하세요</option>';
    songList.forEach(song => {
        const opt = document.createElement('option');
        opt.value = song.file;
        opt.textContent = song.name;
        songSelect.appendChild(opt);
    });
}

// 노래 선택 후 도전
songChallengeBtn.addEventListener('click', () => {
    const file = songSelect.value;
    if (!file) {
        alert("노래를 선택하세요!");
        return;
    }
    fetch(`lyrics/${file}`)
        .then(res => res.text())
        .then(text => {
            lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
            if (lines.length === 0) {
                alert("가사 파일이 비어 있습니다!");
                return;
            }
            songSelectArea.style.display = "none";
            startMessage.style.display = "";
            testArea.style.display = "none";
            setTimeout(() => {
                startMessage.style.display = "none";
                startTest();
            }, 5000);
        })
        .catch(() => alert("가사 파일을 불러올 수 없습니다!"));
});

// 노래가사 직접 입력(예비용)
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
        songSelectArea.style.display = "";
        testArea.style.display = "none";
        fetchSongList();
    } else {
        lines = getRandomSample(mode, selectedLength);
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

// 최초 진입시 한글 예시문(짧은글)
window.onload = () => {
    lines = getRandomSample("ko", "short");
    startTest();
};
