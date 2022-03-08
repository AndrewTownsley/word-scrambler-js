import './App.css';
import { useState, useEffect } from 'react';
import Keys from './components/Keys';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const [sentence, setSentence] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [shuffledSentence, setShuffledSentence] = useState('')
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // const fetchSentence = async () => {
  //   await fetch(`https://api.hatchways.io/assessment/sentences/${nextNumber}`)
  //   .then(res => {
  //     if(res.ok) {
  //       return res.json();
  //     }
  //     throw new Error('Request failed!');
  //   })
  //   .then(data => setSentence(data.data.sentence))
  //   .catch(err => console.log(err));
  // }

  
  const fetchSentence = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.hatchways.io/assessment/sentences/${nextNumber}`);
      const data = await res.json();
      setSentence(data.data.sentence);
    }
    catch(err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  
  
  const splitSentence = async () => {
    let splitWords = await sentence.split(/(\s+)/)
    let splitLetters = splitWords.map((word) => word.length > 2 ? shuffleStr(word).split('') : word)
    setShuffledSentence(splitLetters)
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
    splitSentence()
  }, [sentence, nextNumber])
  
  return (
    <div className="App">
        {
            isLoading ? <Loading/> : 
          <>
            <section>
              <h1>{shuffledSentence}</h1>
              <span>{sentence}</span>
            </section>
          </>
        }
        <button onClick={fetchNumberCounter}>Next</button>
        <p>Guess the sentence! Start Typing.</p>
        <p>The yellow blocks are meant for spaces.</p>
        <h2>score: {score}</h2>
        {
          isLoading ? <Loading/> :
          <>
            <Keys
              sentence={sentence}
            />
          </>
          }
    </div>
  );
}

export default App;
