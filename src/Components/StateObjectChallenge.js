


import { useState } from "react";

export default function Counter(){

  const [score , setScore] = useState({
    firstName : "russi",
    lastName : "noga",
    counter : 0
  })


  // function handlePlusClick(){
  //   setScore({...score, counter : score.counter+1})
  // }

  function handleFirstName(event){
    setScore({...score, firstName : event.target.value})
  }


  return (
    <div style={{textAlign:'center'}}>

      <div style={{fontSize : "40px"}}>challenge change use state object</div>

    <div>
      <button onClick={() => {
        setScore({...score, counter : score.counter+1})
      }}>+</button>

         <span>{score.counter}</span>
    
      <button onClick={() => {
        if (score.counter > 0) {
          setScore({ ...score, counter: score.counter - 1 });
        }
  }}>-</button>
    </div>

    <br></br>

    <input value={score.firstName} placeholder="first name" onChange={handleFirstName}/>

    <br></br>

    <input value={score.lastName} placeholder="last name" onChange={(event) => {
      setScore({...score, lastName : event.target.value})
    }}/>


    </div>
  )
}