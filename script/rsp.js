function playRSP(userChoice) {
    const choices = ['가위', '바위', '보'];
    // 0, 1, 2 중 하나의 정수를 무작위 추출하여 컴퓨터 패 결정
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";
    
    if (userChoice === computerChoice) {
        result = `🤝 비겼습니다! (나: ${userChoice} / 상대: ${computerChoice})`;
    } else if (
        (userChoice === '가위' && computerChoice === '보') ||
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위')
    ) {
        result = `🎉 승리! (나: ${userChoice} / 상대: ${computerChoice})`;
    } else {
        result = `💀 패배.. (나: ${userChoice} / 상대: ${computerChoice})`;
    }
    
    // 화면의 결과 문구 텍스트 업데이트
    document.getElementById('rsp-result').innerText = result;
}