
let number1 = parseInt(prompt('Introduce el primer número' ));
let number2 = parseInt(prompt('Introduce el segundo número' ));

do {
  if(number2 == number1) {
    number2 = parseInt(prompt('Introduce otra vez el número 2' ));
  } 
  
  
} while(number2 >= number1 && number2 <= number1);
  console.log(`Los números introducidos son: ${number1} y ${number2}`);

  if(number1 > number2) { 
  console.log(`EL NÚMERO MAYOR ES EL: ${number1}` );
  } else if(number2 > number1) {
  console.log(`EL NÚMERO MAYOR ES EL: ${number2}` );

}





