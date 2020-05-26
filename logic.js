function printDate() {
    document.getElementById("nowTime").innerHTML = Date()
}

function getUserInfo() {
    var user = window.prompt("이름을 입력 해주세요.", "홍길동")
    alert(`${user}님 환영합니다!`)
}