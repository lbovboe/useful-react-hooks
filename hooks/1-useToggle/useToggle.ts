import { useState } from "react";

const useToggle = (initialValue : boolean) : [boolean, (value?:boolean)=>void] =>{
  const [value, setValue] = useState(initialValue);
  const toggleValue = (value?:boolean) =>{
    setValue(pre => typeof value === "boolean" ? value : !pre)
  }
  return [value,toggleValue]
}
export default useToggle;

