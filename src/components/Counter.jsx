import { useState } from "react"

function Counter(){
    const{feedback,setFeedback}=useState(0)
    const[count,setCount]=useState(0)
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>You have clicked{count}</p>

        </div>
    )
}
export default Counter;