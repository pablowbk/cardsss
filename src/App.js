import {useState, useEffect} from 'react';
import RenderCard from './components/RenderCard';
import './App.css';

//pseudo code
/*
1- generate array of 52 cards => DECK, 4 suits, 13 ranks each
2- onClick => shuffle deck (Math.random) => take 4 items from DECK (splice? newDeck?)
3- remove those 4 cards from deck
4- shuffle again from newDeck
5- if (DECK.length < 4) {terminate}

*/

const suits = ['D', 'H', 'S', 'C']; //possible suits available (4) 
// const suits = ['&#127839;', '&#127829;', '&#127790;', '&#127850;']; //possible suits available (4)
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']//possible ranks available (13)

function App() {
  
  // const cardsStart = {Suit: '', Rank: ''};

  // empty array representing Deck
  const [fullDeck, setFullDeck] = useState([]); //should be 52 cards
  const [zeroDeal, setZeroDeal] = useState(true);
  const [flip, setFlip] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [card1, setCard1] = useState({Suit: '', Rank: '', color: ''})
  const [card2, setCard2] = useState({Suit: '', Rank: '', color: ''})
  const [card3, setCard3] = useState({Suit: '', Rank: '', color: ''})
  const [card4, setCard4] = useState({Suit: '', Rank: '', color: ''})

  const initializeDeck = () => {
    const fullDeck = [];
    for (let i = 0;i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let color = suits[i] === 'D' || suits[i] === 'H' ? '#F00' : '#000';
        let card = {Suit: suits[i], Rank: ranks[j], color}
        fullDeck.push(card)
        }
    }
    setFullDeck([...fullDeck])
    setZeroDeal(true)
    setFlip(true)
    setDisabled(false)
    setGameOver(false)   
    setCard1({Suit: '', Rank: ''}) 
    setCard2({Suit: '', Rank: ''})
    setCard3({Suit: '', Rank: ''})
    setCard4({Suit: '', Rank: ''})
  }
  
  const countCards = function() {
    let counter = fullDeck.length;
    return counter;
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const deal = (e) => {
    e.preventDefault();
    setDisabled(true)
    let cardCount = countCards()
    if (cardCount < 52) {
      setFlip(true)
    }

    if (cardCount < 4) {
      console.log('GAME OVER')
      !gameOver && setGameOver(true)
      return false;
    }
    
    setTimeout(function() {
      for(let round = 1;round <= 4; round++) {
        let random = getRandomInt(fullDeck.length);
        if (round === 1) {
          setCard1(fullDeck.splice(random,1)[0])
        } else if (round === 2) {
          setCard2(fullDeck.splice(random,1)[0])
        } else if (round === 3) {
          setCard3(fullDeck.splice(random,1)[0])
        } else {
          setCard4(fullDeck.splice(random,1)[0])
        }
      }
      setFlip(false)
      setDisabled(false)
    },flip ? 50 : 500)

    cardCount = countCards()
    console.log(`deck has: ${cardCount} cards left`) 
  }
  
  useEffect(initializeDeck,[])

  const zeroDealClass = zeroDeal ? 'nodeal' : '';
  const flipClass = flip ? 'showBack' : 'showFront';
  const styleBtn = {backgroundColor: '#ccc'}
  return (
    <div className="App">
      <header className="App-header">
        <button className="dealBtn" 
          style={gameOver ? styleBtn : null}
          onClick={
            (e) => {
              deal(e)
              zeroDeal && setZeroDeal(false)
            }
          }
          disabled={disabled}
        >Deal Cards</button>
      </header>
      
      {!zeroDeal && <button className={!gameOver ? 'resetBtn' : 'resetBtn resetGameOver'} onClick={initializeDeck}>reset</button>}

      <div className='cards-container'>

        <RenderCard card={card1} zeroDealClass={zeroDealClass} flip={flipClass} cardClass={'card1'}/>
        <RenderCard card={card2} zeroDealClass={zeroDealClass} flip={flipClass} cardClass={'card2'}/>
        <RenderCard card={card3} zeroDealClass={zeroDealClass} flip={flipClass} cardClass={'card3'}/>
        <RenderCard card={card4} zeroDealClass={zeroDealClass} flip={flipClass} cardClass={'card4'}/>
        
        {gameOver && <span className='gameOver'>Game Over!</span>}
      </div>

      <div style={{display:'none'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
  );
}

export default App;
