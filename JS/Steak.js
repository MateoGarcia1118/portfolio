//Variables
var confirmSteak = confirm("Do you like steak?")
var confirmTofu = confirm("Do you like tofu?")
//Yes steak and tofu
if (confirmSteak && confirmTofu) {
    document.write("Here is both a steak sandwich and a tofu stir fry!");
}
//Yes steak, No tofu
else if (confirmSteak) {
    document.write("Here is a steak sandwich!");
}
//No steak, Yes tofu
else if (confirmTofu) {
    document.write("Here is a tofu stir fry!");
}
//No steak or tofu
else {
    document.write("Go eat something you like then...");
}