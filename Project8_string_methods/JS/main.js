function full_sentance() {                      //This is the concat() method used in the full_sentance() function. It is being used to concatenate
    var part_1 = "I have ";                     //these different strings
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentance.";
    var whole_sentance = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentance;
}

function slice_Method() {
    var Sentance = "All work and no play makes Jonny a dull boy.";          //This used the slice() method to extract a section from the string
    var Section = Sentance.slice(27,33);                                    //This returns Jonny because those are the charactors that are indicated
    document.getElementById("Slice").innerHTML = Section;
}

let str = "Hello World!";            //This is a string
str.toUpperCase()                    //This will return "HELLO WORLD!"
str.search("!")                     //This returns 11

function string_Method() {                      //The "toString()" method will a number as a string
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {                   //The "toPrecision()" method will format a number to a specified length
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);         //This returns 12938.30130
}

function myFunction() {                         //The "toFixed()" method coverts a number to a string, rounding to a specified amount of decimals
    var num = 5.56789;
    var n = num.toFixed(10);
    document.getElementById("toFixed").innerHTML = n;       //This returns 5.5678900000
}
