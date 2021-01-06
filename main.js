let a = "r";

if (a == "r"){
  document.write("red");
}
else if (a == "b"){
  document.write("blue");
}
else if (a == "y"){
  document.write("yellow");
}
else if (a == "g"){
  document.write("green");
}
else if (a == "p"){
  document.write("purple");
}
else {
  document.write("Your letter does not correspond to a color.")
}

let num1 = 30;
let num2 = 3;

function multiply(num1,num2){
  let product = num1%num2;
  document.write(product);
}

multiply(num1,num2);

let number1 = 40;

if (number1%2 == 0){
  document.write(" " + number1 + " is even");
}
else if (number1%2 == 1){
  document.write(" " + number1 + " is odd");
}

let num1 = 14;
let num2 = 21;

if (num1 > num2){
  document write(num1 + " is greater than " + num2);
}
else if (num1 > num2){
  document write(num2 + " is greater than " + num1);
}
else (num1 == num2){
  document write(num1 + " and " + num2 + " are equal");
}
