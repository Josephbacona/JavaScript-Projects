function addition_Function() {                                                                       //Performing addition using the + operator
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {                                                                   //Performing subtraction using the - operator
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {                                                                         //Performing multiplication using the * operator
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {                                                                              //Performing divixion using the / operator
    var simple_Math2 = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math2;
}

function more_Math() {                                                                             //Creating a function to add, subtract, multiply and divide all at once
    var simple_Math3 = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subracted by 5 equals " + simple_Math3;
}

function modulus_Operator() {                                                                       //Using the modulus operator to get the remainder of 25 and 6
    var simple_Math4 = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 8 you have a remainder of: "
    + simple_Math4;
}

function negation_Operator() {                                                                     //Using the negation operator to return the - form of 10
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;                                                                                        //Using the increment operator to increase X by 1
X++;
document.write(X);

var H = 5.25;                                                                                     //Using the decrement operator to decrease H by 1
H--;
document.write(H);

window.alert(Math.random());                                                                      //Using the Math.random() function to return a number between 0 and 1

window.alert(Math.random() * 100);                                                                //Using the Math.random() function to return a number between 0 and 100

document.write(Math.round(4.5));                                                                  //Using the Math.round() function to round to the nearest number