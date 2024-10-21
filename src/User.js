import { useState } from "react";
function User()
{
    const[count, setCount] = useState(0);

    

    return(
        <>
        <h1>this is counter app</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        </>
    )
}

export default User;