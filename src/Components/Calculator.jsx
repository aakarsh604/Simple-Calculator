import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addx, decrement1, dividex, increment1, mutlix, subx } from "../Store/action";

const Calculator = () => {
  const count = useSelector((state) => state.count);
  const ref = useRef();
  const dispatch = useDispatch();
  const [x, setx] = useState(0);

  const handleChange = () => {
            let payload = Number(ref.current.value);
            setx(payload);
  }
  return (
    <>
      <h1>{count}</h1>
      <input ref={ref} type="number"  placeholder="Enter X" onChange={handleChange}/>
      <div style={{ display: "flex", gap : "15px", width: "28%", margin : "auto", marginTop : "15px"}}>
        <button onClick={()=> {dispatch(increment1())}}>Increment</button>
        <button onClick={()=> {dispatch(decrement1())}}>Decrement</button>
        <button onClick={()=> {dispatch(addx(x))}}>Add</button>
        <button onClick={()=> {dispatch(subx(x))}}>Subtract</button>
        <button onClick={()=> {dispatch(mutlix(x))}}>Multiply</button>
        <button onClick={()=> {dispatch(dividex(x))}}>Divide</button>
      </div>
    </>
  );
};

export default Calculator;
