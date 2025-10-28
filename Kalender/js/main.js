const days = document.querySelector('.days');

let currentDate = new Date(2025, 6);

const monthTitle = document.getElementById('month-title');

function updateMonthTitle() {
    if (monthTitle) {
        monthTitle.textContent = currentDate.toLocaleString(undefined, { month: 'long', year: 'numeric' });
    }
}


const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

function nextMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    renderCalendar();
    updateMonthTitle();
}

function prevMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    renderCalendar();
    updateMonthTitle();
}

function renderCalendar() {
    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    if (firstDayOfMonth == 0) firstDayOfMonth = 7;
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        const emptyDay = document.createElement("li");
        emptyDay.classList.add("empty");
        days.appendChild(emptyDay);
    }

    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1 - 1);
    const numberOfDays = lastDayOfMonth.getDate();

    for (let i = 0; i < numberOfDays; i++) {
        const day = document.createElement('li');
        day.classList.add('day');
        day.textContent = i;
        days.appendChild(day);
    }
}
renderCalendar();
updateMonthTitle();

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);