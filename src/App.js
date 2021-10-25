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
  const [deck, setDeck] = useState([]); //should be 52 cards
  const [zeroDeal, setZeroDeal] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [clubs, setClubs] = useState({Suit: '', Rank: '', color: ''})
  const [spades, setSpades] = useState({Suit: '', Rank: '', color: ''})
  const [hearts, setHearts] = useState({Suit: '', Rank: '', color: ''})
  const [diamonds, setDiamonds] = useState({Suit: '', Rank: '', color: ''})

  const initializeDeck = () => {
    // setZeroDeal(false)
    const tempDeck = [];
    for (let i = 0;i < suits.length; i++) {
      let tempSuit = suits[i];
      tempDeck.push({[tempSuit]: []});
      let tempRanks = [];
      for (let j = 0; j < ranks.length; j++) {
        let color = suits[i] === 'D' || suits[i] === 'H' ? '#F00' : '#000';
        let card = {Suit: suits[i], Rank: ranks[j], color}
        tempRanks.push(card)
        }
      tempDeck[i][tempSuit] = tempRanks;
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

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const deal = (e) => {
    e.preventDefault();
    let cardCount = countCards()
    
    if (cardCount < 4) {
      console.log('GAME OVER')
      !gameOver && setGameOver(true)
      return false;
    }

    // setDiamonds(deck[0].D[deck[0].D.length - 1])
    // setHearts(deck[1].H[deck[1].H.length - 1])
    // setSpades(deck[2].S[deck[2].S.length - 1])
    // setClubs(deck[3].C[deck[3].C.length - 1])
    
    
    //remove 4 cards from deck
    deck.forEach(suit=>{ 
      for(const key in suit) {
        let random = getRandomInt(suit[key].length);
        switch(key) {
          case 'D':
          // case '&#127839;':
          setDiamonds(suit[key].splice(random,1)[0])
          // console.log(suit[key].splice(random,1)[0])
          break;
          case 'H':
          // case '&#127829;':
          setHearts(suit[key].splice(random,1)[0])
          // console.log(suit[key].splice(random,1)[0])
          break;
          case 'S':
          // case '&#127790;':
          setSpades(suit[key].splice(random,1)[0])
          // console.log(suit[key].splice(random,1)[0])
          break;
          case 'C':
          // case '&#127850;':
          setClubs(suit[key].splice(random,1)[0])
          // console.log(suit[key].splice(random,1)[0])
          break;
          default:
            return {Suit: '', Rank: '', color: ''}
        }
      }
    })

    cardCount = countCards()

    console.log(`deck has: ${cardCount} cards left`) 
    
  }
  

  // useEffect(() => {
  //   initializeDeck()
  //   console.log(deck)
  // },[]) //this worked but threw a warning, so we passed initializeDeck as a callback, so it would run just once

  useEffect(initializeDeck,[])
  

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

        <RenderCard card={spades} zeroDealClass={zeroDealClass} />
        <RenderCard card={hearts} zeroDealClass={zeroDealClass} />
        <RenderCard card={clubs} zeroDealClass={zeroDealClass} />
        <RenderCard card={diamonds} zeroDealClass={zeroDealClass} />
      </div>

    </div>
  );
}

export default App;
