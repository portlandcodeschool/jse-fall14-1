// I worked a lot on problem 5 and can't find where I save problem 2 :-/ I'll have to redo it. 
// My invoice is here: https://joelmswensen.harvestapp.com/client/invoices/0f46212564e0f7c4ddfcb7f5ee6947e4087df9c7
-------------------------------------------------------------------

	var days = [
		"first",
		"second",
		"third",
		"fourth",
		"fifth",
		"sixth",
		"seventh",
		"eighth",
		"ninth",
		"tenth",
		"eleventh",
		"twelfth"
	];
	
	
	var gifts = [
		"A Partridge in a Pear Tree",
		"Two Turtle Doves",
		"Three French Hens",
		"Four Calling Birds",
		"Five Golden Rings",
		"Six Geese a Laying",
		"Seven Swans a Swimming",
		"Eight Maids a Milking",
		"Nine Ladies Dancing",
		"Ten Lords a Leaping",
		"Eleven Pipers Piping",
		"12 Drummers Drumming"
	];
	
	
	function twelveDays() {
	
		var days2 	= "",
			gifts2 	= "",
			song 	= "";
	
		for(var i = 0; i < gifts.length; i++) {
		
			days2 += days[i];
		
			gifts2 += gifts[i];
		
			song += "On the " + days[i] + " of Christmas my true love gave to me " + gifts[i] + "\n";
		
		}
	
		return song;
		
	}
	
	console.log(twelveDays());


------------------------------------------------------------------

//first I wasa thinking of problem 5 like this 
var cards = [[0, 1, 'Heart', 'Red, Ace of Hearts'],
			[1, 1, 'Diamonds', 'Red', 'Ace of Diamonds'],
			[2, 1, 'Spades', 'Black', 'Ace of Spades'],
			[3, 1, 'Clubs', 'Black', 'Ace of Clubs']];

function rank(n){
	return cards [n][1];
};


function suit(n){
	return cards [n][2]
};


function color(n){
	return cards [n][3]
}


function name(n){
	return cards [n][4]
}


function cardID(r,s){
	rank + suit //hmmmmmmmmmmmmmmmmmmm!

}
// But then I did it this way:



function rank(card) {
    return Math.floor(card / 4 + 1);
};

function suit(card){
	card % 4
	if(card == 1){return "Hearts"}
		else if(card == 2){return "Spades"}
			else if(card == 3){return "Diamonds"}
				else{return "Clubs"}
};

function cardID(rank,suit){
	if (suit = "Hearts"){return (rank + 0)}
		else if (suit = "Spades"){return (rank + 13)}
			else if (suit = "Diamonds"){return (rank + 26)}
				else if (suit = "Clubs"){return (rank + 39)}
					else {return undefined}
};

function color(card){
	 card % 2
	 if(card == 1){
	 	return "red"
	 }else{ return "black" };
};

var cardRankArr = ['Ace', 
					'Two', 
					'Three', 
					'Four', 
					'Five', 
					'Six', 
					'Seven', 
					'Eight', 
					'Nine', 
					'Ten', 
					'Jack', 
					'Queen', 
					'King',];

function name(card){
	cardRankArr [card % 4]
	suit [card]
	return cardRankArr [card % 4] + " of " + suit(card)
}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");