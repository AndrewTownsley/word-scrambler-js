import React, { useEffect, useState} from 'react'
import { nanoid } from 'nanoid'

const Keys = ({ sentence }) => {
    const [keyMatch, setKeyMatch] = useState(false)
    const [keyArray, setKeyArray] = useState([])
    let keyChars = sentence.split('');

    useEffect(() => {
        let keyObjectArray = keyChars.map((item) => {
            return { keyMatch: false, name: item, id: nanoid()}
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

function checkKeyInput(e, id, keyItem) {
    const newKeyArray = keyArray.map((item) => {
        if (item.id === keyItem.id && keyItem.name === e.target.value) {
        //   console.log(item.id, keyItem.id);
        const updatedItem = {
          ...item,
          keyMatch: !item.keyMatch,
        };
        console.log("updatedItem: ",updatedItem);
        return updatedItem;
    }
    return item;
});
setKeyArray(newKeyArray);
console.log("newKeyArray: ", newKeyArray);
  }

  return (
    <>
        <p>{sentence}</p>
        <div className='key-container'>
            {
                
                keyArray.map((keyItem, i) => (
                        <input 
                        // onChange={(e, id) => checkKeyInput(e, id, keyItem)}
                        // onKeyUp={(e) => matchKey(e, i, keyItem)}
                        type='text' 
                        // name={i}
                        maxLength={1} 
                        autoComplete='off'
                        // className={keyItem.keyMatch ? 'key-match' : 'key'}
                        className={
                                !keyItem.keyMatch ? (keyItem.name === ' ' ? 'key space' : 'key')
                                :
                                (keyItem.name === ' ' ? 'key space match' : 'key-match')} 
                            key={i}
                        onChange={(e, id) => checkKeyInput(e, id, keyItem)}
                        >
                        </input>
                ))
            }
        </div>
    </>
  )
}

export default Keys