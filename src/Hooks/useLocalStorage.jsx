import { useState } from "react"

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocaleStorage(key, initialValue)
  )
  const setValue = (value) => {
    // CHECK IF VALUE IS A FUNCTION
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value
    // SET TO STATE
    setLocalStorageValue(value)
    // SET TO LOCAL STORAGE
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

function getLocaleStorage(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}
export default useLocalStorage
