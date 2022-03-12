import React, { useEffect, useState} from 'react'
import { nanoid } from 'nanoid'

const Keys = ({ sentence }) => {
    const [keyMatch, setKeyMatch] = useState(false)
    const [keyArray, setKeyArray] = useState([])
    const [keyInputCheckArray, setKeyInputCheckArray] = useState([]);
    const [solution, setSolution] = useState(false);
    let keyChars = sentence.split('');
    let keyCharsToArray = keyArray.map((item) => {
        return item.name
    })


    useEffect(() => {
        let keyObjectArray = keyChars.map((item) => {
            return { keyMatch: false, name: item, id: nanoid()}
        })
        setKeyArray(keyObjectArray)
    }, [sentence])

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

// const checkKeyInput = (e, id, keyItem) => {
//     console.log("id:", id);
//     console.log("keyItem: ", keyItem.name);
//     console.log("e.target.value: ",e.target.value);
//     console.log("e.target.id: ",e.target.id);
//     console.log("keyMatch: ", keyMatch);
//     const newKeyArray = keyArray.map((item) => {
//         // if(id === e.target.id && keyItem.name === e.target.value) {
//         if(keyItem) {
//             return {...keyItem, keyMatch: true}
//         }
//         return item;
//     })
//     setKeyArray(newKeyArray)
//     console.log("keyMatch: ", keyMatch);
//   }

const checkKeyInput = (e, id, keyItem) => {
    const newKeyArray = keyArray.map((item) => {
        if (item.id === keyItem.id && keyItem.name === e.target.value) {
        //   console.log(item.id, keyItem.id);
        const updatedItem = {
          ...item,
          keyMatch: !item.keyMatch,
        };

        setKeyInputCheckArray([...keyInputCheckArray, keyItem.name]);
        return updatedItem;
    }
    return item;
});
setKeyArray(newKeyArray);
}

console.log("keyInputCheckArray:",keyInputCheckArray);
console.log("keyArray:", keyArray.map((item) => {
    return item.name
}));

const checkCorrectSentence = (arr1, arr2) =>  {
    if(arr1.length === arr2.length) {
        arr1.every((item, idx) => {
            if(item === arr2[idx]) {
                setSolution(true)
                return true;
            }
            return false
        })
        console.log(solution);
    }
}

  return (
    <>
        <p>{sentence}</p>
        {
            solution 
            ? 
            <h3>Success!! You Win!!</h3>
            :
            null
        }
        <div className='key-container'>
            {
                
                keyArray.map((keyItem, i) => (
                        <input 
                            type='text' 
                            maxLength={1} 
                            autoComplete='off'
                            className={
                                !keyItem.keyMatch ? (keyItem.name === ' ' ? 'key space' : 'key')
                                :
                                (keyItem.name === ' ' ? 'key space match' : 'key-match')} 
                            key={i}
                            onChange={(e, id) => checkKeyInput(e, id, keyItem)}
                            onKeyUp={() => checkCorrectSentence(keyInputCheckArray, keyCharsToArray)}
                        >
                        </input>
                ))
            }
        </div>
    </>
  )
}

export default Keys