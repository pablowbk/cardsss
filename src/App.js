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
  
  function initializeDeck() {
    for (let suit = 0;suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        let card = {Suit: suits[suit], Rank: ranks[rank]}
        deck.push(card)
      }
    }
  }
  
  

  function deal() {
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
        <button onClick={deal}>Deal</button>
      </header>
      <div className='cards-container'>
        <span className='card cardA'>CARD A</span>
        <span className='card cardB'>CARD B</span>
        <span className='card cardC'>CARD C</span>
        <span className='card cardD'>CARD D</span>
      </div>
    </div>
  );
}

export default App;
