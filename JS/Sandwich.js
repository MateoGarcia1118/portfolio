// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function() {
    //Global variables
    var counterPbj = 0;
    var conuterGCheese = 0;
    var conuterRBeef = 0;
    //Peanut butter click function
    $("#pbj").on("click", function() {
        counterPbj ++;
        alert("You have eaten " + counterPbj + " Peanut Butter and Jelly sandwiches!");
    });
    //Grilled cheese click function
    $("#grilledcheese").on("click", function() {
        conuterGCheese ++;
        alert("You have eaten " + conuterGCheese + " Grilled Cheese sandwiches!");
    });
    //Roast Beef click function
    $("#roastbeef").on("click", function() {
        conuterRBeef ++;
        alert("You have eaten " + conuterRBeef + " Roast Beef sandwiches!");
    });
});