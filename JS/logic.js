//global variables
var zCoordinate = 0;
var xCoordinate = 0;
var sapling = 0;
var shovel = 0;
var coconut = 0;
let pickedUpCoconut1 = false;
let pickedUpCoconut2 = false;
let pickedUpSapling1 = false;
let pickedUpSapling2 = false;
let pickedUpShovel = false;
//keyboard tracker
document.onkeyup = function(event) {
    //variables for keys
    var keyPressed = event.key;
    console.log(keyPressed);
    var text = document.getElementById("text");
    var Z = document.getElementById("Z");
    var X = document.getElementById("X");
    //instruction page
    if (keyPressed == "p") {
        alert("Press W, A, S, and D to move.\nPress I to open your inventory.\nPress P to open this text.")
    };
    //move fowards
    if (keyPressed == "w" && zCoordinate < 101) {
        zCoordinate ++;
        text.textContent = ("You moved 1 meter fowards!");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    }
    //maximum coordinates +Z
    if(keyPressed == "w" && zCoordinate == 101) {
        zCoordinate --;
        text.textContent = ("You have reached a beach, and cannot go any farther.");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    };
    //move to the left
    if (keyPressed == "a" && xCoordinate > -101) {
        xCoordinate --;
        text.textContent = ("You moved 1 meter to the left!");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    }
    //maximum coordinates -X
    if (keyPressed == "a" && xCoordinate == -101) {
        xCoordinate ++;
        text.textContent = ("You have reached a beach, and cannot go any farther.");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    };
    //move backwards
    if (keyPressed == "s" && zCoordinate > -101) {
        zCoordinate --;
        text.textContent = ("You moved 1 meter backwards!");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    }
    //maximum coordinates -Z
    if (keyPressed == "s" && zCoordinate == -101) {
        zCoordinate ++;
        text.textContent = ("You have reached a beach, and cannot go any farther.");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    };
    //move to the right
    if (keyPressed == "d" && xCoordinate < 101) {
        xCoordinate ++;
        text.textContent = ("You moved 1 meter to the right!");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    }
    //maximum coordinates +X
    if (keyPressed == "d" && xCoordinate == 101) {
        xCoordinate --;
        text.textContent = ("You have reached a beach, and cannot go any farther.");
        Z.textContent = ("Z Coordinates: " + zCoordinate);
        X.textContent = ("X Coordinates: " + xCoordinate);
    };
    //coconut, sapling, and shovel inventory
    if (keyPressed == "i" && coconut > 0 && sapling > 0 && shovel > 0) {
        alert("Inventory\nCoconuts: " + coconut + "\nSaplings: " + sapling + "\nShovels: " + shovel)
    }
    //coconut and sapling inventory
    else if (keyPressed == "i" && coconut > 0 && sapling > 0) {
        alert("Inventory\nCoconuts: " + coconut + "\nSaplings: " + sapling);
    }
    //coconut and shovel inventory
    else if (keyPressed == "i" && coconut > 0 && shovel > 0) {
        alert("Inventory\nCoconuts: " + coconut + "\nShovels: " + shovel);
    }
    //sapling and shovel inventory
    else if (keyPressed == "i" && sapling > 0 && shovel > 0) {
        alert("Inventory\nSaplings: " + sapling + "\nShovels: " + shovel);
    }
    //coconut only inventory
    else if (keyPressed == "i" && coconut > 0) {
        alert("Inventory\nCoconuts: " + coconut);
    }
    //sapling only inventory
    else if (keyPressed == "i" && sapling > 0) {
        alert("Inventory\nSaplings: " + sapling);
    }
    //shovel only inventory
    else if (keyPressed == "i" && shovel > 0) {
        alert("Inventory\nShovels: " + shovel);
    }
    //empty inventory
    else if (keyPressed == "i") {
        alert("Inventory\nNothing");
    };
    //picking up coconut1 logic
    function pickUpCoconut1() {
        coconut ++;
        alert("You found a coconut!")
        pickedUpCoconut1 = true;
    };
    function coconutOnce1() {
        if (!pickedUpCoconut1 && zCoordinate == -11 && xCoordinate == -18) pickUpCoconut1();
    };
    //picking up coconut2 logic
    function pickUpCoconut2() {
        coconut ++;
        alert("You found a coconut!");
        pickedUpCoconut2 = true;
    };
    function coconutOnce2() {
        if (!pickedUpCoconut2 && zCoordinate == -5 && xCoordinate == -30) pickUpCoconut2();
    };
    //picking up sapling1 logic
    function pickUpSapling1() {
        sapling ++;
        alert("You found a sapling!");
        pickedUpSapling1 = true;
      };
      function saplingOnce1() {
        if (!pickedUpSapling1 && zCoordinate == 6 && xCoordinate == 9) pickUpSapling1();
      };
    //picking up sapling2 logic
    function pickUpSapling2() {
        sapling ++;
        alert("You found a sapling!");
        pickedUpSapling2 = true;
    };
    function saplingOnce2() {
        if (!pickedUpSapling2 && zCoordinate == 20 && xCoordinate == 20) pickUpSapling2();
    };
    //picking up shovel logic
    function pickUpShovel() {
        shovel ++;
        alert("You found a shovel!");
        pickedUpShovel = true;
    };
    function shovelOnce() {
        if (!pickedUpShovel && zCoordinate == 100 && xCoordinate == 50) pickUpShovel();
    };
    //picking up stuff arrays
    coconutOnce1();
    coconutOnce2();
    saplingOnce1(); 
    saplingOnce2(); 
    shovelOnce();
};