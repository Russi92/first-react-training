

import { useState } from "react";



export default function MyForm(){

    const [formData , setFormData] = useState({
        name : "",
        email : "",
        age : "",
        isStudent : false,
        generalInfo : "",
        country : "",
        status : "",
    });


    function checkedStudent(event){
        setFormData({...formData, isStudent : event.target.checked})
    }

    

    return (
        <div style={{textAlign :"center"}}>

            <div style={{fontSize : '40px'}}>use state send data form</div>

          <form onSubmit={(event) => {
            event.preventDefault();
            console.log(formData)
          }}>

            <input placeholder="name" value={formData.name} onChange={(event) => {
                setFormData({...formData, name : event.target.value})
            }}/>

            <br></br>

            <input placeholder="email" value={formData.email} onChange={(event) => {
                setFormData({...formData, email : event.target.value})
            }}/>

            <br></br>

            <input placeholder="age" value={formData.age} onChange={(event) => {
                setFormData({...formData, age : event.target.value})
            }}/>

            <br></br>

            <label>are you student</label>
            <input type="checkbox" checked={formData.isStudent} onChange={checkedStudent}/>

            <br></br>

            <select value={formData.country} onChange={(event) => {
                setFormData({...formData, country : event.target.value})
            }}>

            <option>ksa</option>
            <option>egypt</option>
            <option>london</option>

            </select>

            <br></br>

            <div>

            <input 
            type="radio"
            name="status"
            checked={formData.status == "student"}
            value="student"
            onChange={(event) => {
                setFormData({...formData, status : event.target.value})
            }}
             />Student

            <input 
            type="radio"
            value="teacher"
            name="status"
            checked={formData.status == "teacher"}
            onChange={(event) => {
                setFormData({...formData, status : event.target.value})
            }}
            />Teacher

            </div>

            <br></br>

            <textarea placeholder="general info" value={formData.generalInfo} onChange={(event) => {
                setFormData({...formData, generalInfo : event.target.value})
            }}/>

            <br></br>

            <button>send data</button>

          </form>

        </div>
    )
}