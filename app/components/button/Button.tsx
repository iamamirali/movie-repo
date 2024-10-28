import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

type TProps = {
  className?: string;
  Icon?: IconType;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconClassName?: string;
};

export const Button = (props: TProps) => {
  const { Icon, className, title, onClick, iconClassName } = props;

  return (
    <button
      onClick={onClick}
      className={`h-8 w-fit min-w-16 px-2 text-sm hover:brightness-[0.85] active:brightness-75 transition-all font-semibold flex items-center justify-center gap-0.5 rounded-lg ${className}`}
    >
      {Icon && <Icon className={`text-base ${iconClassName}`} />}
      {title}
    </button>
  );
};
