const clock = document.querySelector("h2#clock")

// 새로운 시각으로 갱신한다.
function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 함수를 일정 간격으로 실행
setInterval(getClock, 1000);

// padStart(최대 길이, 채워 넣을 문자열) : 문자열의 길이가 최대 길이 미만이면 2번째 인자의 문자열을 그 길이까지 채워넣는다.