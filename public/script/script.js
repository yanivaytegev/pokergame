
let cardArray = [];
let arrayCards = [];
let randomCard;


function init() {

    createCards();
    cardPlaceImage();

}


document.getElementById('whoWin').onclick = function checkWhoWin(event) {

    console.log('goog')
    flop1 = arrayCards[0];
    flop2 = arrayCards[1];
    flop3 = arrayCards[2];
    flop4 = arrayCards[3];
    arr = [arrayCards[4], arrayCards[5], arrayCards[6], arrayCards[7], arrayCards[8]];

    let playerOne = new cardWin(flop1, flop2, arr)
    let playerTwo = new cardWin(flop3, flop4, arr)

    playerOne = playerOne.myWinCards()
    playerTwo = playerTwo.myWinCards()

    let playerOneStr = playerOne.pop();
    let playerTwoStr = playerTwo.pop();

    let obj = {
        'isStraightFlush': 1,
        'isFourOfAKind': 2,
        'isFullHouse': 3,
        'isFlush': 4,
        'isStraight': 5,
        'isThreeOfAKind': 6,
        'isTwoPair': 7,
        'isOnePair': 8,
        'isHighCard': 9,
    }


    if (obj[playerOneStr] < obj[playerTwoStr]) {
        document.getElementById('winner').innerText = 'congratulations !';
        document.getElementById('content').innerText = 'player One win';
        document.getElementById('content1').innerText = 'with ' + playerOneStr.slice(2).replace(/([A-Z])/g, ' $1').trim();
    } else if (obj[playerOneStr] > obj[playerTwoStr]) {
        document.getElementById('winner').innerText = 'congratulations!';
        document.getElementById('content').innerText = 'player Two win';
        document.getElementById('content1').innerText = 'with ' + playerTwoStr.slice(2).replace(/([A-Z])/g, ' $1').trim();
    } else {
        if (playerOne.reduce((a, b) => a + b) > playerTwo.reduce((a, b) => a + b)) {
            document.getElementById('winner').innerText = 'congratulations!';
            document.getElementById('content').innerText = 'player One win';
            document.getElementById('content1').innerText = 'with ' + playerOneStr.slice(2).replace(/([A-Z])/g, ' $1').trim();
        } else if (playerOne.reduce((a, b) => a + b) < playerTwo.reduce((a, b) => a + b)) {
            document.getElementById('winner').innerText = 'congratulations!';
            document.getElementById('content').innerText = 'player Two win';
            document.getElementById('content1').innerText = 'with ' + playerTwoStr.slice(2).replace(/([A-Z])/g, ' $1').trim();
        } else {
            document.getElementById('winner').innerText = 'its a tie !';
        }
    }
}


function cardPlaceImage() {

    filteredCards = [];

    arrayCards.push(cardArray[Math.floor(Math.random() * cardArray.length)]);
    let index = 1

    while (arrayCards.length < 10) {

        randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];

        if (arrayCards.includes(randomCard) === false) {
            arrayCards.push(randomCard);
            index++;
        }


        if (index == 9) {
            filteredCards = cardArray.filter(item => item !== arrayCards[index]);


            for (let index = 0; index < arrayCards.length; index++) {
                document.getElementById('flop' + (index + 1)).style.backgroundImage = "url(../images/" + arrayCards[index].image + ")";
                document.getElementById('flop' + (index + 1)).style.backgroundSize = "cover";
            }
        }
    }
}


function createCards() {

    let ar = ['C', 'S', 'D', 'H'];
    cardArray = [];

    ar.forEach(element => {
        for (let index = 1; index < 14; index++) {
            if (element == 'C' || element == 'S') {
                if (element == 'C') {
                    cardArray.push(new card(index, (index + 1) + element, (index + 1), 'black', 'club', (index + 1) + element + '.png'));
                }
                else {
                    cardArray.push(new card(index + 13, (index + 1) + element, (index + 1), 'black', 'spade', (index + 1) + element + '.png'));
                }
            }
            else {
                if (element == 'D') {
                    cardArray.push(new card(index + 26, (index + 1) + element, (index + 1), 'red', 'diamond', (index + 1) + element + '.png'));
                }
                else {
                    cardArray.push(new card(index + 39, (index + 1) + element, (index + 1), 'red', 'heart', (index + 1) + element + '.png'));
                }
            }
        }
    })
}


document.getElementById('newGame').onclick = function newGame() {

    location.reload();
}






