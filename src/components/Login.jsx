import { useState } from "react"

function Login(){
    const[email,setEmail]=useState()
    const[passward,setPassward]=useState()
    const handlelogin=()=>{
        const userName="LoginApp"
        const pwd="12345"
        if(userName==email&&pwd==passward)
            {
            console.log("you have logged in successed")
        }
        else{
           console.log("wrong creditials")
        }
    }
    return(
        <div>
            <h4>Login</h4>
            <label >Email;</label>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            /><br/>
            <label>passward</label>
            <input type="text"
            value={passward}
            onChange={(e)=>setPassward(e.target.value)}
            placeholder="enter your password" />
            <button onClick={handlelogin}>Login</button>
        </div>
    )
}
export default Login