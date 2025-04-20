let currentText = '';
let startTime, timer;
let totalChars = 0, correctChars = 0, errors = 0;
const MODE = { KO: 'ko', EN: 'en', SONG: 'song' };
let currentMode = MODE.KO;

// 예시 문장
const sampleTexts = {
    ko: [
        "타자 연습을 통해 빠른 속도와 정확성을 기를 수 있습니다.",
        "꾸준한 연습은 실력 향상에 큰 도움이 됩니다.",
        "오늘도 열심히 연습해서 목표를 달성해 봅시다.",
        "정확한 타이핑은 실수를 줄이고 효율을 높입니다.",
        "한글 타자 연습을 시작해 보세요."
    ],
    en: [
        "Practice makes perfect. Keep typing to improve your speed.",
        "Accuracy is more important than speed in typing.",
        "Consistent training will help you reach your goals.",
        "Typing is a valuable skill in the digital age.",
        "Try to reduce your mistakes while increasing your speed."
    ]
};

// 요소 선택자
const modeButtons = document.querySelectorAll('.mode-btn');
const songSearch = document.getElementById('song-search');
const textDisplay = document.getElementById('text-display');
const inputField = document.getElementById('input-field');
const loading = document.getElementById('loading');
const songResults = document.getElementById('song-results');

// 모드 변경
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        songSearch.style.display = currentMode === MODE.SONG ? 'block' : 'none';
        resetTest();
        if(currentMode !== MODE.SONG) {
            currentText = getRandomSample(currentMode);
            textDisplay.textContent = currentText;
            inputField.disabled = false;
        } else {
            textDisplay.textContent = '';
            inputField.disabled = true;
        }
    });
});

// 한글/영어 랜덤 문장
function getRandomSample(mode) {
    const arr = sampleTexts[mode];
    return arr[Math.floor(Math.random() * arr.length)];
}

// 노래 검색(뮤직스매치 API 프록시 활용)
document.getElementById('search-lyrics').addEventListener('click', async () => {
    const query = document.getElementById('song-title').value.trim();
    songResults.innerHTML = '';
    if(!query) {
        alert('노래 제목을 입력하세요!');
        return;
    }
    loading.style.display = 'block';
    try {
        // MusicMatch API 프록시 (https://musicmatch-api.vercel.app/)
        const res = await fetch(`https://musicmatch-api.vercel.app/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if(data.result && data.result.length > 0) {
            data.result.slice(0, 10).forEach(song => {
                const btn = document.createElement('button');
                btn.className = 'song-result-btn';
                btn.textContent = `${song.title} - ${song.artist}`;
                btn.onclick = async () => {
                    loading.style.display = 'block';
                    try {
                        const lyricsRes = await fetch(`https://musicmatch-api.vercel.app/lyrics?track_id=${song.id}`);
                        const lyricsData = await lyricsRes.json();
                        if(lyricsData.lyrics) {
                            currentText = lyricsData.lyrics.replace(/(\r\n|\n|\r)/gm, "\n");
                            textDisplay.textContent = currentText;
                            inputField.disabled = false;
                            resetTest();
                        } else {
                            alert('가사를 찾을 수 없습니다!');
                        }
                    } catch (e) {
                        alert('가사 불러오기 실패!');
                    }
                    loading.style.display = 'none';
                };
                songResults.appendChild(btn);
            });
        } else {
            songResults.innerHTML = '<div style="color:#f44336;">검색 결과가 없습니다.</div>';
        }
    } catch (error) {
        songResults.innerHTML = '<div style="color:#f44336;">검색 실패!</div>';
    }
    loading.style.display = 'none';
});

// 테스트 시작 및 통계
inputField.addEventListener('input', () => {
    if(!startTime) startTime = Date.now();
    const typed = inputField.value;
    totalChars = typed.length;
    correctChars = 0; errors = 0;
    for(let i = 0; i < typed.length; i++) {
        if(typed[i] === currentText[i]) correctChars++;
        else errors++;
    }
    const elapsed = (Date.now() - startTime) / 60000;
    const wpm = elapsed > 0 ? Math.round((correctChars / 5) / elapsed) : 0;
    const accuracy = totalChars === 0 ? 100 : Math.round((correctChars / totalChars) * 100);
    document.getElementById('wpm').textContent = wpm;
    document.getElementById('accuracy').textContent = accuracy;
    document.getElementById('errors').textContent = errors;
});

// 재시작
document.getElementById('restart-btn').addEventListener('click', resetTest);

function resetTest() {
    inputField.value = '';
    inputField.disabled = currentMode === MODE.SONG && !currentText;
    startTime = null;
    totalChars = correctChars = errors = 0;
    document.getElementById('wpm').textContent = 0;
    document.getElementById('accuracy').textContent = 100;
    document.getElementById('errors').textContent = 0;
}

// 초기 설정
window.onload = () => {
    currentText = getRandomSample(MODE.KO);
    textDisplay.textContent = currentText;
    inputField.disabled = false;
};
