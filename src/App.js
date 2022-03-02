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
    // .then(data => console.log(data.data.sentence))
    // let splitWords = sentence.split(' ')
    // let splitLetters = shuffle(splitWords.map((word) => word.split('')))
    // setShuffledSentence(splitWords)
    // console.log(sentence);
  }
  
  const splitSentence = () => {
    let splitWords = sentence.split(' ')
    let splitLetters = shuffle(splitWords.map((word) => shuffle(word.split(''))))
    setShuffledSentence(splitLetters)
    console.log("splitLetters:", splitLetters);
    }
    
    useEffect(() => {
      fetchSentence();
      splitSentence()
    }, [sentence, setSentence, nextNumber])
  
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
  
  return (
    <div className="App">
        <section>
          {shuffledSentence}
          {/* <p>Sentence: </p>{sentence} */}
        </section>
        <button onClick={fetchNumberCounter}>Next</button>
    </div>
  );
}

export default App;
