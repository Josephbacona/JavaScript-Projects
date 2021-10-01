function count_To_Ten() {               //This created a while loop.
    var Digit = "";                     //This is useful because we don't have to individually write out each number
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let str = "Hello World!";
document.getElementById("length").innerHTML = str.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];           //This created a for loop. It is useful because we don't have
var Content = "";                                                                               //to individually write the document.write() method
var Y;                                                                                          //for each instrument
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {                                                         //This array_Function() uses an array of cat pictures.
    var Cat_Picture = [];                                                           //This returns "In this picture, the cat is eating."
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {                                          //This contstant_function() uses the const keyword. The "Sports_Equipment" declared by the const keyword
    const Sports_Equipment = {type:"bat", brand:"Nike", color:"red"};   //will never change but the different aspects of it might.    
    Sports_Equipment.color = "black";
    Sports_Equipment.price = "$300";
    Sports_Equipment.length = "3 feet"
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Sports_Equipment.type + " was " + Sports_Equipment.price;
    
    document.getElementById("Constant_2").innerHTML = "The cost of the " +
        Sports_Equipment.type + " is now " + Sports_Equipment.price + " and the length is " +
        Sports_Equipment.length;
}

function myFunction() {
    return Math.PI;
}
document.getElementById("return").innerHTML = myFunction();

let phone= {                                                //This is creating an object with properties and a method.
    make: "Samsung ",
    model: "Galaxy S21 ",
    year: "2021 ",
    color: "black ",
    description : function() {
        return "The phone is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Phone_Object").innerHTML = phone.description();

let text = "";                                                  //This is using the break statement. In this example the "break" statement ends the loop.
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

