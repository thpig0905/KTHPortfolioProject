const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const time = document.querySelector('#time');

if (canvas) {
    setup();
}

function setup() {
    canvas.widht = 400;
    canvas.height = 400;

    if(!ctx) {
        return false;
    }
    run();
}

function run() {
    ctx.clearRect(0, 0, 500, 500);
    frame();
    center();
    dots();

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    hourBar(hour);
    minuteBar(minute);
    secondeBar(second);

    window.requestAnimationFrame(run);
    timeText();
}

function timeText() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    time.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second}`;
}



function frame() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.arc(150, 150, 140, 0, 360, false);
    ctx.stroke();
}

function center() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.arc(150, 150, 5, 0, 360, false);
    ctx.stroke();
    ctx.fill();
}

function dots () {
    const dotCount = 12 * 5
    const angle = 360 / dotCount

    for (let i = 0; i < dotCount; i++) {
        const n = angle * i
        const radian = (n/180) * Math.PI * -1 // radian calculate

        ctx.beginPath()
        ctx.strokeStyle = "gray"

        let length = 128

        if (n % 90 === 0) {
            length = 118
            ctx.lineWidth = 3
        } else if (n % 30 === 0) {
            length = 123
            ctx.lineWidth = 2
        } else {
            ctx.lineWidth = 1
        }

        const x1 = Math.cos(radian) * 140 + 150
        const y1 = Math.sin(radian) * 140 + 150

        const x2 = Math.cos(radian) * length + 150
        const y2 = Math.sin(radian) * length + 150

        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
        ctx.fill()
    }
}

function onDrawHand ({ color = "black", size, width, radian }) {
    const x = Math.cos(radian) * size;
    const y = Math.sin(radian) * size;

    ctx.beginPath();
    ctx.strokeStyle = "black"
    if (color) {
        ctx.strokeStyle = color
    }
    ctx.moveTo(150, 150) // 중심
    ctx.lineTo(150 + x, 150 + y) // 중심으로 부터 위치
    ctx.lineWidth = width
    ctx.stroke()
}

function hourBar (hour) {
    const radian = ((hour * -30 + 90)/180) * Math.PI * -1

    onDrawHand({
        size: 80,
        width: 6,
        radian
    })
}

function minuteBar (minute) {
    const radian = ((minute * -6 + 90)/180) * Math.PI * -1

    onDrawHand({
        size: 120,
        width: 5,
        radian
    })
}

function secondeBar (second) {
    const radian = ((second * -6 + 90)/180) * Math.PI * -1

    onDrawHand({
        size: 100,
        width: 3,
        color: "red",
        radian
    })
}

const body = document.querySelector('body');

body.classList.add('change');