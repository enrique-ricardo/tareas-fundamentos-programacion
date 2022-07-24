

const arrayNumbers = [12, 42, 99, 87, 63, 101, 145, 320];
let oddSum = 0;
let numbersGreaterHundred= 0;
  console.log(arrayNumbers);

  for (let i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] % 2 ==1) {
      console.log(`Es impar: ${arrayNumbers[i]}`);
      oddSum++;
    } 
    if(arrayNumbers[i] > 100) {
      numbersGreaterHundred++;
    }

  }
  console.log(`TOTAL DE NÚMEROS IMPARES: ${oddSum} `);
  console.log(`TOTAL DE NÚMEROS MAYORES QUE CIÉN: ${numbersGreaterHundred} `);



