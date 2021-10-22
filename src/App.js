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
  const suits = ['D', 'H', 'S', 'C']; //possible suits available (4) 
  // const suits = ['&#127839;', '&#127829;', '&#127790;', '&#127850;']; //possible suits available (4)
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']//possible ranks available (13)
  
  // const cardsStart = {Suit: '', Rank: ''};

  // empty array representing Deck
  const [deck, setDeck] = useState([]); //should be 52 cards
  const [zeroDeal, setZeroDeal] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [clubs, setClubs] = useState({Suit: '', Rank: ''})
  const [spades, setSpades] = useState({Suit: '', Rank: ''})
  const [hearts, setHearts] = useState({Suit: '', Rank: ''})
  const [diamonds, setDiamonds] = useState({Suit: '', Rank: ''})


  const initializeDeck = () => {
    // setZeroDeal(false)
    const tempDeck = [];
    for (let suit = 0;suit < suits.length; suit++) {
      let tempSuit = suits[suit];
      tempDeck.push({[tempSuit]: []});
      let tempRanks = [];
      for (let rank = 0; rank < ranks.length; rank++) {
        let color = suit % 2 === 0 ? '#F00' : '#000';
        let card = {Suit: suits[suit], Rank: ranks[rank], color}
        tempRanks.push(card)
        }
      tempDeck[suit][tempSuit] = tempRanks;
    }
    setDeck([...tempDeck])
    setZeroDeal(true)
    setGameOver(false)   
    setDiamonds({Suit: '', Rank: ''}) 
    setHearts({Suit: '', Rank: ''})
    setSpades({Suit: '', Rank: ''})
    setClubs({Suit: '', Rank: ''})
  }
  
  const countCards = function() {
    let counter = 0;
    deck.forEach((item) => {counter += Object.values(item)[0].length})
    return counter;
  }

  const deal = (e) => {
    // setZeroDeal(false)
    // console.log(visibleCards)
    let cardCount = countCards()
    e.preventDefault();
    if (cardCount < 4) {
      console.log('GAME OVER')
      !gameOver && setGameOver(true)
      return false;
    }
    
    setDiamonds({Suit: deck[0].D[deck[0].D.length-1].Suit, Rank: deck[0].D[deck[0].D.length-1].Rank})
    setHearts({Suit: deck[1].H[deck[1].H.length-1].Suit, Rank: deck[1].H[deck[1].H.length-1].Rank})
    setSpades({Suit: deck[2].S[deck[2].S.length-1].Suit, Rank: deck[2].S[deck[2].S.length-1].Rank})
    setClubs({Suit: deck[3].C[deck[3].C.length-1].Suit, Rank: deck[3].C[deck[3].C.length-1].Rank})
    
    console.log(`deck has: ${cardCount} cards left`) 
    deck.forEach(suit=>{ 
      for(const key in suit) {
        suit[key].pop()
      }
    })
  
  }
  
  useEffect(() => {
    initializeDeck()
    console.log(deck)
  },[])
  

  const zeroDealClass = zeroDeal ? 'nodeal' : '';
  const disableBtn = {backgroundColor: '#ccc'}
  return (
    <div className="App">
      <header className="App-header">
        <button className="dealBtn" style={gameOver ? disableBtn : null}
        onClick={
          (e) => {
            deal(e)
            zeroDeal && setZeroDeal(false)
          }
        }
        >Deal Cards</button>
      </header>
      
      {!zeroDeal && <button className='resetBtn' onClick={initializeDeck}>reset</button>}

      <div className='cards-container'>
        {gameOver && <span className='gameOver'>Game Over!</span>}
        <div className={`card cardA ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{clubs.Rank}</span>
            <span className="cardSuit">{clubs.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{clubs.Rank}</span>
            <span className="cardSuit">{clubs.Suit}</span>
          </div>
        </div>
        <div className={`card cardB ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{hearts.Rank}</span>
            <span className="cardSuit">{hearts.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{hearts.Rank}</span>
            <span className="cardSuit">{hearts.Suit}</span>
          </div>
        </div>
        <div className={`card cardC ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{spades.Rank}</span>
            <span className="cardSuit">{spades.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{spades.Rank}</span>
            <span className="cardSuit">{spades.Suit}</span>
          </div>
        </div>
        <div className={`card cardD ${zeroDealClass}`}>
          <div className="cardInner cardTop">
            <span className="cardRank">{diamonds.Rank}</span>
            <span className="cardSuit">{diamonds.Suit}</span>
          </div>
          <div className="cardInner cardBottom">
            <span className="cardRank">{diamonds.Rank}</span>
            <span className="cardSuit">{diamonds.Suit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
