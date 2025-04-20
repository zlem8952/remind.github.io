let startTime, timeoutId;
let results = [];
const reactionArea = document.getElementById('reaction-area');
const instruction = document.getElementById('instruction');
const currentSpan = document.getElementById('current');
const averageSpan = document.getElementById('average');
const resetBtn = document.getElementById('reset-btn');

function getRandomDelay(min=1000, max=3000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTest() {
    reactionArea.classList.remove('ready', 'too-fast');
    instruction.textContent = '화면이 초록색으로 변하면 클릭하세요!';
    reactionArea.classList.add('waiting');
    
    timeoutId = setTimeout(() => {
        reactionArea.classList.remove('waiting');
        reactionArea.classList.add('ready');
        instruction.textContent = '지금 클릭!';
        startTime = Date.now();
    }, getRandomDelay());
}

function calculateAverage() {
    return results.length > 0 
        ? Math.round(results.reduce((a,b) => a + b) / results.length)
        : 0;
}

reactionArea.addEventListener('click', () => {
    if (reactionArea.classList.contains('waiting')) {
        clearTimeout(timeoutId);
        reactionArea.classList.remove('waiting');
        reactionArea.classList.add('too-fast');
        instruction.textContent = '너무 빨랐습니다! 다시 시도하세요.';
        setTimeout(() => {
            reactionArea.classList.remove('too-fast');
            instruction.textContent = '시작하려면 화면을 클릭하세요';
        }, 1000);
        return;
    }

    if (reactionArea.classList.contains('ready')) {
        const reactionTime = Date.now() - startTime;
        results.push(reactionTime);
        
        currentSpan.textContent = reactionTime;
        averageSpan.textContent = calculateAverage();
        
        reactionArea.classList.remove('ready');
        instruction.textContent = '다시 시작하려면 클릭하세요';
    } else if (!reactionArea.classList.contains('too-fast')) {
        startTest();
    }
});

resetBtn.addEventListener('click', () => {
    results = [];
    currentSpan.textContent = '-';
    averageSpan.textContent = '-';
});
