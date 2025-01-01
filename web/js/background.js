const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img HTML 요소 생성
const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;
// body에 이미지를 넣음
document.body.appendChild(backgroundImage);
