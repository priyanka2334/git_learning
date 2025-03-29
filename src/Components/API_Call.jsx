// import React, { useEffect, useState } from "react";
// function API_Call() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(setData)
//       .catch(err => console.log("Error:", Error));
//   }, []);
//   return (
//     <div>
//       <h2>API Data</h2>
//       {data.slice(0, 5).map(item => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }
// export default API_Call;

import React, { useState, useEffect } from "react";

function API_Call() {
    const [data, setData] = useState([]); 
    useEffect(() => {
        fetch("https://api.tvmaze.com/shows") 
            .then(res => res.json()) 
            .then(data => setData(data)) 
            .catch(err => console.log("Error:", err)); 
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            {data.length > 0 ? (
                data.slice(0, 5).map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default API_Call;
