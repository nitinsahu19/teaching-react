import React, { useEffect, useState } from "react";

const UseLocalStorage = (key, initialvalue) => {
  const [value, setValue] = useState(() => {
    const saveValue = localStorage.getItem(key);
    return saveValue ? JSON.parse(saveValue) : initialvalue;
  });
  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value,setValue];
}

export default UseLocalStorage;