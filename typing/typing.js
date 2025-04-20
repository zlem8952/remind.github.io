// 한국어/영어 주제별 긴글/중간글/짧은글 데이터
const korTexts = [
  {
    title: "애국가",
    short: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ],
    medium: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "남산 위에 저 소나무 철갑을 두른 듯",
      "바람 서리 불변함은 우리 기상일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ],
    long: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "남산 위에 저 소나무 철갑을 두른 듯",
      "바람 서리 불변함은 우리 기상일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "가을 하늘 공활한데 높고 구름 없이",
      "밝은 달은 우리 가슴 일편단심일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "이 기상과 이 맘으로 충성을 다하여",
      "괴로우나 즐거우나 나라 사랑하세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ]
  },
  {
    title: "별 헤는 밤",
    short: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다"
    ],
    medium: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다",
      "가슴속에 하나 둘 새겨지는 별을",
      "이제 다 못 헤는 것은",
      "쉬이 아침이 오는 까닭이요",
      "내일 밤이 남은 까닭이요"
    ],
    long: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다",
      "가슴속에 하나 둘 새겨지는 별을",
      "이제 다 못 헤는 것은",
      "쉬이 아침이 오는 까닭이요",
      "내일 밤이 남은 까닭이요",
      "아직 나의 청춘이 다하지 않은 까닭입니다",
      "별 하나에 추억과",
      "별 하나에 사랑과",
      "별 하나에 쓸쓸함과",
      "별 하나에 동경과",
      "별 하나에 시와",
      "별 하나에 어머니, 어머니"
    ]
  },
  {
    title: "청춘예찬",
    short: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다."
    ],
    medium: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다.",
      "청춘은 한 번 지나가면 다시 오지 않는다.",
      "청춘의 아름다움은 용기에서 비롯된다."
    ],
    long: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다.",
      "청춘은 한 번 지나가면 다시 오지 않는다.",
      "청춘의 아름다움은 용기에서 비롯된다.",
      "청춘은 자기 자신을 믿는 데서 출발한다.",
      "청춘이여, 두려워 말고 도전하라."
    ]
  }
  // ...12개 이상 추가
];

const engTexts = [
  {
    title: "The Great Gatsby",
    short: [
      "So we beat on, boats against the current, borne back ceaselessly into the past."
    ],
    medium: [
      "I hope she'll be a fool — that's the best thing a girl can be in this world, a beautiful little fool.",
      "Gatsby believed in the green light, the orgastic future that year by year recedes before us."
    ],
    long: [
      "Whenever you feel like criticizing any one, just remember that all the people in this world haven't had the advantages that you've had.",
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      "Gatsby believed in the green light, the orgastic future that year by year recedes before us."
    ]
  },
  {
    title: "Steve Jobs' Stanford Speech",
    short: [
      "Your time is limited, so don't waste it living someone else's life."
    ],
    medium: [
      "Don't let the noise of others' opinions drown out your own inner voice.",
      "Have the courage to follow your heart and intuition."
    ],
    long: [
      "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
      "You are already naked. There is no reason not to follow your heart."
    ]
  },
  {
    title: "Martin Luther King Jr.",
    short: [
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed."
    ],
    medium: [
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."
    ],
    long: [
      "Let us not wallow in the valley of despair, I say to you today, my friends.",
      "And so even though we face the difficulties of today and tomorrow, I still have a dream."
    ]
  }
  // ...12개 이상 추가
];

// 노래가사 txt 파일 목록 (수동 관리)
let songList = [
  {name: "오늘 밤은 삐딱하게", file: "오늘 밤은 삐딱하게.txt"},
  {name: "사랑은 늘 도망가", file: "사랑은 늘 도망가.txt"}
  // ...더 추가
];

let mode = "ko";
let lines = [];
let currentLine = 0;
let startTime = null;
let correctChars = 0;
let totalTyped = 0;
let errors = 0;
let testStarted = false;
let selectedLength = "short";
let selectedSubject = 0;

// 요소
const modeBtns = document.querySelectorAll('.mode-btn');
const lengthSelectArea = document.getElementById('length-select-area');
const lengthSelect = document.getElementById('length-select');
const subjectSelectArea = document.createElement('div');
subjectSelectArea.id = "subject-select-area";
subjectSelectArea.style.margin = "20px 0";
subjectSelectArea.innerHTML = `
  <label>주제 선택:
    <select id="subject-select"></select>
  </label>
`;
document.querySelector(".typing-container").insertBefore(subjectSelectArea, lengthSelectArea.nextSibling);
const subjectSelect = subjectSelectArea.querySelector("#subject-select");

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
            subjectSelectArea.style.display = "none";
            songSelectArea.style.display = "";
            songInputArea.style.display = "none";
            fetchSongList();
        } else {
            lengthSelectArea.style.display = "";
            subjectSelectArea.style.display = "";
            songSelectArea.style.display = "none";
            songInputArea.style.display = "none";
            fillSubjectSelect();
            lines = getSampleLines(mode, selectedSubject, selectedLength);
            startTest();
        }
    });
});

// 분량 선택
lengthSelect.addEventListener('change', () => {
    selectedLength = lengthSelect.value;
    if (mode === "ko" || mode === "en") {
        lines = getSampleLines(mode, selectedSubject, selectedLength);
        startTest();
    }
});

// 주제 선택
subjectSelect.addEventListener('change', () => {
    selectedSubject = subjectSelect.value;
    lines = getSampleLines(mode, selectedSubject, selectedLength);
    startTest();
});

// 한글/영어 주제/분량별 예시문 줄 배열 반환
function getSampleLines(mode, subjectIdx, length) {
    let arr = mode === "ko" ? korTexts : engTexts;
    subjectIdx = parseInt(subjectIdx) || 0;
    let item = arr[subjectIdx];
    return item && item[length] ? item[length] : ["데이터가 없습니다."];
}

// 주제 셀렉트 박스 채우기
function fillSubjectSelect() {
    let arr = mode === "ko" ? korTexts : engTexts;
    subjectSelect.innerHTML = "";
    arr.forEach((item, idx) => {
        let opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = item.title;
        subjectSelect.appendChild(opt);
    });
    selectedSubject = 0;
}

// 노래가사 폴더의 파일 목록 불러오기 (정적 파일이라면 수동으로 리스트 작성 필요)
function fetchSongList() {
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
        fillSubjectSelect();
        lines = getSampleLines(mode, selectedSubject, selectedLength);
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

// 최초 진입시 한글 예시문(짧은글, 첫 주제)
window.onload = () => {
    fillSubjectSelect();
    lines = getSampleLines("ko", 0, "short");
    startTest();
};
