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
_This web application is a form that requires a number to be inputted. It takes the number that was inputted and spits out a range that begins at 0 and ends at the number that was submitted. When a number in the range contains a 1, it is replaced with "Beep!". When a number in the range contains a 2, it is replaced with "Boop!", this will override any numbers that also contain the number 1, (ie 12 will be "Boop!", not "Beep!"). When a number in the range contains a 3, it is replaced with "Won't you be my neighbor?", this will override any numbers that also contain either 1 or 2._

## Setup/Installation Requirements

This webpage can be viewed either one of two ways:
1. _By clicking on or copying and pasting this address into your browser: [https://ekthomas25.github.io/i-p-roboger/](https://ekthomas25.github.io/i-p-roboger/)_

2. _By creating a GitHub account and cloning this repository to your Desktop_

* #### _Your computer will need to have GIT installed_
* _If you do not currently have GIT installed you will need to follow the directions on GitHub's website for installing and setting up GIT. These can be found [here.](https://docs.github.com/en/get-started/quickstart/set-up-git)_
* _Once you have GIT set up, you will need to open up your terminal and type the command:_

git clone https://github.com/ekthomas25/i-p-roboger.git

* This will clone the repository to your desktop and you will be able to then open the folder labeled "i-p-roboger"
* Open the file named "index.html" in your browser to view this project.

## Known Bugs

* _No known bugs_

## License

_If you have any questions or would like to reach out for any reason, please don't hesitate to send and email to [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com)._

MIT License

Copyright (c) 2021 Elizabeth Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Specs

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

Test: "If there is an instance of both 1 and 2, such as 12, it will be replaced with 'Boop!'."
Code:
beepBoop(12);
Expected Output: ['0', 'Beep!', 'Boop!', '3', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!']

Test: "It replaces any instance of 3 in the array with 'Won't you be my neighbor?'."
Code:
beepBoop(13);
Expected Output: ['0', 'Beep!', 'Boop!', Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It will return the array as a string separated by spaces."
Code:
beepBoop(3);
Expected Output: "0 Beep! Boop! Won't you be my neighbor?"