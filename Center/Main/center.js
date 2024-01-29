const time = document.querySelector('.time');

// 시스템 시간을 가져와서 time에 넣어준다.
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

    time.innerText =
        `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

// 시간을 1초마다 갱신해준다.
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

const cardList = document.querySelectorAll('.card');
const content = document.querySelector('.content');
const container = document.querySelector('.container');
cardList.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(100px) scale(1.1)';
    card.style.cursor = 'pointer';
    card.style.filter = 'brightness(1.2)';
    content.style.filter = 'blur(3px)';
    container.style.backgroundColor = card.style.backgroundColor;
  });
});

cardList.forEach((card) => {
  card.addEventListener('click', () => {
    card.style.transform = 'translateY(-300px) scale(2)';
    card.style.boxShadow = '0 0 0 0 black';
    card.style.margin = '100px';
    card.style.filter = 'brightness(1.5)';
    content.style.filter = 'blur(10px)';
  });
});

cardList.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(200px)';
    card.style.boxShadow = 'none';
    card.style.margin = '0px';
    card.style.marginLeft = '80px';
    card.style.filter = 'brightness(1)';
    if (card === cardList[0]) {
      card.style.marginLeft = '0px';
    }
    content.style.filter = 'blur(0px)';
    container.style.backgroundColor = 'white';
  });
});

const apikey = "464a99ee7e376f4224fc32131c2acdf8";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl + "&appid=" + apikey);
  var data = await response.json();

  console.log(data);

  document.querySelector('.location').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = '온도 : ' + parseInt(data.main.temp) + '℃';
  document.querySelector('.wth').innerHTML = '날씨 : ' + data.weather[0].main;
  document.querySelector('.feel').innerHTML = '체감온도 : ' + parseInt(data.main.feels_like) + '℃';
  document.querySelector('.wind').innerHTML = '풍속 : ' + parseInt(data.wind.speed) + ' m/s';
  document.querySelector('.cloud').innerHTML = '구름 : ' + data.clouds.all + '%';
  document.querySelector('.humidity').innerHTML = '습도 : ' + data.main.humidity + '%';
  document.querySelector('.icon').innerHTML = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" />';
}

checkWeather();

// 1월 ~ 12월 까지의 월을 약자로 배열을 만들어준다.
const monthList = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
];

// 1일 ~ 31일 까지의 일을 배열로 만들어준다.
const dayList = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
];

const input = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');

input.addEventListener('focus', () => {
  input.placeholder = '';
});

input.addEventListener('blur', () => {
  input.placeholder = 'search';
});

searchBtn.addEventListener('click', () => {
  const searchValue = input.value;
  if (searchValue === '') {
    alert('검색어를 입력해주세요.');
    return;
  }
  input.value = '';
    window.open(`https://www.google.com/search?q=${searchValue}`);
});

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    searchBtn.click();
  }
});

const list = document.querySelector('.list');

list.addEventListener('click', (e) => {
  window.alert('준비중입니다.');
});


const not = document.querySelectorAll('.not');

not.forEach((not) => {
    not.addEventListener('click', () => {
         window.alert('준비중입니다.');
    });
});