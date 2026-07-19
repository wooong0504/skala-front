function checkGrade() {
    // 평가 과목 배열 정의 (오타 수정 및 대문자 통일)
    var subjectList = ["HTML", "CSS", "JavaScript"];
    var scoreSum = 0;

    // 과목 수만큼 루프를 돌며 점수 입력 받기
    for (var i = 0; i < subjectList.length; i++) {
        var userInput = prompt(subjectList[i] + " 점수를 입력하세요. (0~100)");
        var parsedScore = Number(userInput);

        // 입력 취소 및 공백, 숫자가 아닌 경우 예외 처리
        if (userInput === null || userInput.trim() === "" || isNaN(parsedScore)) {
            alert("입력이 올바르지 않아 성적 계산을 종료합니다.");
            return;
        }

        scoreSum += parsedScore;
    }

    // 평균 점수 산출
    var avgScore = scoreSum / subjectList.length;

    // 60점 기준 합불 판정 및 텍스트 할당
    var statusText = "";
    if (avgScore >= 60) {
        statusText = "합격 (Pass) 👍";
    } else {
        statusText = "불합격 (Fail) 📉";
    }

    // 최종 결과 메시지 포맷 설정 (소수점 둘째 자리까지 출력하도록 커스텀)
    var report = "[ 📊 성적 점검 결과 ]\n";
    report += "-------------------------\n";
    report += "• 총점: " + scoreSum + "점\n";
    report += "• 평균: " + avgScore.toFixed(2) + "점\n";
    report += "-------------------------\n";
    report += "• 최종 결과: " + statusText;

    alert(report);
}