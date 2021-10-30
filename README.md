# Mr. Roboger's Neighborhood

#### By _Liz Thomas_

#### _A web application that takes a number from the user and returns a range of numbers starting with 0 to the user inputted number and adds fun words when certain numbers occur._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery 3.6.0._

## Description


Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted."
Code: 
beepBoop(0);
Expected Output: [0]

Test: "It should return an array with a 1 if the number 1 is inputted."
Code:
beepBoop(1);
Expected Output: [1]

Test: "It should return an array that increments from 0 when 1 is inputted."
Code:
beepBoop(1);
Expected Output: [0, 1]

Test: "If the inputted value is NaN, it will return NaN"
Code: beepBoop("pizza")
Expected Output: NaN


Test: "If the array contains the number 1 it will return true"
Code: beepBoop(1);
Expected Output: true

Test: "If the array does not contain the number 1 it will return false"
Code: beepBoop(0);
Expected Output: false

Test: "If the array contains the number 2 it will return true"
Code: beepBoop(2);
Expected Output: true

Test: "It will turn the integer elements into strings"
Code:
beepBoop(10);
Expected Output: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

Test: "It replaces any instance of 1 in the array with 'Beep!'."
Code:
beepBoop(10);
Expected Output: ['0', 'Beep!', '2', '3', '4', '5', '6', '7', '8', '9', 'Beep!']

Test: "It replaces any instance of 2 in the array with 'Boop!'."
Code:
beepBoop(12);
Expected Output: ['0', 'Beep!', 'Boop!', '3', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!']