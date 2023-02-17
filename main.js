window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const dateYear = document.getElementById('dateTime');
    const time =document.getElementById('time');
    const greeting = document.getElementById('greeting');
    
    setInterval(() => {
     hour < 10 ? '0'+hour : hour
    min < 10 ? '0'+min : min
    sec < 10 ? '0'+sec : sec
    dateYear.innerHTML = `
        ${date.getMonth()+1}:${date.getDate()}:${date.getFullYear()}
    `
    time.innerHTML = `
        ${hour}:${min}:${sec}
    `
    if(hour >= 0 && hour <= 11){
        greeting.innerHTML = "GoodMorning"
    }else if(hour >= 12 && hour <= 17) {
        greeting.innerHTML = "GoodAfternoon"
    }else{
        greeting.innerHTML = "GoodEvening"
    }
    
    },1000)
   

})
