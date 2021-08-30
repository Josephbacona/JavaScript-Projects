function Ride_Function() {                                                  //This is a ternary operator.
    var Height, Can_ride;                                                   //This function determines whether
    Height = document.getElementById("Height").value;                       //or not a person is tall enough or
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //too short to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function()                                                //This is also a ternary operator.                                        
    var Age, Can_vote;                                                  //This function determines whether or not
    Age = document.getElementById("Age").value;                         //a person is old enough to vote.
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger"); //This is a ternary operator
                                                                    //returning which number is bigger
function Vehicle(Make, Model, Year, Color) {                    //This "Vehicle" function utilizes key words
    this.Vehicle_Make = Make;                                   //to create an object with classes
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                  //The "new" keyword within these variables
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //are each creating new objects
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(Age, Gender) {
    this.Person_Age = Age;
    this.Person_Gender = Gender;
}
var James = new Person(19, "Male");
function newFunction() {
    document.getElementById("New_and_This").innerHTML =
    "James is a " + James.Person_Gender + " and is " + James.Person_Age +
    " years old.";
}

function Man(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var Mike = new Male("Mike", "Smith", 20, "blue")

function count_Function() {                                                //This is a nested function 
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}                          //The "Plus_one()" function is the
        Plus_one();                                                         //nested function inside of the "count_Fuction()"
        return Starting_point;
    }
}