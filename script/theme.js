// 1. 페이지가 로드될 때, 기존에 저장된 테마가 있는지 확인
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeButton = document.getElementById('theme-toggle');
    
    // 만약 기존에 'light'라고 저장되어 있었다면 라이트모드 켜기
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeButton) themeButton.innerText = "🌙 다크모드";
    } else {
        // 저장된 게 없거나 dark라면 기본 상태(다크모드) 유지
        if (themeButton) themeButton.innerText = "☀️ 라이트모드";
    }
});

// 2. 테마 토글 버튼 클릭 이벤트
const themeButton = document.getElementById('theme-toggle');
if (themeButton) {
    themeButton.addEventListener('click', function() {
        // body 태그에 light-mode 클래스를 꼈다 뺐다 처리
        document.body.classList.toggle('light-mode');
        
        // 상태를 체크하고 localStorage에 기록 저장 및 버튼 문구 변경
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light'); // 브라우저에 'light' 저장
            this.innerText = "🌙 다크모드";
        } else {
            localStorage.setItem('theme', 'dark');  // 브라우저에 'dark' 저장
            this.innerText = "☀️ 라이트모드";
        }
    });
}