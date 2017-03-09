var missingCard = [];

// Array is complete 52 card deck generated with generateCardsArray.js
// Use JSON.stringify(cardsArray) to get a copy/paste string;

var cardsArray = [{"suit":"diamonds","title":"9"},{"suit":"hearts","title":"9"},{"suit":"hearts","title":"8"},
{"suit":"hearts","title":"J"},{"suit":"hearts","title":"3"},{"suit":"clubs","title":"Q"},
{"suit":"hearts","title":"4"},{"suit":"diamonds","title":"10"},{"suit":"diamonds","title":"2"},
{"suit":"hearts","title":"7"},{"suit":"diamonds","title":"A"},{"suit":"spades","title":"3"},
{"suit":"clubs","title":"8"},{"suit":"diamonds","title":"7"},{"suit":"hearts","title":"2"},
{"suit":"clubs","title":"J"},{"suit":"hearts","title":"6"},{"suit":"spades","title":"10"},
{"suit":"clubs","title":"3"},{"suit":"hearts","title":"A"},{"suit":"spades","title":"7"},
{"suit":"clubs","title":"10"},{"suit":"diamonds","title":"3"},{"suit":"clubs","title":"K"},
{"suit":"clubs","title":"5"},{"suit":"spades","title":"2"},{"suit":"hearts","title":"Q"},
{"suit":"diamonds","title":"Q"},{"suit":"spades","title":"6"},{"suit":"spades","title":"K"},
{"suit":"diamonds","title":"6"},{"suit":"diamonds","title":"4"},{"suit":"clubs","title":"A"},
{"suit":"diamonds","title":"J"},{"suit":"hearts","title":"10"},{"suit":"clubs","title":"9"},
{"suit":"hearts","title":"K"},{"suit":"diamonds","title":"K"},{"suit":"spades","title":"9"},
{"suit":"spades","title":"A"},{"suit":"diamonds","title":"5"},{"suit":"spades","title":"4"},
{"suit":"clubs","title":"2"},{"suit":"spades","title":"8"},{"suit":"spades","title":"J"},
{"suit":"clubs","title":"7"},{"suit":"clubs","title":"6"},{"suit":"clubs","title":"4"},
{"suit":"spades","title":"Q"},{"suit":"hearts","title":"5"},{"suit":"spades","title":"5"},
{"suit":"diamonds","title":"8"}]


// Randomly remove one of the cards from the array at random
cardsArray.splice(Math.floor(Math.random() * cardsArray.length), 1);

// Declare an object with the keys being card titles
cardValues = {
		"2": 1,
		"3": 2,
		"4": 3,
		"5": 4,
		"6": 5,
		"7": 6,
		"8": 7,
		"9": 8,
		"10": 9,
		"J": 10,
		"Q": 11,
		"K": 12,
		"A": 13,
	}

// Declare a reference array with a list of card values in a suit
var compArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Declare an object with the total value 1 - 13 added up together which is 91
cards = {
	"clubs": 91,
	"diamonds": 91,
	"hearts": 91,
	"spades": 91
}

// Go through list of cards and subtract the corresponding value from the cardValues object from the cards object
for(var i = 0; i < cardsArray.length; i++){
	cards[cardsArray[i]["suit"]] -= cardValues[cardsArray[i]["title"]];
}

// Find the cards suit which has a non-zero value, and check its value in the reference index array
// Load that into the missingCard array.
for (var item in cards){
	if(cards[item] !== 0){
		missingCard = [item, compArray[cards[item] - 1]];
		break;
	}
}

console.log("The missing card is a " + missingCard[1] + " of " + missingCard[0]);


