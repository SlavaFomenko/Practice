import { useEffect, useState } from "react";

export function useWindowClickCounter(){
  const [count , setCount] = useState(0)

  function clickHendler(){
    setCount(prevCount=>prevCount+1)
  }

  useEffect(()=>{
    console.log('add');
    window.addEventListener('click',clickHendler)
    return() => {
      window.removeEventListener("click", clickHendler);
    };
  },[])

  return count
}