import { RefObject, useCallback, useEffect, useState } from 'react';

// A hook that detects clicks outside of the passed ref/refs
export function useOutsideClick(refs: RefObject<HTMLElement>[]): boolean {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(e.target as Node)
      );
      setIsClicked(isOutside);
    },
    [refs]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handleClickOutside]);

  return isClicked;
}
