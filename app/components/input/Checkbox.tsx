import { InputHTMLAttributes } from 'react';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked: boolean;
};

export const Checkbox = (props: TProps) => {
  const { value, label, checked, className, ...rest } = props;

  return (
    <label
      className={`flex items-center gap-1 w-fit capitalize cursor-pointer ${
        className ?? ''
      }`}
    >
      <input
        type="checkbox"
        className="invisible absolute"
        value={value}
        {...rest}
      />
      <span
        className={`h-4 w-4 ${
          checked ? 'bg-yellow-400' : 'bg-none'
        } border-2 border-neutral-400 rounded-md`}
      />
      {label ?? value}
    </label>
  );
};
