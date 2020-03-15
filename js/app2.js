console.log("starting Over");

const cards = [
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
]
console.log("this is the original deck \n", cards);

// const cards2 = []
// for(let i = 0; i < cards.length; i++) {
// 	cards2.push(cards[i])
// }

const game = {
	eggbert: { score: 0, hand: [], },
	computer: { score: 0, hand: [], },
	rounds: 0,
	cards2: [],
	deck: [],
	playCardComp: [],
	playCardEgg: [],
	removedCards: [],
	dealtCards: [],
	eggbertHand: [],
	computerHand: [],
	movedCards: [],
	bestCard: [],


	useBestCard: function() {
		let bestCard;
		for(let i = 0; i < this.computerHand.length; i++) {
			if(this.computerHand[1]["damage"] > this.eggbertHand[1]["damage"]) {
				alert("computer won that round")
				this.computer.score += 1
			} else {
				alert("eggbert won that round!")
				this.eggbert.score += 1
				this.rounds += 1
			}
		}
	},

	giveCardsComputer: function() {
		let movedCards;
		for(let i = 0; i < 3; i++) {
			let movedCards = this.removedCards.pop()
				this.computerHand.push(movedCards)
				console.log("this moves 3 cards from removedCards to computersHand array\n", game.computerHand);
		}
	},

	giveCardsEggbert: function() {
		let movedCards;
		for(let i = 0; i < 3; i++) {
			let movedCards = this.removedCards.pop()
				this.eggbertHand.push(movedCards)
				console.log("this moves 3 cards from removedCards to eggbertsHand array\n", game.eggbertHand);
		}

	},

	dealCards: function() {
		let removedCards;
		for(let i = 0; i < 6; i++) {
			let dealtCards = cards.pop()
			removedCards = cards[i]
			cards[i] = cards[dealtCards]
			cards[dealtCards] = removedCards
			this.removedCards.push(dealtCards)
				console.log("this pops the last 6 cards off of cards array and moves to removedCards array\n", game.removedCards);

		}
		this.giveCardsEggbert()
		this.giveCardsComputer()
	},

	start: function() {
		const startGame = prompt(`Want to play Pokemon?`, "(Y/N)")
		if(startGame.toLowerCase() === "Y") {
		}
			this.dealCards()
	}

}
game.start()









