enum Suit {
  Pica = 'Піка',
  Hrest = 'Хресті',
  Buba = 'Буба',
  Chirva = 'Чірва',
}

enum Rank {
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace,
}



function stringToRank(value: string): Rank | undefined {
  const enumValue = Rank[value as keyof typeof Rank];
  return enumValue !== undefined ? enumValue : undefined;
}

// const rankType: typeof Rank = Rank;
// console.log( rankType);


const str = 'Nine';
const rankValue = stringToRank(str);

if (rankValue !== undefined) {
  console.log('Converted enum value:', rankValue);
} else {
  console.log('Invalid enum string:', str);
}

// class Card {
//   rank: Rank;
//   suit: Suit;
//   constructor(rank: Rank, suit: Suit) {
//     this.rank = rank
//     this.suit = suit
//   }

//   equals(otherCard: Card): boolean {
//     return this.rank === otherCard.rank && this.suit === otherCard.suit;
//   }

// }
// class Deck {
//   deck: Card[] = []
//   constructor(cardsQuantity: 36 | 52) {
  
//     const suits: Suit[] = [Suit.Pica, Suit.Hrest, Suit.Buba, Suit.Chirva];
//     const ranks: Rank[] = [
//       Rank.Two, Rank.Three, Rank.Four, Rank.Five, Rank.Six, Rank.Seven,
//       Rank.Eight, Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King, Rank.Ace,
//     ];

    for (const suit of suits) {
      for (const rank of ranks) {
        if(cardsQuantity === 36 && rank === Rank.Two || rank === Rank.Three || rank === Rank.Four || rank === Rank.Five ){
          continue
        }
        this.deck.push(new Card(rank, suit));
      }
    }
//   }

//   setDeckCard = (card: Card) => {
//     console.log(card);
//     if (this.deck.some(existingCard => existingCard.equals(card))) {
//       console.log('Така карта в колоді вже є');
//     } else {
//       console.log('Поклав в колу!');
//       this.deck.push(card);
//     }
//   }

//   getDeckCard():Card | null {
//     let card
//       if (this.deck.length !== 0) {
//         console.log(`Тримайте ${this.deck[0].rank} ${this.deck[0].suit}`);
//         card = this.deck[0]
//         this.deck.splice(0, 1);
//       } else {
//         console.log('Нажаль в колоді закінчились карти');
//         return null
//       }

//       return card
//   }

//   showAllCards():void{
//     this.deck.forEach(card=>{
//       console.log(card.rank + " " + card.suit);
//     })
//   }

//   shuffleDeck(){
//       this.deck.sort(() => Math.random() - 0.5);
//   }

// }

// const deck36 = new Deck(36)

// console.log(deck36.deck);

// const sixChirva = new Card(Rank.Nine,Suit.Chirva)

// deck36.setDeckCard(sixChirva)

// const myCard = deck36.getDeckCard()




// if(myCard !== null){
//   deck36.setDeckCard(myCard)
//   deck36.setDeckCard(myCard)
// }


// deck36.shuffleDeck()
// deck36.showAllCards()



