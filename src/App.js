import './App.css';

//pseudo code
/*
1- generate array of 52 cards => DECK, 4 suits, 13 ranks each
2- onClick => shuffle deck (Math.random) => take 4 items from DECK (splice? newDeck?)
3- remove those 4 cards from deck
4- shuffle again from newDeck
5- if (DECK.length < 4) {terminate}

*/


function App() {
  // empty array representing Deck
  const deck = []; //should be 52 cards
  
  const suits = ['D', 'H', 'S', 'C']; //possible suits available (4)
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']//possible ranks available (13)
  
  const initializeDeck = () => {
    for (let suit = 0;suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        let card = {Suit: suits[suit], Rank: ranks[rank]}
        deck.push(card)
      }
    }
  }
  
  const deal = (e) => {
    e.preventDefault();
    if (deck.length < 4) {
      console.log('GAME OVER')
      return false;
    }

    console.log(`deck has: ${deck.length} cards left`) 
    deck.pop()
    deck.pop()
    deck.pop()
    deck.pop()
    
  }

  initializeDeck()
  
  return (
    <div className="App">
      <header className="App-header">
        <button className="dealBtn" onClick={(e) => {deal(e)}}>Deal Cards</button>
      </header>
      <div className='cards-container'>
        <div className='card cardA'>
          <div className="cardInner cardTop">
            <span className="cardRank">J</span>
            <span className="cardSuit">&#127839;</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">J</span>
            <span className="cardSuit">&#127839;</span>
          </div>
        </div>
        <div className='card cardB'>
          <div className="cardInner cardTop">
            <span className="cardRank">A</span>
            <span className="cardSuit">&#127829;</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">A</span>
            <span className="cardSuit">&#127829;</span>
          </div>
        </div>
        <div className='card cardC'>
          <div className="cardInner cardTop">
            <span className="cardRank">3</span>
            <span className="cardSuit">&#127790;</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">3</span>
            <span className="cardSuit">&#127790;</span>
          </div>
        </div>
        <div className='card cardD'>
          <div className="cardInner cardTop">
            <span className="cardRank">10</span>
            <span className="cardSuit">&#127850;</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">10</span>
            <span className="cardSuit">&#127850;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
