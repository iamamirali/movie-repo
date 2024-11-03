import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

type TProps = {
  Icon: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const IconButton = (props: TProps): JSX.Element => {
  const { Icon, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`transition hover:brightness-75 active:brightness-50 ${className}`}
    >
      <Icon className="text-2xl" />
    </button>
  );
};
