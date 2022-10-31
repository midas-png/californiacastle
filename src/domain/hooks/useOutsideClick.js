import { useEffect } from 'react';

export const useOutsideClick = (ref, onOutsideClick) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick && onOutsideClick();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onOutsideClick]);
};
