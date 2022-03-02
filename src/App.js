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

  useEffect(() => {
    fetchSentence()
    setShuffledSentence(shuffle(sentence.split('')))
    console.log(sentence);
  }, [sentence, nextNumber])

  // useEffect(() => {
  //   setShuffledSentence(shuffle(sentence.split('')))
    console.log(shuffledSentence);
  // }, [setSentence, sentence, shuffledSentence])

  
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
// console.log(shuffle(sentence.split('')));
  
  return (
    <div className="App">
        <section>
          {shuffledSentence}
          {/* {sentence} */}
        </section>
        <button onClick={fetchNumberCounter}>Next</button>
    </div>
  );
}

export default App;
