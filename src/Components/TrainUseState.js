

import {useState} from "react"



export default function Hook(){

    const [gun , setGun] = useState("piston")
    const [img , setImg] = useState("https://t4.ftcdn.net/jpg/01/78/90/93/360_F_178909390_JLvX6F7ZzcbEnipx14x9Eq0MGh7WnH8x.jpg")
    
    function clickedHere(){
        if(gun == "piston"){
            setGun("zoraki 925")
            setImg("https://www.freie-waffen.com/media/image/d9/1e/88/Zoraki_925_Camo_Schreckschuss_Pistole_014.jpg")
        }else{
            setGun("piston")
            setImg("https://t4.ftcdn.net/jpg/01/78/90/93/360_F_178909390_JLvX6F7ZzcbEnipx14x9Eq0MGh7WnH8x.jpg")
        }
    }

    return(

        <div style={{textAlign :"center"}}>

            <div style={{fontSize : '40px'}}>use state hook</div>

            <button onClick={clickedHere}>click here</button>

            <div>{gun}</div>

            <img src={img}
            style={{width : "100px" , borderRadius : "10px"}} />

        </div>

    )
}