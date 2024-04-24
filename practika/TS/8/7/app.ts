enum Suit {
  CLUBS = "♧",//трефы
  DIAMONDS = "♢",//бубны
  HEARTS = "♡",//червы
  SPEADES = "♤"//пики
}

enum Rank {
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  JACK = "J",
  QEEN = "Q",
  KING = "K",
  ACE = "A"
}

class Card {
  constructor(private _rank: Rank, private _suit: Suit) {

  }
  get rank(): Rank {
    return this._rank;
  }
  get suit(): Suit {
    return this._suit;
  }

  equals(card: Card): boolean {
    return this.rank === card.rank && this.suit === card.suit;
  }

}
class Deck {
  private cards: Card[] = []
  constructor(size: 36 | 52) {

    const suits: Suit[] = [
      Suit.CLUBS, Suit.DIAMONDS,
      Suit.HEARTS, Suit.SPEADES
    ];
    const ranks: Rank[] = [
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

  addCard(card: Card): void {
    if (this.cards.some(e => e.equals(card))) {
      throw new Error("card already exists");
    } else {
      this.cards.push(card);
    }
  }

  getCard(): Card | null {
    const card = this.cards.pop();
    return card === undefined ? null : card;
  }

  showAllCards(): void {
    this.cards.forEach(card => {
      console.log(card.rank + " " + card.suit);
    })
  }

  shuffleDeck(): void {
    this.cards.sort(() => Math.random() - 0.5);
  }
}
class Player {
  private hand: Card[] = [];

  constructor() {}

  getHand(): Card[] {
    return this.hand;
  }

  addToHand(card: Card): void {
    this.hand.push(card);
  }

  clearHand(): void {
    this.hand = [];
  }
}

class Dealer extends Player {
  private deck: Deck;

  constructor(deck: Deck) {
    super();
    this.deck = deck;
  }

  dealInitialCards(player: Player): void {
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

  play(): void {
    while (this.calculateHandValue() < 17) {
      const card = this.deck.getCard();
      if (card) {
        this.addToHand(card);
      }
    }
  }

  calculateHandValue(): number {
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

class Game {
  private player: Player;
  private dealer: Dealer;
  private deck: Deck;

  constructor() {
    this.deck = new Deck(52);
    this.player = new Player();
    this.dealer = new Dealer(this.deck);
  }
  showHands(): void {
    const playerHand = this.player.getHand();
    const dealerHand = this.dealer.getHand();


    const playerCardsString = playerHand.map(card => card.rank + " " + card.suit).join(", ");
    alert(`Карта гравця: ${playerCardsString}`);


    const visibleDealerCard = dealerHand[1];
    alert(`Карта дилера: ${visibleDealerCard.rank} ${visibleDealerCard.suit}\nКарта дилера (прихована): ***`);
  }
  showPlayerHand(): void {
    const playerHand = this.player.getHand();
    const playerCardsString = playerHand.map(card => card.rank + " " + card.suit).join(", ");
    alert(`Ваші карти: ${playerCardsString}`);
  }
  start(): void {
    this.deck.shuffleDeck();
    this.dealer.dealInitialCards(this.player);
    this.showHands();

    this.playerTurn();


    if (!this.checkBust(this.player)) {
      this.dealer.play();
    }

    this.determineWinner();
  }
  playerTurn(): void {
    while (true) {
      this.showPlayerHand()
      if (this.checkBust(this.player)) {
        break;
      }

      if (!this.playerWantsToHit()) {
        break;
      }

      const card = this.deck.getCard();
      if (card) {
        this.player.addToHand(card);
      }
    }
  }
  calculateHandValue(player: Player): number {
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
  checkBust(player: Player): boolean {
    const handValue = this.calculateHandValue(player);
    return handValue > 21;
  }
  playerWantsToHit(): boolean {
    const userResponse = prompt("Хочете взяти карту? Введіть 'Так' або 'Ні'.");

    return userResponse?.toLowerCase() === 'так';
  }
  determineWinner(): void {
    const playerHandValue = this.calculateHandValue(this.player);
    const dealerHandValue = this.calculateHandValue(this.dealer);

    if (this.checkBust(this.player)) {
      alert("Ви програли. Ваша сума очок перевищила 21.");
    } else if (this.checkBust(this.dealer)) {
      alert("Ви виграли. Дилер перебрав.");
    } else if (playerHandValue > dealerHandValue) {
      alert("Ви виграли. Ваша сума очок більше, ніж у дилера.");
    } else if (playerHandValue < dealerHandValue) {
      alert("Ви програли. Сума очок дилера більше, ніж у вас.");
    } else {
      alert("Нічия. Суми очок гравця і дилера однакові.");
    }
  }
}

// Початок гри
const game = new Game();
game.start();
