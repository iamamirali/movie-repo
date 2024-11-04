import { RefObject, useCallback, useEffect, useState } from 'react';

// A hook that detects clicks outside of the passed ref
export const useOutsideClick = (ref: RefObject<HTMLElement>): boolean => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isOutside = ref.current && !ref.current.contains(e.target as Node);
      setIsClicked(!!isOutside);
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClickOutside]);

  return isClicked;
};
