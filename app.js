// <<<<<<<<<<<<<<<< ASSIGNMENT CH 6-9 >>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<<<MATH EXPRESSIONS>>>>>>>>>>>>
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser: (NO)
var a = 10;
console.log("The value of a is " ,a);
console.log("Now the value a is 10")

console.log("The value of ++a is " ,++a);
console.log("Now the value ++a is 11")

console.log("The value of a++ is " ,a++);
console.log("Now the value a++ is 12")

console.log("The value of --a is " ,--a);
console.log("Now the value --a is 11")

console.log("The value of a-- is " ,a--);
console.log("Now the value a-- is 10")



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; 1
// --a - --b; 1
// --a - --b + ++b; 2
// --a - --b + ++b + b--; 3

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);


// 3. Write a program that takes input a name from user &
// greet the user.

var user_name="ali";
if (user_name==prompt("enter your name")) {
    alert("welcome to my website")
}else
{
    alert("invalid user name")
}


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var n = +prompt("enter a number table");
if (n==n && n!=""){
    console.log(n + ' * 1 = ' + n*1)
    console.log(n + ' * 2 = '+ n*2)
    console.log(n + ' * 3 = ' + n*3)
    console.log(n + ' * 4 = ' + n*4)
    console.log(n + ' * 5 = ' + n*5)
    console.log(n + ' * 6 = ' + n*6)
    console.log(n + ' * 7 = ' + n*7)
    console.log(n + ' * 8 = '+ n*8)
    console.log(n + ' * 9 = ' + n*9)
    console.log(n + ' * 10 = '+ n*10)

}else{
    console.log(5 + ' * 1 = ' + 5*1)
    console.log(5 + ' * 2 = ' + 5*2)
    console.log(5 + ' * 3 = ' + 5*3)
    console.log(5 + ' * 4 = ' + 5*4)
    console.log(5 + ' * 5 = ' + 5*5)
    console.log(5 + ' * 6 = ' + 5*6)
    console.log(5 + ' * 7 = ' + 5*7)
    console.log(5 + ' * 8 = ' + 5*8)
    console.log(5 + ' * 9 = ' + 5*9)
    console.log(5 + ' * 10 = ' + 5*10)
}
    

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
subject1 = prompt("Enter a Subject 1");
subject2 = prompt("Enter a Subject 2");
subject3 = prompt("Enter a Subject 3");

// b) Total marks for each subject is 100, store it in another
// variable.
var marks_sub1 = 100;
var marks_sub2 = 100;
var marks_sub3 = 100;
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
var obt_marks_sub1 = +prompt("Enter obtained marks subject1")
var obt_marks_sub2 = +prompt("Enter obtained marks subject2")
var obt_marks_sub3 = +prompt("Enter obtained marks subject3")

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var total_marks = obt_marks_sub1 + obt_marks_sub2 + obt_marks_sub3;
console.log("Total marks " , total_marks);
var per1= obt_marks_sub1/marks_sub1 *100;
var per2= obt_marks_sub2/marks_sub2 *100;
var per3= obt_marks_sub3/marks_sub3 *100;
console.log("Percentage of subject1" , per1);
console.log("Percentage of subject2" , per2);
console.log("Percentage of subject3" , per3);