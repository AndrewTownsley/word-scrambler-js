import React from 'react'

const Keys = ({ sentence }) => {
    const sentenceError = 'sentence error'
    let keyChars =  sentence !== undefined ? sentence.split('') : sentenceError.split('');
    // console.log(keyChars.map((key) => (
    //     key.value
    // )));
    // console.log(Array.isArray(keyChars));

  return (
    <>
        <p>{sentence}</p>
        <div className='key-container'>
            {
                keyChars.map((key, i) => (
                    <span className={key === ' ' ? 'key space' : 'key'} key={i}>{key}</span>
                ))
            }
        </div>
    </>
  )
}

export default Keys