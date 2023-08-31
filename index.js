let readlineSync = require('readline-sync');

let n = readlineSync.question("Enter number of rows: ")

for (let i = 1; i <= n; i++) {

  let spc = "";
  for (let j = 1; j <= (n - i); j++) {
    spc += " ";
  }
  let str = "";
  for (let j = 1; j <= ((2 * i) - 1); j++) {
    str += "*";
  }

  console.log(spc + str)
}

for (let i = n; i >= 1; i--) {

  let spc1 = "";
  for (let j = 1; j <= ((n - i)+1); j++) {
    spc1 += " ";
  }
  let str1 = "";
  for (let j = 1; j <= ((2 * i) - 1); j++) {
    str1 += "*";
  }

  console.log(spc1 + str1)
}