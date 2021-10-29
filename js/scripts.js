function beepBoop(number) {
  let numberArray = [];
  if (typeof number !== 'number') {
    return NaN;
  }
  if (number === 0) {
    numberArray;
  }
  let numCount = 0
  for (let i = 0; i < number+1; i += 1) {
    numberArray.push(i);
  } if (numberArray.includes(1) && numberArray.includes(2)) {
    return true;
  } return false
}
