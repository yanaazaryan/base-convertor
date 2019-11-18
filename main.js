const reader = require('readline-sync');
const utils = require('./converter');

const number = reader.questionInt("Enter the number that you want to convert = ");
const variant = reader.questionInt("Enter variant: \n 1:Binary \n 2:Hexadecimal \n");

if(variant === 1){
  console.log(convertToBinary(number));
}else if(variant === 2){
  console.log(convertToHexa(number));
}else if(typeof variant === "number"){
  console.log("No variants for that number ");
}else{
  console.log("Please import number ");
}