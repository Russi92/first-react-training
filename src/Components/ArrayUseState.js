import { useState } from "react"






let nextId = 4;

export default function AddDevices(){

    const [addNewLangFront , setAddNewLangFront] = useState("")

    const [front , setFront] =useState([
        {id : 1 , name : 'html'},
        {id : 2 , name : 'css'},
        {id : 3 , name : 'java script'}
    ])

    const frontList = front.map((name) => {
        return(<div key={name.id}>{name.name}
         <i className="fa-solid fa-trash" onClick={() => {
            handleDeleteClick(name.id)
        }} style={{fontSize : "15px" , color : "red" , cursor : "pointer"}}></i>
        </div>)
    })

    function handleAddNewLang (){
        if(addNewLangFront.trim() !== ""){
            setFront([...front , {id : nextId ,name :addNewLangFront} ])
            setAddNewLangFront("")
            nextId = nextId +1
        }
    }

    function handleDeleteClick (id) {
        // const newFront = [...front];

        const newFront = front.filter((del) => {
            return del.id !== id
        })

        setFront(newFront);
    }

    return(
        <div style={{textAlign :"center"}}>

            <div style={{fontSize : "40px"}}>Add New Element Array Use State</div>

            
            <div style={{fontSize : "20px" , fontWeight : "700"}}>{frontList}</div>

            <input value={addNewLangFront} onChange={(event) => {
                setAddNewLangFront(event.target.value)
            }}/>

            <button onClick={handleAddNewLang}>add new lang</button>
            
          
        </div>
    )
}