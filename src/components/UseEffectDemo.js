import { useState, useEffect } from "react";

function UseEffectDemo(){
    const [resourceType,setResourceType] = useState("");
    const [items,setItems]= useState([]);
    const [windowWidth,setWindowWidth]= useState(window.innerWidth);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[resourceType])
    const handleResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>
     window.addEventListener('resize',handleResize)
    )
    return(
        <>
        <h3>useEffect hook</h3>
        <button onClick={()=>setResourceType("posts")}>Posts</button>
        <button onClick={()=>setResourceType("users")}>Users</button>
        <button onClick={()=>setResourceType("comments")}>Comments</button>
        <h4>{resourceType}</h4>
        <div>
        <p>window width : {windowWidth}</p>
        {items.map(item =>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </div>
        <hr/>
        </>
    )
}

export default UseEffectDemo;