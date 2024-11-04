function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

let year = 2024;
let month = 8; 
let lastDay = getLastDayOfMonth(year, month);

document.getElementById("result").innerText = `Останній день місяця: ${lastDay}`;
