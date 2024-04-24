"use strict";
var Suit;
(function (Suit) {
    Suit["CLUBS"] = "\u2667";
    Suit["DIAMONDS"] = "\u2662";
    Suit["HEARTS"] = "\u2661";
    Suit["SPEADES"] = "\u2664"; //пики
})(Suit || (Suit = {}));
var Rank;
(function (Rank) {
    Rank["TWO"] = "2";
    Rank["THREE"] = "3";
    Rank["FOUR"] = "4";
    Rank["FIVE"] = "5";
    Rank["SIX"] = "6";
    Rank["SEVEN"] = "7";
    Rank["EIGHT"] = "8";
    Rank["NINE"] = "9";
    Rank["TEN"] = "10";
    Rank["JACK"] = "J";
    Rank["QEEN"] = "Q";
    Rank["KING"] = "K";
    Rank["ACE"] = "A";
})(Rank || (Rank = {}));
class Card {
    constructor(_rank, _suit) {
        this._rank = _rank;
        this._suit = _suit;
    }
    get rank() {
        return this._rank;
    }
    get suit() {
        return this._suit;
    }
    equals(card) {
        return this.rank === card.rank && this.suit === card.suit;
    }
}
class Deck {
    constructor(size) {
        this.cards = [];
        const suits = [
            Suit.CLUBS, Suit.DIAMONDS,
            Suit.HEARTS, Suit.SPEADES
        ];
        const ranks = [
            Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE,
            Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE,
            Rank.TEN, Rank.JACK, Rank.QEEN, Rank.KING, Rank.ACE
        ];
        for (const suit of suits) {
            for (const rank of ranks) {
                if (size === 36 && (rank === Rank.TWO || rank === Rank.THREE || rank === Rank.FOUR || rank === Rank.FIVE)) {
                    continue;
                }
                this.cards.push(new Card(rank, suit));
            }
        }
    }
    addCard(card) {
        if (this.cards.some(e => e.equals(card))) {
            throw new Error("card already exists");
        }
        else {
            this.cards.push(card);
        }
    }
    getCard() {
        const card = this.cards.pop();
        return card === undefined ? null : card;
    }
    showAllCards() {
        this.cards.forEach(card => {
            console.log(card.rank + " " + card.suit);
        });
    }
    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }
}
// Оголошення класу Гравець
class Player {
    constructor() {
        this.hand = [];
    }
    getHand() {
        return this.hand;
    }
    addToHand(card) {
        this.hand.push(card);
    }
    clearHand() {
        this.hand = [];
    }
}
class Dealer extends Player {
    constructor(deck) {
        super();
        this.deck = deck;
    }
    dealInitialCards(player) {
        for (let i = 0; i < 2; i++) {
            const card = this.deck.getCard();
            if (card) {
                player.addToHand(card);
            }
            const dealerCard = this.deck.getCard();
            if (dealerCard) {
                this.addToHand(dealerCard);
            }
        }
    }
    play() {
        while (this.calculateHandValue() < 17) {
            const card = this.deck.getCard();
            if (card) {
                this.addToHand(card);
            }
        }
    }
    calculateHandValue() {
        let sum = 0;
        let numberOfAces = 0;
        for (const card of this.getHand()) {
            switch (card.rank) {
                case Rank.TWO:
                case Rank.THREE:
                case Rank.FOUR:
                case Rank.FIVE:
                case Rank.SIX:
                case Rank.SEVEN:
                case Rank.EIGHT:
                case Rank.NINE:
                case Rank.TEN:
                    sum += parseInt(card.rank);
                    break;
                case Rank.JACK:
                case Rank.QEEN:
                case Rank.KING:
                    sum += 10;
                    break;
                case Rank.ACE:
                    sum += 11;
                    numberOfAces++;
                    break;
            }
        }
        while (numberOfAces > 0 && sum > 21) {
            sum -= 10;
            numberOfAces--;
        }
        return sum;
    }
}
// Оголошення класу Гра
class Game {
    constructor() {
        this.deck = new Deck(52);
        this.player = new Player();
        this.dealer = new Dealer(this.deck);
    }
    showHands() {
        const playerHand = this.player.getHand();
        const dealerHand = this.dealer.getHand();
        // Покажемо карти гравця
        const playerCardsString = playerHand.map(card => card.rank + " " + card.suit).join(", ");
        alert(`Карта гравця: ${playerCardsString}`);
        // Покажемо одну видиму карту дилера та одну приховану
        const visibleDealerCard = dealerHand[1];
        alert(`Карта дилера: ${visibleDealerCard.rank} ${visibleDealerCard.suit}\nКарта дилера (прихована): ***`);
    }
    showPlayerHand() {
        const playerHand = this.player.getHand();
        const playerCardsString = playerHand.map(card => card.rank + " " + card.suit).join(", ");
        alert(`Ваші карти: ${playerCardsString}`);
    }
    start() {
        this.deck.shuffleDeck();
        this.dealer.dealInitialCards(this.player);
        this.showHands();
        // Гравець ходить
        this.playerTurn();
        // Якщо гравець не програв, то дилер ходить
        if (!this.checkBust(this.player)) {
            this.dealer.play();
        }
        // Визначте переможця
        this.determineWinner();
    }
    playerTurn() {
        while (true) {
            // Виведіть гравцеві його карты та можливі дії (брати карту або закінчувати хід)
            // Використовуйте prompt та alert для взаємодії з гравцем
            this.showPlayerHand();
            // Перевірте, чи гравець не програв (сума його карт більше 21)
            if (this.checkBust(this.player)) {
                this.determineWinner();
                break;
            }
            // Якщо гравець закінчив хід, вийдіть з циклу
            if (!this.playerWantsToHit()) {
                break;
            }
            // Якщо гравець хоче взяти карту, дайте йому карту
            const card = this.deck.getCard();
            if (card) {
                this.player.addToHand(card);
            }
        }
    }
    calculateHandValue(player) {
        let sum = 0;
        let numberOfAces = 0;
        for (const card of player.getHand()) {
            switch (card.rank) {
                case Rank.TWO:
                case Rank.THREE:
                case Rank.FOUR:
                case Rank.FIVE:
                case Rank.SIX:
                case Rank.SEVEN:
                case Rank.EIGHT:
                case Rank.NINE:
                case Rank.TEN:
                    sum += parseInt(card.rank);
                    break;
                case Rank.JACK:
                case Rank.QEEN:
                case Rank.KING:
                    sum += 10;
                    break;
                case Rank.ACE:
                    sum += 11;
                    numberOfAces++;
                    break;
            }
        }
        while (numberOfAces > 0 && sum > 21) {
            sum -= 10;
            numberOfAces--;
        }
        return sum;
    }
    checkBust(player) {
        const handValue = this.calculateHandValue(player);
        return handValue > 21;
    }
    playerWantsToHit() {
        const userResponse = prompt("Хочете взяти карту? Введіть 'Так' або 'Ні'.");
        return (userResponse === null || userResponse === void 0 ? void 0 : userResponse.toLowerCase()) === 'так';
    }
    determineWinner() {
        const playerHandValue = this.calculateHandValue(this.player);
        const dealerHandValue = this.calculateHandValue(this.dealer);
        if (this.checkBust(this.player)) {
            alert("Ви програли. Ваша сума очок перевищила 21.");
        }
        else if (this.checkBust(this.dealer)) {
            alert("Ви виграли. Дилер перебрав.");
        }
        else if (playerHandValue > dealerHandValue) {
            alert("Ви виграли. Ваша сума очок більше, ніж у дилера.");
        }
        else if (playerHandValue < dealerHandValue) {
            alert("Ви програли. Сума очок дилера більше, ніж у вас.");
        }
        else {
            alert("Нічия. Суми очок гравця і дилера однакові.");
        }
    }
}
// Початок гри
const game = new Game();
game.start();
