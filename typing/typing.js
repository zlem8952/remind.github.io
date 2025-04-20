let currentText = '';
let startTime, timer;
let totalChars = 0, correctChars = 0, errors = 0;
const MODE = { KO: 'ko', EN: 'en', SONG: 'song' };
let currentMode = MODE.KO;

// 요소 선택자
const modeButtons = document.querySelectorAll('.mode-btn');
const songSearch = document.getElementById('song-search');
const textDisplay = document.getElementById('text-display');
const inputField = document.getElementById('input-field');
const loading = document.getElementById('loading');

// 언어 모드 변경
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        
        songSearch.style.display = currentMode === MODE.SONG ? 'block' : 'none';
        resetTest();
        
        if(currentMode !== MODE.SONG) {
            currentText = generateSampleText(currentMode);
            textDisplay.textContent = currentText;
        }
    });
});

// 노래 가사 검색
document.getElementById('search-lyrics').addEventListener('click', async () => {
    const song = document.getElementById('song-title').value;
    const artist = document.getElementById('artist-name').value;
    
    if(!song || !artist) return alert('노래 제목과 가수 이름을 입력하세요!');
    
    loading.style.display = 'block';
    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await response.json();
        
        if(data.lyrics) {
            currentText = data.lyrics.replace(/(\r\n|\n|\r)/gm, "\n");
            textDisplay.textContent = currentText;
            inputField.disabled = false;
        } else {
            alert('가사를 찾을 수 없습니다!');
        }
    } catch (error) {
        alert('가사 검색에 실패했습니다!');
    }
    loading.style.display = 'none';
});

// 테스트 시작
inputField.addEventListener('input', () => {
    if(!startTime) startTime = Date.now();
    
    const typed = inputField.value;
    totalChars = typed.length;
    
    // 오류 계산
    errors = 0;
    for(let i = 0; i < typed.length; i++) {
        if(typed[i] !== currentText[i]) errors++;
        else correctChars++;
    }
    
    // 통계 업데이트
    const elapsed = (Date.now() - startTime) / 60000;
    const wpm = Math.round((correctChars / 5) / elapsed) || 0;
    const accuracy = Math.round((correctChars / totalChars) * 100) || 0;
    
    document.getElementById('wpm').textContent = wpm;
    document.getElementById('accuracy').textContent = accuracy;
    document.getElementById('errors').textContent = errors;
});

// 재시작
document.getElementById('restart-btn').addEventListener('click', resetTest);

function resetTest() {
    inputField.value = '';
    inputField.disabled = currentMode === MODE.SONG;
    startTime = null;
    totalChars = correctChars = errors = 0;
    document.getElementById('wpm').textContent = 0;
    document.getElementById('accuracy').textContent = 100;
    document.getElementById('errors').textContent = 0;
}

// 샘플 텍스트 생성
function generateSampleText(mode) {
    const samples = {
        ko: "타자 연습을 통해 빠른 속도와 정확성을 기를 수 있습니다. 매일 연습하면 분명히 실력이 향상될 것입니다.",
        en: "The quick brown fox jumps over the lazy dog. Practice typing regularly to improve your speed and accuracy."
    };
    return samples[mode];
}

// 초기 설정
window.onload = () => {
    currentText = generateSampleText(MODE.KO);
    textDisplay.textContent = currentText;
};
