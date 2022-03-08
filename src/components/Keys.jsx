import React, { useState} from 'react'

  ///////////////////////////////////////////////////
  // - isLoading element to prevent error from fetching api data
  /////////////////////////////////////////////////
  // - isLoading element to prevent error from fetching api data
  // - isLoading element to prevent error from fetching api data

const Keys = ({ sentence }) => {
    const [keyMatch, setKeyMatch] = useState(false)
    let keyChars = sentence.split('');
    const sentenceList = {...keyChars};
    // const newSentenceList = sentenceList.forEach((item) => ({
    //     ...item,
    //     match: false,
    // })
    // )
    // console.log(keyChars);
    // console.log(sentenceList);
    

    const checkKeyInput = (i, e, keyItem) => {
        let keyInputArray = []
        if(e.target.value === keyItem && Number(e.target.name) === i)
            setKeyMatch(true)
            keyInputArray = [ keyInputArray, ...keyItem]
            console.log(keyInputArray);
        }

//     const handleChange = (e, i) => {
//         // when input equals maxLength of the input, autofocus the next input
//         const { maxLength, value } = e.target;
//         if(value.length === maxLength) {
//             const nextSibling = document.querySelector(`input[${Number(i) + 1}]`);
//             if(nextSibling !== null) {
//                 nextSibling.focus();
//             }
//         }
// }

  return (
    <>
        <p>{sentence}</p>
        <div className='key-container'>
            {
                keyChars.map((keyItem, i) => (
                    <input 
                        onChange={(e) => checkKeyInput(i, e, keyItem)}
                        // onChange={(e, i) => handleChange(e, i)}
                        type='text' 
                        name={i}
                        maxLength={1} 
                        className={
                            !keyMatch ? (keyItem === ' ' ? 'key space' : 'key')
                            :
                            (keyItem=== ' ' ? 'key space match' : 'key match')} 
                        key={i}
                    >
                    </input>
                ))
            }
        </div>
    </>
  )
}

export default Keys