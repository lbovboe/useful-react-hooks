"use client";
import useToggle from "@/hooks/1-useToggle/useToggle";
const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Result : {value.toString()}</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md " onClick={() => toggleValue()}>
        Toggle
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-md " onClick={() => toggleValue(true)}>
        Set True
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-md " onClick={() => toggleValue(false)}>
        Set False
      </button>
    </div>
  );
};

export default ToggleComponent;
