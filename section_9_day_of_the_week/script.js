let date = new Date();
let dayNumber = date.getDay();
let day;
let quote;

switch (dayNumber) {
  case 0:
    day = "Sunday";
    quote = "Relax, it's Sunday!";
    break;
  case 1:
    day = "Monday";
    quote = "Start your week with energy!";
    break;
  case 2:
    day = "Tuesday";
    quote = "Keep going, it's Tuesday!";
    break;

  case 3:
    day = "Wednesday";
    quote = "Halfway through the week!";
    break;
  case 4:
    day = "Thursday";
    quote = "Almost there, it's Thursday!";
    break;
  case 5:
    day = "Friday";
    quote = "It's Friday, the weekend is near!";
    break;
  case 6:
    day = "Saturday";
    quote = "Time to party!";
    break;
}
document.getElementById("weekday").innerText = day;
document.getElementById("quote").innerText = quote;
