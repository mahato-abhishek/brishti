export function formatAMPM(time: string) {
  const date = new Date(time);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
  let strTime = hours + ":" + minutesStr + " " + ampm;
  return strTime;
}
export function dayNightCheck(time: string) {
  const date = new Date(time);
  let hours = date.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  return ampm;
}
