import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [sentence, setSentence] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);

  const fetchSentence = async () => {
   await fetch(`https://api.hatchways.io/assessment/sentences/${nextNumber}`)
    .then(res => res.json())
    .then(data => setSentence(data.data.sentence))
  }

  useEffect(() => {
    fetchSentence()
    console.log(sentence);
  }, [sentence, nextNumber])

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
          {sentence}
        </section>
        <p>{nextNumber}</p>
        <button onClick={fetchNumberCounter}>Next</button>
    </div>
  );
}

export default App;
