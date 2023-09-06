import { useState } from "react";

function Print(){
    console.log("running count")
    return 1
}

function UseStateDemo(){
    const [count, setCount]= useState(Print())


    // const [state,setState]= useState({count:4, theme:"blue"})
    // const ount = state.count;
    // function incrementCountWithTheme(){
    //     setState(prevCout =>{
    //         return (
    //         {...prevCout,ount:ount+1} 
    //         )
    //     })
    // }
    // function decrementCountWithTheme(){
    //     setState(prevCout =>{
    //         return(
    //             {...prevCout,ount:ount-1}
    //         )
    //     })
    // }



    function incrementCount(){
      setCount(prevCout => prevCout + 1)
    }
    function decrementCount(){
      setCount(prevCout => prevCout -1)
    }

    //using function in useState so we can eliminate component rerendering
    // const [fcount, setfcount]=useState(()=>Print())

    return (
      <div>
        <h3>useState hook</h3>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <hr/>


        {/* <h3>useState with object</h3>
        <button onClick={decrementCountWithTheme}>-</button>
        <span>{state}</span>
        <button onClick={incrementCountWithTheme}>+</button> */}
      </div>
    );
}

export default UseStateDemo;