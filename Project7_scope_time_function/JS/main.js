var X = 10;                                         //This is declaring a global variable to be used in two different functions
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

function Add_numbers_3() {
    var Y = 10;                                     //This is declaring a local variable to only be used within the function                    
    document.write(20 + Y + "<br>");                //it is declared in.
}
function Add_numbers_4() {
    document.write(Y + 100);
}
function Add_numbers_4() {          //Intentially made and error
    console.log(Y + 10);            //and used the console.log() method to find out why the error is occuring
}

if (1 < 2) {                        //This is a conditional statement displaying the text in "" because 1 is smaller than 2.
    document.write("The left number is smaller than the number on the right.")
}
function get_Date() {               //This function is using the get date method and displays "How are you today?" if the time is before 18:00
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
function get_Date_2() {             //This function is using the get date method and displays "How is your day going?" if the time is before 19:00
    if (new Date().getHours() < 19) {
        document.getElementById("Greeting_2").innerHTML = "How is your day going?";
    }
}

function Age_Function() {           //This is an else statement and displays one of the two results depending on if the condition is false
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {          //This is also an else if statement. Using the Date() method it will display what part of the date it is
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}