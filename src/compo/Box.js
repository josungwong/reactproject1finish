import React from 'react'




const Box = (ect) => {
    let result
    if(ect.title === "Computer" && ect.result !== "" && ect.result !== "Tie"){
      result = ect.result==="Win"?"Lose":"Win"
    }else{
      result = ect.result
    }
  return (
    <div className={`box ${result}`}>
        <h1>{ect.title}</h1>
        <img src={ect.item && ect.item.img} alt='none' className='item-img'/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box