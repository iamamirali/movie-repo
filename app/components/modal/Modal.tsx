import { FaTimes } from 'react-icons/fa';
import { IconButton } from '../button';
import { ReactNode } from 'react';

type TProps = {
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = (props: TProps) => {
  const { title, subtitle, onClose, children, className } = props;
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0">
      <div className="bg-neutral-900 opacity-70 absolute w-full h-full z-10" />
      <div
        className={`bg-neutral-700 w-full h-full p-6 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 lg:rounded-2xl lg:w-fit lg:h-fit lg:max-w-3xl lg:max-h-[50rem] ${className}`}
      >
        <div className="flex items-start justify-between mb-9">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            {subtitle && (
              <h2 className="text-neutral-50 text-lg font-medium mt-2">
                {subtitle}
              </h2>
            )}
          </div>
          <IconButton
            Icon={FaTimes}
            onClick={onClose}
            className="text-neutral-50"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
