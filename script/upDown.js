// HTML에서 onclick="startGame()"을 호출하면 이 상자 안의 코드가 비로소 실행됩니다.
function startGame() {

    // 1. 게임이 시작될 때마다 새롭게 무작위 비밀 숫자를 고릅니다.
    var computerNum = Math.floor(Math.random() * 100) + 1; //0~100 랜덤
    var count = 0;

    // 치트키 콘솔로그 (F12 콘솔 탭에서 확인 가능)
    console.log("이번 판 컴퓨터의 비밀 숫자: " + computerNum);

    // 2. 본격적인 게임 무한 루프 시작
    while (true) {
        // prompt 창의 입력값을 문자열 그대로 먼저 받습니다.
        var userInput = prompt("1부터 100 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
        
        // [해결] 취소 버튼을 누르거나 창을 닫았을 때만 정확히 0이 아닌 null로 걸러냅니다.
        if (userInput === null) {
            alert("게임이 취소되었습니다.");
            break;
        }

        // 취소가 아님이 확인되면 그때 숫자로 변환합니다.
        var userGuess = Number(userInput);

        // 문자를 입력했거나 빈 칸으로 확인을 누른 경우 방어
        if (isNaN(userGuess) || userInput.trim() === "") {
            alert("⚠️ 올바른 숫자를 입력하지 않으셨습니다. 다시 시도해 주세요.");
            continue; 
        }

        // 정상적인 숫자 입력 시에만 도전 횟수 증가
        count = count + 1;

        if (userGuess === computerNum) {
            alert("🎉 정답입니다! 축하합니다!\n👉 도전 횟수: " + count + "번 만에 맞추셨습니다.");
            break; 
            
        } else if (userGuess > computerNum) {
            alert("🔽 Down! 더 작은 숫자를 입력해 보세요. (현재 " + count + "회 도전 중)");
            
        } else {
            // 문자와 큰 숫자가 다 걸러졌으므로 작은 숫자(Up) 케이스만 남음
            alert("🔼 Up! 더 큰 숫자를 입력해 보세요. (현재 " + count + "회 도전 중)");
        }
    }
}