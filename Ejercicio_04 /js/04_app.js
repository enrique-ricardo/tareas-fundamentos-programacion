

function rollDice(){
  const MAX_NUMBER = 6;
  const MIN_NUMBER = 1;
  let aleatoryNumberDice = [];
  let aleatoryNumber;
  let sumAleatories = 0;

    for(let i = 0; i < 2; i++ ) {

      aleatoryNumber = Math.floor (Math.random() * (MAX_NUMBER - MIN_NUMBER + 1 ) + MIN_NUMBER );
      aleatoryNumberDice.push(aleatoryNumber);
      sumAleatories += aleatoryNumberDice[i];

    }

    console.log(aleatoryNumberDice);
    return(sumAleatories);

  }


  function averageOfArray(array) {
    let sum = array[0];
    for (let i = 1; i < array.length; i++ ) {
      sum += array[i];

    }
    const averageOfNumbers = (sum/array.length).toFixed(2);
    return(averageOfNumbers);
  }

export {rollDice, averageOfArray}