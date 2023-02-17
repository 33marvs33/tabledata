window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    const dateYear = document.getElementById('dateTime');
    const time =document.getElementById('time');
    const greeting = document.getElementById('greeting');
    
    hour < 10 ? '0'+hour : hour
    min < 10 ? '0'+min : min
    hour < 10 ? '0'+hour : hour
    dateYear.innerHTML = `
        ${date.getMonth()+1}:${date.getDate()}:${date.getFullYear()}
    `
    time.innerHTML = `
        ${hour}:${min}
    `
    if(hour >= 0 && hour <= 11){
        greeting.innerHTML = "GoodMorning"
    }else if(hour >= 12 && hour <= 17) {
        greeting.innerHTML = "GoodAfternoon"
    }else{
        greeting.innerHTML = "GoodEvening"
    }

})
