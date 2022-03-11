import React, { useEffect, useState} from 'react'
import { nanoid } from 'nanoid'

const Keys = ({ sentence }) => {
    const [keyMatch, setKeyMatch] = useState(false)
    const [keyArray, setKeyArray] = useState([])
    let keyChars = sentence.split('');

    useEffect(() => {
        let keyObjectArray = keyChars.map((item) => {
            return { keyMatch: false, name: item}
        })
        setKeyArray(keyObjectArray)
    }, [sentence])
    console.log("keyArray:", keyArray);

// const checkKeyInput = (e, keyItem) => {
//     if(keyItem.name === e.target.value) {
//         setKeyMatch(true)
//     }
// }

// const matchKey = (e, i, keyItem) => {
//     if(keyItem.name === e.target.value) {
//         let newKeyItem = {
//             ...keyItem,
//             keyMatch: !keyItem.keyMatch
//         }
//         const newKeyArray = [...keyArray]
//         newKeyArray[i].keyMatch = !newKeyArray[i].keyMatch;
//         setKeyArray(newKeyArray)
//     }
// }

const checkKeyInput = (e, id, keyItem) => {
    const newKeyArray = keyArray.map((item) => {
        if(id === e.target.id && keyItem.name === e.target.value) {
            return {...keyItem, keyMatch: true}
        }
        return item;
    })
    setKeyArray(newKeyArray)
  }

  return (
    <>
        <p>{sentence}</p>
        <div className='key-container'>
            {
                
                keyArray.map((keyItem, i) => (
                        <input 
                            onChange={(e, id) => checkKeyInput(keyItem)}
                            // onKeyUp={(e) => matchKey(e, i, keyItem)}
                            type='text' 
                            name={i}
                            id={nanoid()}
                            maxLength={1} 
                            autoComplete='off'
                            className={
                                !keyMatch ? (keyItem.name === ' ' ? 'key space' : 'key')
                                :
                                (keyItem.name === ' ' ? 'key space match' : 'key match')} 
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