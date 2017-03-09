function createCardsObjArray(){

	var cardsArray = [];

	var suits = ["clubs", "diamonds", "hearts", "spades"];

	for(var i = 0; i < suits.length; i++){

		for(var x = 2; x <= 10; x++){

			cardsArray.push({ "suit": suits[i], "title": String(x)});
		}
	
		cardsArray.push({ "suit": suits[i], "title": "J" });
		cardsArray.push({ "suit": suits[i], "title": "Q" });
		cardsArray.push({ "suit": suits[i], "title": "K" });
		cardsArray.push({ "suit": suits[i], "title": "A" });
	}

	return cardsArray;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Works like this
// var cardsArray = shuffle(createCardsObjArray());