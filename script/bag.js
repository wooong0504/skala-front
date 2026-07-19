function showMyBag() {
    // 가방 내부 아이템 데이터 바인딩 (몽골 여행 컨셉에 맞춰 품목 변경)
    var items = [
        { name: "보조배터리 🔋", count: 1 },
        { name: "스마트폰 📱", count: 1 },
        { name: "지갑 💳", count: 1 },
        { name: "침낭 ⛺", count: 1 }
    ];

    // 출력 문자열 빌드 시작
    var output = "🎒 [MY BAG LIST]\n=======================\n";

    // for...in 반복문으로 인덱스 순회하며 데이터 추출
    for (var idx in items) {
        var currentItem = items[idx];
        output += "• " + currentItem.name + " (" + currentItem.count + "개)\n";
    }

    output += "=======================\n";
    output += "수납된 아이템 종류: 총 " + items.length + "개 품목";

    // 브라우저 경고창으로 최종 결과 출력
    alert(output);
}