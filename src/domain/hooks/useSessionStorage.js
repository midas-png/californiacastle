import { useState } from 'react';

/**
 * @param {String} keyName - key name of value in sessionStorage
 * @param {any} [defaultValue] - if no value of keyName was found in sessionStorage,
 * then it will be assigned with defaultValue
 */

export const useSessionStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = sessionStorage.getItem(keyName);

    try {
      if (value) {
        return JSON.parse(value);
      } else {
        sessionStorage.setItem(keyName, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return value;
    }
  });

  const setValue = (newValue) => {
    sessionStorage.setItem(keyName, JSON.stringify(newValue));
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
