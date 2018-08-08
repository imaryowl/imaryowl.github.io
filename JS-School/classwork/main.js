const str = "aaa bbb ccc";
let date = "2025-12-31";

console.log(str.substr(3, 4));
console.log(str.substring(3, 7));
console.log(str.slice(3, 8));

console.log(date = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4));

function flip(string) {
  return string.split("-").reverse().join("/");
}

console.log(flip(date));


