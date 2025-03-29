

import React, {useState} from "react";
function App(){
    const [data,setData] = useState("priyanka");
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={() => setData("Diwakar")}>Update</button>
        </div>
    )
}
export default App;