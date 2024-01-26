const currentDate = document.querySelector('.current-date'),
daysTag = document.querySelector('.days'),
prevNextMonthIcons = document.querySelectorAll('.icons span');

let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth();

const month = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'Octobor', 'November', 'December']

const renderCalendar = () => {
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDate(),
        lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = '';

    for(let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for(let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
         && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${month[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextMonthIcons.forEach(icon => {
  icon.addEventListener('click', () => {
        currentMonth = icon.id === 'prev' ? currentMonth - 1 : currentMonth + 1;
        if(currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date.setMonth(currentMonth);
        }
        renderCalendar();
  });
})

const daylist = document.querySelectorAll('.days li');
const body = document.querySelector('body');
daylist.forEach(day => {
    day.addEventListener('click', () => {
        body.innerHTML = `<div class="container"></div>`;

    })
})