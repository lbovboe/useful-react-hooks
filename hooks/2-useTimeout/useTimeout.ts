import {useCallback, useEffect, useRef} from 'react'

// Custom hook that manages a timeout, accepts a callback function and delay in milliseconds
// Returns an object with reset and clear functions
const useTimeout = (callback : () =>void, delay :number) : {reset : () =>void, clear : () =>void} =>{
  // Store the callback in a ref to persist between renders while allowing callback to update
  const callbackRef = useRef(callback);
  
  // Store the timeout ID in a ref so we can clear it later
  // undefined is the initial value, and setTimeout returns a NodeJS.Timeout type
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  
  // Update the callback ref whenever the callback changes
  // This ensures we always have the latest callback function
  useEffect(()=>{
    callbackRef.current = callback;
  },[callback])
  
  // Create a memoized function to set a new timeout
  // Uses the current callback from ref and the specified delay
  const set = useCallback(()=>{
    timeoutRef.current = setTimeout(()=>callbackRef.current(),delay)
  },[delay])
  
  // Create a memoized function to clear the existing timeout
  // Only clears if there is an existing timeout
  const clear = useCallback(()=>{
    timeoutRef.current && clearTimeout(timeoutRef.current)
  },[])
  
  // Effect to set up the timeout when the component mounts
  // or when delay changes, and clean up on unmount
  useEffect(()=>{
    set();
    return clear; // Cleanup function to clear timeout when component unmounts
  },[delay,set,clear])
  
  // Create a memoized reset function that clears the existing
  // timeout and sets a new one
  const reset = useCallback(()=>{
    clear();
    set();
  },[clear,set])
  
  // Return the reset and clear functions for external use
  return {reset,clear}
}

export default useTimeout;