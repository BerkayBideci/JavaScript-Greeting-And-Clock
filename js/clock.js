let userName = prompt("Lütfen İsminizi Giriniz:");



if (userName > "0"){
    let userNameInfo = document.querySelector("#myName")
    userNameInfo.innerHTML = `${userName}`
} else {
    alert("Bilgi Geçersiz")
    location.reload();
}

function showTime() {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = days[today.getDay()];
    hours = (hours < 10) ? `${0}${hours}` : hours
    minutes = (minutes < 10) ? `${0}${minutes}` : minutes
    seconds= (seconds < 10) ? `${0}${seconds}` : seconds
    document.querySelector("#myClock").innerHTML = `${hours}: ${minutes}: ${seconds} ${day}`
    
}



setInterval(showTime, 1000);