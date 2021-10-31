function beepBoop(number) {
  let numberArray = [];
  if (number < 0) {
    return "You need to enter a positive number for this to work :)";
  }
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
    if (element.includes('3')) {
      stringArray.splice(index, 1, "Won't you be my neighbor?");
    } else if (element.includes('2')) {
      stringArray.splice(index, 1, "Boop!");
    } else if (element.includes('1')) {
      stringArray.splice(index, 1, "Beep!");
    }
  });
  return stringArray.join(" ");
}

$(document).ready(function(){
  $("form#beep-form").submit(function(event){
    event.preventDefault();
    const numberInput = parseInt($("#number-input").val());
    const beepBoops = beepBoop(numberInput);
    $("#number-range").html(beepBoops);
    $(".result").show();
  });
});