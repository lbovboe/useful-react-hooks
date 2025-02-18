import useToggle from "@/hooks/1-useToggle/useToggle";
const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <h1>Toggle Component</h1>
      <h1>{value.toString()}</h1>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Set True</button>
      <button onClick={() => toggleValue(false)}>Set False</button>
    </div>
  )
}

export default ToggleComponent;