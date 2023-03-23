import { useState } from 'react';

/**
 * @param {boolean} [initValue=false] - Initial value. By default equals false
 */

export const useToggle = (initValue = false) => {
  const [value, setValue] = useState(initValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
};
