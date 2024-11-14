import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useModalState = <T,>(
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [open, setOpen] = useState(initialValue);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return [open, setOpen];
};
