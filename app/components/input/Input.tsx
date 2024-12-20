import { InputHTMLAttributes } from 'react';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClassName?: string;
};

export const Input = (props: TProps) => {
  const { label, name, id, type, className, labelClassName, ...rest } = props;

  return (
    <label htmlFor={name} className={`text-sm w-full ${labelClassName ?? ''}`}>
      {label && (
        <>
          {label}
          <br />
        </>
      )}
      <input
        id={id ?? name}
        name={name}
        type={type ?? 'text'}
        {...rest}
        className={`text-base ${
          label ? 'mt-1 sm:mt-2' : ''
        } w-full h-12 rounded-xl p-3 text-neutral-0 bg-neutral-400 focus:outline-none border border-neutral-400 transition hover:border-neutral-50 focus:border-yellow-400 placeholder:text-neutral-100 ${
          className ?? ''
        }`}
      />
    </label>
  );
};
