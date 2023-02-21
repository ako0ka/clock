const container = document.querySelector(".container")
console.log(container);

function showTime() {
    let date = new Date

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let formatedTime = formatTime(hours)

    hours = checkTime(hours)

    console.log(date, hours, minutes, seconds);

container.innerHTML = `${hours}:${minutes}:${seconds}:${formatedTime}`
}

function checkTime (time) {
    if(time > 12){
        time = time - 12
    }

   if(time === 0) {
    time = 12
   }
    return time
}

function formatTime(time) {
let format = "AM"
if(time >= 12) {
    format = "PM"
}
return format
}

showTime()

setInterval(showTime, 1000)