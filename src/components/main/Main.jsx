import React from "react";

const Main = ({count,setCount}) => {
    return (
        <main>
            <h2>Count :{count}</h2>
            <button className="btn btn-info m-2" onClick={()=>setCount((prev)=>prev + 1)}>+</button>
            <button className="btn btn-info m-2" onClick={()=>setCount((prev)=>prev -1)}>-</button>
        </main>
    );
};

export default Main;
  