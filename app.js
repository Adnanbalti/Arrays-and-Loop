/*                  Question-01. 
Declare and initialize an empty multidimensional array.
(Array of arrays)*/

let activaties = [
    ["eat ", 1],
    ["work ", 9],
    ["prayer ", 1],
    ["comunicate ", 1],
    ["social media", 2],
    ["home work", 1],
    ["sleep ", 8],
];
console.table(activaties);

var add = activaties.push(["play game ", 2]);

console.table(add);

activaties.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + "%";
});

console.table(activaties);


/*                  Question-02. 
Declare and initialize a multidimensional array
representing the following matrix:*/

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.table(matrix);


/*                  Question-03. 
Write a program to print numeric counting from 1 to 10.*/


for (var i = 0; i <= 10; i++) {
    console.log(i);
};


/*                  Question-04. 
Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/

var num = prompt("Enter a number to show its multiplication");
var num1 = prompt("Enter length multiplication table");

for (var i = 1; i <= num1; i++) {
    const result = i * num;

    console.log(`${num} * ${i} = ${result}`);
}


/*                  Question-05. 
Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]*/

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let len = fruits.length;

for (var i = 0; i < len; i++) {
    console.log(fruits[i]);
}


/*                  Question-06. 
Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/

//      A
document.write("counting: ")
for (var i = 1; i < 16; i++) {
    var comma = ", ";
    document.write(i + comma);
}

//     B
var num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var revrs = num4.reverse();
document.write("<br>" + "Reverse counting: " + revrs + "<br>");

//      C
document.write("Even: ")
for (var i = 2; i <= 21; i += 2) {
    var comma = ", ";
    document.write(i + comma);
}

//      D
document.write("<br>" + "Odd: ")
for (var i = 1; i <= 19; i += 2) {
    var comma = ",";
    document.write(i + comma);
}

//      E
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
    var comma = ", ";
    document.write(i + "k" + comma + "<br>");
}


/*                  Question-07. 
You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:*/

var bakery_Items = ["cake", "apple pie", "cookie", "chips", "patties"];
var found = prompt("Which item do you want?");

if (found == "cake" || found == "apple pie" || found == "cookie" || found == "patties") {
    document.write(`${found} is aviliable` + "<br>");
}
else {
    document.write(`${found} is not availiable` + "<br>");
}


/*                  Question-08. 
Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].*/

var arr1 = [24, 53, 78, 91, 12];
var arr2 = arr1[0];
for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] > arr2) {
        var arr2 = arr1[i]
    }
}
document.write(`${arr2} is largest number.` + "<br>");


/*                  Question-09. 
Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]*/

var num5 = [24, 53, 78, 91, 12];
var num6 = num5[0];
for (var i = 0; i <= num5.length; i++) {
    if (num5[i] < num6) {
        var num6 = num5[i];
    }   
}
document.write(`${num6} is smallest number` + "<br>");


/*                  Question-10. 
Write a program to print multiples of 5 ranging 1 to
100. */

for (var i = 5; i <= 100; i += 5) {
    var comma = ", "
    document.write(i + comma);
}