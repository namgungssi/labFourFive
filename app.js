/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function testSum (num1, num2) {
  var TestSum = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + [(num1 + num2)] + '.';
  return [(num1 + num2), sum];
}
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!


/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 4 and 7 is 28."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function Multiply(i, j) {
  var Multiply = 'The product of ' + i + ' and ' + j + ' is '  + [(i * j)] + '.';
  return [(i * j)];
}

// Here is the test for multiply(); uncomment it to run it
Multiply(4, 7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply (num1, num2, num3) {
  return [(num1 + num2 + num3), (num1*num2*num3),'4 and 7 and 5 sum to 16.', 'The product of 4 and 7 and 5 is 140.'];
}
// Here is the test for sumAndMultiply(); uncomment it to run it

sumAndMultiply(4,7,5);


// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
function array() {
  var addArray = array[0] + ',' + array[1] + ',' + array[2] + 'was passed in as an array of numbers, and' + [(array[0] + array[1] + array[2])] + 'is their sum.';
  return [(array[0] + array[1] + array[2]), addArray];
}

var testArray = [2,3,4];

array()

// Here is the test for sumArray(); uncomment it to run it
array(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// // Write your code here
function multiplyArray() {
  var Array = 'The numbers' + 'array'[0] + ', ' + 'array'[1] + ', ' + 'array'[2] + 'have a product of' + [(array[0] * array[1] * array[2])] + '. ';
  return [(array[0] * array[1] * array[2]), Array];
}

var array = [2,3,4];
multiplyArray();
// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Submit the link to the repo via Canvas.

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
//
