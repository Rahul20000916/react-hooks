import React, {useState, useMemo, useEffect} from "react";

function UseMemoDemo(){
   const [number,setNumber] = useState(0)
   const [dark,setDark] = useState(false)
   
   const doubleNumber = useMemo(()=>{
    return slowFunction(number)
},[number])
const themeStyles = useMemo(()=>{
   return{
        backgroundColor: dark ? 'black':'white',
        color:dark ? 'white':'black'
    }  
},[dark])
useEffect(()=>[
    console.log("theme changed")
],[themeStyles])
return(
    <>
    <h3>useMemo hook</h3>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setDark(preDark => !preDark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
)
function slowFunction(num){
    console.log('calling slow function');
    for(let i=0; i< 10000000; i++){}
    return num*2;
}
}
export default UseMemoDemo;