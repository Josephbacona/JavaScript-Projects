function my_Dictionary() {                          //Adding a Dictionary using the my_Dictionary() function
    var Animal = {
        Species:"Cat",
        Color:"Orange",
        Breed:"British Shorthair",
        Age:9,
        Sound:"Meow"

    };
    delete Animal.Sound;                            //Using the delete operator to edit the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound;             //The output is undefined because that value no longer exists in our dictionary

}

