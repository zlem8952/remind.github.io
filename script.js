function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // 실제로는 서버에서 확인해야 하지만, 여기서는 간단히 처리합니다.
    if (username === "user" && password === "password") {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert("로그인 실패. 사용자 이름 또는 비밀번호를 확인해주세요.");
    }
}

function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}
