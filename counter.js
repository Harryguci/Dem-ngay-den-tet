var tet = new Date("2023-01-22T00:00:00");
var oneDay = 86400000;
var oneHour = oneDay / 24;
var oneMinute = oneHour / 60;
var oneSecond = oneMinute / 60;

export default function counter() {
  var temp = new Date(tet - Date.now());
  temp = temp.getTime();

  return {
    // time: temp,
    day: parseInt(temp / oneDay),
    hour: parseInt(temp / oneHour),
    min: parseInt(temp / oneMinute),
    sec: parseInt(temp / oneSecond),
  };
}
