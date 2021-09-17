// current day and time

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hour}:${minute}`;

// current city
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);
  let h1 = document.querySelector("#cityname");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
    let apiKey = "1e63667f4f920931fdaeaa011d900e3e";
    let city = `${searchInput.value}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// temperature results
function showTemperature(response) {
  console.log(response);
  document.querySelector("#cityname").innerHTML = `${response.data.name}`;
  let currenttemp = document.querySelector("#tempnow");
  currenttemp.innerHTML = Math.round(response.data.main.temp);
}
