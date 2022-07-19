import { useState, useEffect } from "react";

const getStoredValue = (key) => {
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;
  else return [];
};

export default function useLocalStorage(key) {
  const [userInfo, setUserInfo] = useState(() => {
    return getStoredValue(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(userInfo));
  }, [userInfo, key]);
  return [userInfo, setUserInfo];
}
