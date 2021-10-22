import {useState, useEffect} from 'react';
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
  const [deck, setDeck] = useState([]); //should be 52 cards
  
  // const suits = ['D', 'H', 'S', 'C']; //possible suits available (4)
  const suits = ['&#127839;', '&#127829;', '&#127790;', '&#127850;']; //possible suits available (4)
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']//possible ranks available (13)
  
  const [zeroDeal, setZeroDeal] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [cardsStart, setCardsStart] = useState([
    {Suit: '', Value: ''},
    {Suit: '', Value: ''},
    {Suit: '', Value: ''},
    {Suit: '', Value: ''}
  ])

  const initializeDeck = () => {
    // setZeroDeal(false)
    const tempDeck = [];
    for (let suit = 0;suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        let color = suit % 2 === 0 ? '#F00' : '#000';
        let card = {Suit: suits[suit], Rank: ranks[rank], color}
        tempDeck.push(card)
      }
    }
    setDeck([...tempDeck])
    setZeroDeal(true)
    setGameOver(false)
  }
  
  

  const deal = (e) => {
    // setZeroDeal(false)
    e.preventDefault();
    if (deck.length < 4) {
      console.log('GAME OVER')
      !gameOver && setGameOver(true)
      return false;
    }

    console.log(`deck has: ${deck.length} cards left`) 
    console.log(deck[deck.length - 1], deck[deck.length-2], deck[deck.length-3], deck[deck.length-4])
    deck.splice(-4)
  }
  
  useEffect(() => {
    initializeDeck()
  },[])
  

  const zeroDealClass = zeroDeal ? 'nodeal' : '';
  return (
    <div className="App">
      <header className="App-header">
        <button className="dealBtn" 
        onClick={
          (e) => {
            deal(e)
            zeroDeal && setZeroDeal(false)
          }
        }
        >Deal Cards</button>
      </header>
      <button className='resetBtn' onClick={initializeDeck}>reset</button>
      <div className='cards-container'>
        {gameOver && <span className='gameOver'>Game Over!</span>}
        <div className={`card cardA ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{!gameOver ? cardsStart.Value : deck[deck.length - 1].Rank}</span>
            <span className="cardSuit">{!gameOver ? cardsStart.Suit : deck[deck.length - 1].Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{!gameOver ? cardsStart.Value : deck[deck.length - 1].Rank}</span>
            <span className="cardSuit">{!gameOver ? cardsStart.Suit : deck[deck.length - 1].Suit}</span>
          </div>
        </div>
        <div className={`card cardB ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
        </div>
        <div className={`card cardC ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
        </div>
        <div className={`card cardD ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{!gameOver && cardsStart.Value}</span>
            <span className="cardSuit">{!gameOver && cardsStart.Suit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
