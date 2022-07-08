import React, { useState } from 'react';
import Card from './components/card'

function App() {

  let [storage, setStorage] = useState({
    "seen": new Set(),
    "arr": ['Groucho','Gwen','Prince','Stinky','Tank','Tipper','Tom','Wolfgang'],
    "current_score": 0,
    "best_score": 0
  });

  function shuffle (array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const handleClick = (e) => {

    shuffle(storage.arr)

    if (storage.seen.has(e.target.id)) {
      console.log('you lose, storage reset')
      setStorage(
        {
          ...storage,
          "current_score": 0,
          "seen": new Set()
        }
      )
    } else {
      setStorage(
        {
          ...storage,
          "current_score": storage.current_score + 1,
          "best_score": Math.max(storage.current_score + 1, storage.best_score),
          "seen": storage.seen.add(e.target.id)
        }
      )

      if (storage.seen.size === 8) {
        console.log('you win, storage reset')
        setStorage(
          {
            ...storage,
            "seen": new Set()
          }
        )
      }
    }
    
  }

  return (
    
    <main>
      <h1>
        Memory Cards
      </h1>

      <p>
        Click on all the villagers, but don't click on anyone twice. Good luck!
      </p>

      <p class="score">Score: {storage.current_score} | Best: {storage.best_score}</p>

      <div className="card-container">
        {storage.arr.map(id => {
          return <Card handleClick={handleClick} key={crypto.randomUUID()} id={id}/>
        })}
      </div>

      <footer>
        <a href="https://www.ronald-luo.com/100-websites/">
          <img src="https://s2.svgbox.net/social.svg?ic=ghost&color=000" width="32" height="32"></img>
        </a>
        <a href="https://github.com/ronald-luo/memory-cards">
          <img src="https://s2.svgbox.net/social.svg?ic=github&color=000" width="32" height="32"></img>
        </a>
      </footer>
    </main>
  );
}

export default App;
