function beepBoop(number) {
  let numberArray = [];
  if (typeof number !== 'number') {
    return NaN;
  }
  if (number === 0) {
    numberArray;
  }
  for (let i = 0; i < number+1; i += 1) {
    numberArray.push(i);
  } return numberArray;
}

