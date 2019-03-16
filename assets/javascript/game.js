
var totalValue
function myFunction() {
    //Make a random number populate in the randNum place
    var randNum = Math.floor((Math.random() * 40) + 20);
   $("#randNum").text = randNum;
//Make each crystal worth a random number of points each game
    var blueNum = Math.floor((Math.random() * 10) + 1);

    var greenNum = Math.floor((Math.random() * 5) + 1);

    var pinkNum = Math.floor((Math.random() * 3) + 1);

    var multiNum = Math.floor((Math.random() * 2) + 1);
};   //Make different function
//If the user clicks on a crystal, the number is added to the total
function crystalClick() {
var totalValue=0;
}


$("#totalScore").innerHTML = totalValue;
function blueFunction() {
    $("#totalScore").innerHTML = totalValue + blueNum;
    console.log(totalValue + blueNum);


    if (totalValue == randNum) {
        myWins ++;
        location.reload();
    }
    else if (totalValue > randNum) {
        myLosses ++;
        location.reload();
    };
        // HOW TO RESET GAME BUT NOT WINS AND LOSSES
    


 

    

//If the number the user has created matches randNum, the user wins
//If the number goes above, the user loses
//Add the wins/losses to the winsLosses box
//reset the game and generate a new number

}
//event caller- when page loads
window.onload = myFunction;

