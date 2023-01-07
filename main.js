window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const hour = date.getHours()
    const dateYear = document.getElementById('dateTime');
    const time =document.getElementById('time');
    const greeting = document.getElementById('greeting');
    dateYear.innerHTML = `
        ${date.getMonth()+1}:${date.getDate()}:${date.getFullYear()}
    `
    time.innerHTML = `
        ${hour}:${date.getMinutes()}
    `
    if(hour >= 0 && hour <= 11){
        greeting.innerHTML = "GoodMorning"
    }else if(hour >= 12 && hour <= 17) {
        greeting.innerHTML = "GoodAfternoon"
    }else{
        greeting.innerHTML = "GoodEvening"
    }

})
