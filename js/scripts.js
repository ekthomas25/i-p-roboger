function beepBoop(number) {
  let numberArray = [];
  if (!Number(number)) {
    numberArray = NaN;
  }
  for (let i = 0; i < number+1; i += 1) {
    numberArray.push(i);
  } return numberArray;
}