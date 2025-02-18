import { useState } from "react";

const useToggle = (initialValue: boolean): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = (value?: boolean) => {
    setValue(prev => typeof value === "boolean" ? value : !prev)
  }
  return [value, toggleValue]
}

export default useToggle;