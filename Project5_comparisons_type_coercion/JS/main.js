var x = 10;                                          //Created a variable "x"

document.write(x);

document.write(typeof 5);                                         //This operator gives you the data type of a variable

document.write("10" + 5);                                           //This returns 105 because 10 and 5 are being combined

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;              //This gives you the result of NaN because you can't divide 0 by 0
}

function my_Function2() {                                           //I'm checking to see if this is a number
    document.getElementById("Test").innerHTML = isNaN('teg');
}

function my_Function3() {                                           //This is checking to see if 7 is a number
    document.getElementById("Test").innerHTML = isNaN('7');
}

document.write(2E310);                                              //This is displaying "infinity"

document.write(-3E310);                                             //This is displaying negative "inifinity"

function my_Function4() {
    document.getElementById("Test").innerHTML = (2E310);
}

function my_Function5() {
    document.getElementById("Test").innerHTML = (-3E310)
}

document.write(10>2);                                               //The output is true because 10 is larger than 2

document.write(10<2);                                               //The output is false because 10 is not less than 2

console.log(2 + 2);                                                 //This will give you an output of 4 in the console

console.log(10<2);                                                  //This will give you an output of false in the console

document.write(10 == 10);                                           //The output will be true because 10 equals 10

document.write(4 == 5);                                             //The output will be false because 4 does not equal 5

X = 10;                                                             //The "===" is being used to check whether the data on
Y = 10;                                                             //left is equal to the right and that it is the same data type
document.write(X === Y);                                            //The output is true

X = 82;                                                             //The output is false because the data types number and string 
Y = "words";                                                        //were not the same
document.write(X === Y);

C = 85;
D = "85";
document.write(C === D);

E = 15;                                                             //The output is false because 15 and 16 are not equal
F = 16;
document.write(E === F);

document.write(5 > 10 && 10 > 4);                                   //This returns true because five is greater than two,
                                                                    //and ten is greater than 4
document.write(5 > 10 && 10 > 4);                                   //This returns false because both conditions are not met

document.write(5 > 10 || 10 > 4);                                   //This returns true because one of the conditions is met

document.write(5 > 10 || 10 > 20);                                  //This returns false because none of the conditions are met

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);          //This checks to see if sommething is true. If the statement is
}                                                                   //false then "true" is returned. This returns false

function not_Function2() {                                          //This gives a double negative and returns true
    document.getElementById("Not").innerHTML = !(5 > 10);
}