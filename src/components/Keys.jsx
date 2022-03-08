import React, { useEffect, useState} from 'react'

const Keys = ({ sentence, keyArray, setKeyArray }) => {
    const [keyMatch, setKeyMatch] = useState(false)
    // const [keyArray, setKeyArray] = useState([])
    let keyChars = sentence.split('');
    const keyCharToObj = keyChars.map((item) => {
        return { match: false, name: item}
    })

    const mapObj = keyCharToObj.map((obj) => (
        console.log(obj.name)
    ))
    // console.log(mapObj);

        console.log("keyToObj:",keyCharToObj);

    // useEffect(() => {
    //     const keyCharToObj = () => {
    //         const newKeyChars = [...keyChars]
    //         newKeyChars.map((item) => {
    //             return {...item, match: false}
    //         })
    //         setKeyArray(newKeyChars)
    //         console.log(keyArray);
    //     }
    //     keyCharToObj()
    // }, [keyArray])
    //     console.log("keyArray:",keyArray);
    
    // const checkKeyInput = (i, e, keyItem) => {
    //     const newKeyChars = [...keyChars];
    //     if(e.target.value === keyItem) {
    //         setKeyMatch(true)
    //         newKeyChars[i].keyMatch = !newKeyChars[i].keyMatch;
    //         keyChars = [...newKeyChars]
    //     }
    // }

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
                
                keyCharToObj.map((keyItem, i) => (
                    <input 
                        // onChange={(e) => checkKeyInput(i, e, keyItem)}
                        // onChange={(e, i) => handleChange(e, i)}
                        onChange={() => console.log(keyItem.match)}
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