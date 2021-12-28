let getName = prompt("Adınızı giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${getName ? getName: "***"}`

let myClock = document.querySelector("#myClock")

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
myClock.innerHTML = showTime()



