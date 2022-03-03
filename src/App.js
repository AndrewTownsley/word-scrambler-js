import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [sentence, setSentence] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [shuffledSentence, setShuffledSentence] = useState('')
  
  const fetchSentence = async () => {
    await fetch(`https://api.hatchways.io/assessment/sentences/${nextNumber}`)
    .then(res => res.json())
    .then(data => setSentence(data.data.sentence))
  }
  
  const splitSentence = async () => {
    let splitWords = await sentence.split(' ')
    let splitLetters = splitWords.map((word) => shuffle(word.split('')))
    // let splitLetters = splitWords.map((word) => console.log("word",word))
    setShuffledSentence(splitLetters)
    console.log("splitWords:", splitWords);
    console.log("splitLetters:", splitLetters);
    }
    
    
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    
    const fetchNumberCounter = () => {
      if(nextNumber < 10) {
        setNextNumber(nextNumber + 1)
      } else {
        setNextNumber(1)
      }
    }
    
    useEffect(() => {
      fetchSentence()
      splitSentence()
    }, [sentence, setSentence, nextNumber])

  return (
    <div className="App">
        <section>
          <p>{shuffledSentence}</p>
          <span>{sentence}</span>
        </section>
        <button onClick={fetchNumberCounter}>Next</button>
    </div>
  );
}

export default App;
