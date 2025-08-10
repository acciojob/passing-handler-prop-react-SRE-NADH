
import React, { useState } from 'react'

const Selection = ({applyColor}) => {
   const [background,setBackground] = useState('');
  
//    console.log(background,'color:1234');

  return (
    <div className='fix-box' onClick={()=>{applyColor(setBackground)}} style={{backgroundColor:background.background}}>
        <p className='subheading'>selection</p>
    </div>
  )
}

export default Selection