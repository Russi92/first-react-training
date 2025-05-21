import { useState } from "react"


export default function MyInput(){

    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")


    function UserNameChange(event){
        setUserName(event.target.value)
    }

    function passwordChange(event){
        setPassword(event.target.value)
    }

    // console.log(userName)
    // console.log(password)

    return(
        <div style={{textAlign :"center"}}>

            <div style={{fontSize : '40px'}}>use state input</div>


            <input value={userName} onChange={UserNameChange} placeholder="user name" />

            <input type="password" value={password} onChange={passwordChange} placeholder="password"/>

        </div>
    )
}