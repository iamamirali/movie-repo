import { forwardRef, MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

type TProps = {
  Icon: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const IconButton = forwardRef<HTMLButtonElement, TProps>(
  (props, ref) => {
    const { Icon, onClick, className } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`transition hover:brightness-75 active:brightness-50 ${
          className ?? ''
        }`}
      >
        <Icon className="text-2xl" />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
