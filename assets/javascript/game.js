
var totalValue
function myFunction() {
    //Make a random number populate in the randNum place
    var randNum = Math.floor((Math.random() * 40) + 20);
   $("#randNum").innerHTML  = randNum;
   console.log(randNum);
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
//If the number the user has created matches randNum, the user wins
//If the number goes above, the user loses
//Add the wins/losses to the winsLosses box
    if (totalValue == randNum) {
        myWins ++;
        //reload page
        location.reload();
    }
    else if (totalValue > randNum) {
        myLosses ++;
//reload page
        location.reload();
    };

}
//something wrong with formatting- Won't display
window.onload = myFunction;

