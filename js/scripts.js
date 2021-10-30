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
  } let stringArray = numberArray.join(" ").split(" ");
  stringArray.forEach(function(element, index) {
    if (element.includes('2') || element.includes('2') && element.includes('1')) {
      stringArray.splice(index, 1, "Boop!");
    } else if (element.includes('1')) {
      stringArray.splice(index, 1, "Beep!");
    }
  });
    return stringArray;
}