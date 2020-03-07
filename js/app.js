// console.log("hw7");

// Object Oriented Programming
// We're going to continue using objects, giving them data and behaviors (methods). 
// They will interact with one another to make our game work!

// The basic idea
// You are going to create a simple card game in which a player will be able to battle the autoplayer. 
// The game will deal 3 cards (each of which has a damage value) to the player and three cards to the autoplayer.
// The player will choose a card, and the computer will randomly choose a card, and whichever's
// card has the highest value will win the point. A round is finished once this has happened three times. 
// The game is a series of 3 rounds.

// The Cards
// Here is the array of cards. Instructions below.

// class Player {						// instantiating (creating an object "player" and
// 	constructor() {						// giving it properties  with teh constructor function
// 		this.cardsInHand = []			// will be called with instantiating class setting parameters
// 		this.score = []					// this.hand and this.score are the parameters
// 										// will be declared / available to all methods in the game
// 	}
// 	drawCard() {
// 		this.cardsInHand.push(game.passCard())
// 	}
// 	playCard(n) {
// 		const card = this.cardsInHand[n]
// 		this.cardsInHand.aplice(n, 1)
// 		return card
// 	}
// }

// const eggbert = new Player()			// instance of the Player class (calling constructor)
// const computer = new Player()			// an other instance of the Player class (calling constructor)

// const game = {
// 	// shuffleDeck: function(arr) {
// 	// 	this.deck = cards.sort(function(a, b) {  // sort(array method) -- passing function -- a, b makes it go though 
// 	// 		return Math.random() - Math.random()
// 	// 	})
// 	// },
// 	passCard: function() {
// 		return this.deck.pop()
// 	}


// NOTE -- we can REMOVE THE SHUFFLE FUNCTION
//that means you need to bring the array (from the HW) back into the game object

class Player {
	constructor(name) {
		this.name = name
		this.hand = [] // will be their current cards per the round they're in
		this.score = 0 // initialized at 0
	}



}








const game = {
cards: [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
],
// all the properties go in here!! ALL OF THEM
// players functions -- 1.

	eggbert: {
			score: 0,
			hand: [],
		},
	computer: {
			score: 0,
			hand: [],
		},
	currentCard: [],
	removedCards: [],
	playCardComp: [],
	playCardEgg: [],
	deck: [],
	cards2: [],
	matches: 0,
	rounds: 0,

	announceWinner: function () {
		alert("someone won");
	},

	getPlayerCard: function () {
		let getPlayerCard = this.eggbert.hand 			 	//  CAN'T SEE WHAT CARD THE USER PLAYED.  OT SHOWING UP IN CONSOLE
		const userInput = prompt("play a card!", "(1/2/3)") // WANT TO MAKE THIS SHOW THE ACTUAL POKEMON NAME ON THE CARD
															// WHY IS THIS ASKING FOR 4 QUESTIONS IN THE PROMPTS?
															/// not actually adding 1 to eggbert's score or to computer's score?
															// to add values to an array (any of them up there...) 
															// just write array[0] = "anything"
															// this is turning the amt of cards to 15 (so that's working, because 
															// those cards can't be selected again)
		if(userInput === "1") {

		}
		console.log("this is printing the card eggbert played \n", this.playCardEgg);
		return "whatever the user's input was from the prompt" 	// what is this return?  going to be the getPlayercard -- but what? 
																// adding the points to score goes in here?  
	},

	// battle: function () {
	// 	let playCardComp = this.computer.hand.splice(0, 1) // could use pop too
	// 	console.log("this is printing the card that computer played \n", playCardComp);
	// 	const playCardEgg = this.getPlayerCard();				
	// 	console.log(playCardEgg);
	// 	if(this.eggbert.hand > this.computer.hand) { 	// if eggberts hand (first card) is higher in damage power than computer's (same)
	// 		computer.score += 1							// then, add a point to eggberts score (( cards not going to playCardEgg or comp)
	// 	}												// nothing happening here!
	// 	if(this.playCardEgg > this.playCardComp) {				
	// 		eggbert.score += 1
	// 		console.log(eggbert.score);
	// 	}
	// 	// if(game.eggBertsHand[0]['damage'] < game.computersHand[0]['damage']){
	// 	// 	alert(`Computer and ${game.computersHand[0]['name']} win round ${game.round}`)
	// 	// 	game.computersPoints++
	// 	// }
	// 	// if(game.eggBertsHand[0]['damage'] === game.computersHand[0]['damage']){
	// 	// 	alert(`- DRAW - \nNO WINNER`)
	// 	// }
	// 			/// might want an alert for whoever won the round?
	// },
			//if egg's card that was played, has higher damage than compuyter's card played, 
			/// add 1 point to score (in egg's array)
			// do stuff w/ players chosen card 


			// const playCard = prompt(
			// if(playCard === "1") {
			// 	playCardEgg == this.eggbert.hand[0]

			// let playCardEgg = this.eggbert.hand.splice(0, 1)
			// console.log("this is printing the card that eggbert played \n", playCardEgg);
									// let playCard = 			
									// eggbert plays one card -- from dealt cards? 
									// computer plays one card
									// this.announceWinner()		
									// calls the next step
									//IF EGGS CARD VALUE IS HIGHER, THAN ADD 1 POINT TO EGG'S SCORE -- THIS IS BIG PART
									// ELSE THE VICE VERSA -- USING INDEX NUMBERS
									// MAUYBE NEED ALERT SAYING? "COMPUTER PLAYED XYZ CARD, NOW ITS YOUR TURN"
									// PROMPT PLAY CARD 1, 2, 3 FOR EGGBERT -- 
									// USE SPLICE TO REMOVE CARDS FROM EACH PLAYERS HANDS
									// USE THE NAME OF THE CARD PLAYED

	deal: function() {					
		let removedCards;
		for(let i = 0; i < 3; i++) {	
			let removedCards = this.cards.pop()
			this.eggbert.hand.push(removedCards)		// this gives 3 random cards to each player, BUT
														// doesnt send the cards to removedCards	
		}
		for(let j = 0; j < 3; j++) {
			let removedCards = this.cards.pop()
			this.computer.hand.push(removedCards)
		}
				console.log("this is the removedCards inside deal func\n", this.removedCards);
				// alert(thew round number, current round
				// this.battle();
		},

	shuffle: function() {		
		let currentCard;
		for(let i = cards.length - 1; i > 0; i--) {
			let randomNumber = Math.floor(Math.random() * (i + 1))
			currentCard = cards[i]
			cards[i] = cards[randomNumber]
			cards[randomNumber] = currentCard
		}
		this.cards = cards;
		console.log('cards after shuffling')
		console.log(this.cards2)
	},

	start: function() {				
		alert("Pokeman Game! There's 3 rounds. Choose a card to play and try and beat the computer!")
		this.shuffle();
		this.deal();

		// this.battle();
		// this.getPlayerCard();
		// this.announceWinner();
	}
}
	game.start()
	game.shuffle()
	game.deal()
	// game.battle()
	// game.newRound()


// START -- call: shuffle, 


















// Example Play
// There are 18 Pokemon cards in the deck
// Eggbert (the player) is dealt three random cards from the deck
// The computer is dealt three random cards from the deck
// Eggbert chooses a card and plays it! It has a damage of 10.
// The computer randomly chooses a card and plays it! It has a damage of 8.
// Eggbert wins!
// The score is displayed:

// Score: Eggbert: 1, Computer: 0
// Rounds Won: Eggbert: 0, Computer: 0
// They do this again two more times. The round ends.

// The score is displayed. The rounds won are displayed.

// The game object
// For each part, think about:

// What's the best data type for this property? Number? String? Array? object? boolean? 
// Some crazy combination of these).

// Hint/reminder: use a property when you want to "keep track" of something
// Or should you create a method?

// Hint/reminder: use a method when you want to "do" something

// The game should be able to:
// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
		//do we need to move the used cards to another array?
// know how many cards are left to be played/dealt overall
		//this could be counted in the new array
// track points for both the player and the computer Note: Points are determined by the following: 
// If the player's card beats the computer's card, the player gets one point (and vice versa). 
// If there is a tie, no one gets a point.

// track rounds
// track number of rounds won for both player and computer

// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer

// The player object
// The player should be able to:
// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt/see what cards are left in their hand
// pick a card from the hand that has been dealt to them 
// (thereby playing this card agaist the computer's card).

// The round ends once this has happened 3 times.
// receive new cards given to them by the game each round.
// see the cards that they have played in the past.

// The "UI"
// The user should see the following in the console:

// the scoreboard after each round
// the cards in the player's hand
// the cards in the computer's hand
// the cards that are in play
// the winner of each round (or if there was a tie)
// the winner of the game when the game is over
// the final score when the game is over









































