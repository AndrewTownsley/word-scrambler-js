import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [sentence, setSentence] = useState([]);

  const fetchSentence = async () => {
   await fetch(`https://api.hatchways.io/assessment/sentences/1`)
    .then(res => res.json())
    .then(data => setSentence(data.data.sentence))
  }


  useEffect(() => {
    fetchSentence()
    console.log(sentence);
  }, [sentence])
  
  return (
    <div className="App">
        <section>
          {sentence}
        </section>
    </div>
  );
}

export default App;
