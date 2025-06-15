import React, { useState } from 'react'

const Toggle = () => {
    const [backgroundColor,setBackgroundColor] = useState('white');
    const [textColor,setTextColor] = useState('#1b1b1b');
    const [buttonStyle,setButtonStyle] = useState('white');

    const handleClick =()=>{
        setBackgroundColor(backgroundColor==='white'? '#1b1b1b': 'white');
        setTextColor(textColor==='#1b1b1b'? 'white': '#1b1b1b');
        setButtonStyle(backgroundColor==='white'? '#1b1b1b': 'white');
    }

  return (
    <div style={{backgroundColor:backgroundColor , color:textColor}}>
        <button onClick={handleClick} style={{buttonStyle:buttonStyle ,color:textColor ,border:`2px solid ${textColor}`}}>
            {backgroundColor === 'white' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <section className="content">
            <h1>
                WELLCOME TO MY PAGE...
            </h1>
        </section>
    </div>
  )
}

export default Toggle