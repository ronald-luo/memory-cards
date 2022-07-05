import React, { useState } from 'react';
import Card from './components/card'

function App() {

  let [storage, setStorage] = useState({
    "seen": new Set(),
    "arr": ['Groucho','Gwen','Prince','Stinky','Tank','Tipper','Tom','Wolfgang']
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
          "seen": new Set()
        }
      )
    } else {
      setStorage(
        {
          ...storage,
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
      {storage.arr.map(id => {
        return <Card handleClick={handleClick} key={crypto.randomUUID()} id={id}/>
      })}
    </main>
  );
}

export default App;
