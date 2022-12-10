import counter from "./counter.js";

var dayElement = document.querySelector("#day");
var hourElement = document.querySelector("#hour");
var minuteElement = document.querySelector("#minute");
var secondElement = document.querySelector("#second");
var value_outElement = document.querySelector("#value-out");
var value_tk = document.querySelector("#value-tk");
value_tk = value_tk.value;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calculateMoney() {
   value_tk = document.querySelector("#value-tk").value;
   console.log(value_tk);
}
const calculate_date = () => {
  var time, day, hour, minute, second;

  setInterval(() => {
    time = counter();
    //console.log(time);
    day = time.day;
    hour = time.hour;
    minute = time.min;
    second = time.sec;

    dayElement.innerHTML = day;
    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;

    var valueMoney = value_tk * day;
    valueMoney = numberWithCommas(valueMoney);
    
    value_outElement.innerHTML =
      valueMoney + '<small style="font-size: 1.5rem;"> VND</small>';
  }, 100);
};

calculate_date();
document.querySelector("#value-tk").addEventListener('keyup', calculateMoney)