function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // API로 부터 날씨를 받아온다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(resonse => resonse.json())
    .then(data => {
        const location = document.querySelector("#weather span:nth-child(1)");
        location.innerText = data.name; // 지역 이름
        const weather = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = data.weather[0].main; // 날씨
        const temp = document.querySelector("#weather span:nth-child(3)");
        temp.innerText = data.main.temp; // 기온
    });
}

function onGeoFail(){
    alert("위치 정보를 불러오는 데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);