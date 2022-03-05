import './App.css';
import { useState, useEffect } from 'react';
import Keys from './components/Keys';


function App() {
  const [sentence, setSentence] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [shuffledSentence, setShuffledSentence] = useState('')
  const [score, setScore] = useState(0);
  
  const fetchSentence = async () => {
    await fetch(`https://api.hatchways.io/assessment/sentences/${nextNumber}`)
    .then(res => res.json())
    .then(data => setSentence(data.data.sentence))
  }
  
  const splitSentence = async () => {
    let splitWords = await sentence.split(/(\s+)/)
    let splitLetters = splitWords.map((word) => word.length >2 ? shuffleStr(word).split('') : word)
    setShuffledSentence(splitLetters)
    // console.log("splitWords:", splitWords);
    // console.log("splitLetters:", splitLetters);
    }
    
    const shuffleStr = (str) => {
      const randomChars = shuffle([...str.replace(/\s+/g, '')]);
      let index = 0;
      return str.replace(/\S/g, () => randomChars[index++]);
    }
    
    const shuffle = (str) => {
      for (let i = str.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [str[i], str[j]] = [str[j], str[i]];
      }
      return str;
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
      if(sentence) {
        splitSentence()
      }
    }, [sentence, setSentence, nextNumber])

  return (
    <div className="App">
        <section>
          <p>{shuffledSentence}</p>
          <span>{sentence}</span>
        </section>
        <button onClick={fetchNumberCounter}>Next</button>
        <p>Guess the sentence! Start Typing.</p>
        <p>The yellow blocks are meant for spaces.</p>
        <h2>score: {score}</h2>
        <Keys
          sentence={sentence}
        />
    </div>
  );
}

export default App;
