//Searching and filter in array;
// var array = ['azim','viaksh','lukman','nasim','azad']
// console.log(array[0])
// const num = [90,2,5,80,50]
// console.log(num.sort());

//how to insert ,Add, replace and CRUD.
// var array = ['azim','viaksh','lukman','nasim','azad'];
// const count = array.push('shamim','new');
// console.log(array);
// console.log(count);
//always add in last 

//unshift() ==>always adds in before .
// var array = ['azim','viaksh','lukman','nasim','azad'];
// const count = array.unshift('shamim','new');
// console.log(array);
// console.log(count);

//array pop() method
// var array = ['azim','viaksh','lukman','nasim','azad'];
// console.log(array);
// console.log(array.pop());
// console.log(array);

//shift() ==>always remove in before
// var array = ['azim','viaksh','lukman','nasim','azad'];
// console.log(array);
// console.log(array.shift());
// console.log(array);

// //Question 
// //1. add Dec at the end of the array 
// //2. what is the return value of splice method?
// //3. update march to March(update)
// //4. delete june from an array.
// //GIVEN ARRAY IS BELLOW:
// const month = ['jan','march','April','june','july']

// 1.solution 
// month.push('Dec')
// splice method(index,delete,string which is to be add)
// const newMonths = month.splice(month.length,0,'Dec')
// console.log(month);

//2. solution
// const newMonths = month.splice(month.length,0,'Dec')
// console.log(newMonths)

//3. solution
// 1st method//
// const updateMonth = month.splice(1,1,'March')
// console.log(month)
// const indexOfMonth = month.indexOf('march')
// console.log(indexOfMonth)
// 2nd method//
// const indexOfMonth = month.indexOf('march')
// if(indexOfMonth!= -1){
//     const updateMonth = month.splice(1,1,'March')
//     console.log(month)
// }else{
//     console.log('No such data found')
// }

// 4 solution
// const indexOfMonth = month.indexOf('june')
// if(indexOfMonth!= -1){
//     const updateMonth = month.splice(indexOfMonth,1,'March')
//     console.log(month)
// }else{
//     console.log('No such data found')
// }


//Map(), Reduce(), Filter() Method.
///////map()////////
// const array = [1,2,4,3,5,6,9,23,45,67]
// let newArr = array.map((curElm,index,arr)=>{
//     return `index no. = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArr)
////for each method retrun undefined while map method return the array.
// const array = [1,2,4,3,5,6,9,23,45,67]
// let newArr = array.forEach((curElm,index,arr)=>{
//     return `index no. = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArr)

// find the squre root of ech element in array 
// let arr = [16,25,36,49,64,81];
// let arrSqrt = arr.map((curElem)=>{
//     return Math.sqrt(curElem);
// })
// console.log(arrSqrt);


//multyply each element by 2 AND RETURN OBLY THOSW ELEMENT WHICH ARE GREATER THAN 10

// let arr = [ 4, 5, 6, 7, 8, 9 ]
// let newArr = arr.map((curElm) =>{
//     return curElm*2;
// }).filter((curElm)=>{
//     return curElm>15;
// })
// console.log(newArr)

////// reducer method is used to accumulate the element.
// let arr = [ 4, 5, 6, 7, 8, 9 ];
// let newArr = arr.reduce((accumulator,curElm,indexOf,string)=>{
//     return accumulator+= curElm;
// })
//     console.log(newArr)

//////////////// Question /////////////////
//multyply each element by 2 AND RETURN OBLY THOSW ELEMENT WHICH ARE GREATER THAN 10 And add the remaining element.

// let arr = [ 4, 5, 6, 7, 8, 9 ]
// let newArr = arr.map((curElm) =>{
//     return curElm*2;
// }).filter((curElm)=>{
//     return curElm>10;
// }).reduce((accumulator,curElm,indexOf,string)=>{
//     return accumulator+= curElm;
// })
// console.log(newArr)