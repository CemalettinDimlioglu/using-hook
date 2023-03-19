import React, { useRef, useState } from "react";

const UseRefComp = () => {
  console.log("Render =>useRefComp");
  const [text, setText]= useState("")
  const inputRef = useRef()
  const handleSearch = ()=>{
    console.log(text);
    console.log(inputRef);
  }
  return (
    <div>
      UseRefComp
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" ref={inputRef} onChange={(e)=>setText(e.target.value)} />
        <button type="button" onClick={handleSearch()} >
          Search
        </button>
      </div>
    </div>
  );
};

export default UseRefComp;
