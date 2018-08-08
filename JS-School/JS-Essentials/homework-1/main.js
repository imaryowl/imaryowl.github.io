const name = prompt("ФИО");
const date = prompt("Дата Рождения");
const city = prompt("Место жительства");
const userName = document.getElementById("userName");
const birthDate = document.getElementById("birthDate");
const userLocation = document.getElementById("userLocation");

if (name && date && city) {
  userName.innerText = name;
  birthDate.innerText = "Дата Рождения: " + date;
  userLocation.innerText = "Место жительства: " + city;
} else {
  alert("Заполните все поля!");
}
