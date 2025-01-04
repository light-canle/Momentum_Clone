const quotes = [
    {
        quote : "하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.",
        author : "호레스",
    },
    {
        quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author : "괴테",
    },
    {
        quote : "내일이란 오늘의 다른 이름일 뿐이다.",
        author : "윌리엄 포크너",
    },
    {
        quote : "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다.",
        author : "머더 테레사",
    },
    {
        quote : "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author : "이소룡",
    },
    {
        quote : "오늘 일어나는 것이 무엇이든 간에 참고 견디라. 이것이 내일을 찬미케 하는 유일한 길이다.",
        author : "R. L 캘리엔",
    },
    {
        quote : "오늘을 붙들어라. 되도록 이면 내일에 의지하지 말라. 그날 그날이 일 년 중에서 최선의 날이다.",
        author : "에머슨",
    },
    {
        quote : "고통이 남기고 간 뒤를 보라. 고난이 지나면 반드시 기쁨이 스며든다.",
        author : "괴테",
    },
    {
        quote : "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author : "톨스토이",
    },
    {
        quote : "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
        author : "롱펠로",
    },
    {
        quote : "나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은것은 그 사람의 신념이 늙었느냐 젊었느냐 하는 데 있다.",
        author : "맥아더",
    },
    {
        quote : "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
        author : "에디슨",
    },
    {
        quote : "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
        author : "맹자",
    },
    {
        quote : "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야 한다.",
        author : "안창호",
    },
];

// 출처 : https://cloudnine9.tistory.com/170

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;