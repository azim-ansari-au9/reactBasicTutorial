// postFix operator

// var num = 20;
// var newNum = num++;
// console.log(num);
// console.log(newNum);
////output will  21 and 20.

//prfix operator

// var num = 20;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);
// //output will be 21 and 21.

//comprision operator
// var a= 10;
// var b = 20;
// console.log(a == b);
////output wil be false.

// Question
// Swap  two number a=10 and b=5
// var a = 10;
// var b = 5;
// var c = b;
// b= a;
// a= c;
// console.log(a,b);

// // write a programme for finding the leap year
// var year = 2024
// if (year%4 === 0){
//     if(year%100 === 0){
//         console.log('leap year'+year)}
//         else{
//         console.log('not a leap year'+ year)}
//     console.log('leap year'+year)}
//     else{
//         console.log('not a leap year'+ year)
//     }


// Falsy statement 
// 0,"",undefined,null,NaN these five are falsy statement
// if(1){
//     console.log('hey,you are losser')
// }else{
//     console.log('omg, you are the winner')
// }

////Ternary operator
// It is javaScript operator which deals with three operands
// var age = 50
// if(age >= 18){
//     console.log("Able for voting")
// }else{
//     console.log('Not able for Voting')
// }

// var age = 10;
// console.log((age >= 18) ? "you can vote":"Not able to vote");

//Find the area of circle, tringle, and rectangle
var area = 'triangle';
var PI = 3.014, l=5, b=9, r=3;
// if(area== "circle"){
//     console.log("area of the circle is : "+ PI*r**2);
// }else if(area == "traingle"){
//     console.log("area of the traingle is : "+ (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("area of the rectangle is : "+ (l*b));
// }else{
//     console.log('please enter valid data')
// }

// switch(area){
//     case 'circle':
//         console.log("area of the circle is : "+ PI*r**2);
//     break;
//     case 'triangle': 
//         console.log("area of the traingle is : "+ (l*b)/2);
//     break;
//     case 'rectangle':
//         console.log("area of the rectangle is : "+ (l*b));
// }