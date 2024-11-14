'use client';

import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { Checkbox } from './Checkbox';
import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconButton } from '../button';
import { useOutsideClick } from '@/app/hooks';

type TOption =
  | {
      label?: string;
      value: string | number;
    }
  | string;

type TProps = {
  label?: string;
  name: string;
  className?: string;
  options: TOption[];
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  multiSelect?: boolean;
};

export const Select = (props: TProps) => {
  const { label, name, className, options, value, onChange, multiSelect } =
    props;

  const [inputValue, setInputValue] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectBoxRef = useRef(null);
  const isOutsideClicked = useOutsideClick(selectBoxRef);

  useEffect(() => {
    isOutsideClicked && setShowOptions(false);
  }, [isOutsideClicked]);

  const handleMultiSelectChange = (value: string) => {
    if (inputRef.current) {
      let inputCurrent = inputRef.current;
      const selectedValues = inputCurrent.value
        ? inputCurrent.value.split(',')
        : [];
      if (selectedValues.includes(value)) {
        const newValue = selectedValues
          ?.filter((item) => item !== value)
          .join(',');
        setInputValue(newValue);
        inputCurrent.value = newValue;
      } else {
        selectedValues.push(value);
        const newValue = selectedValues.join(',');
        setInputValue(newValue);
        inputCurrent.value = newValue;
      }
    }
  };

  const handleSingleSelectChange = (value: string) => {
    if (inputRef.current) {
      let inputCurrent = inputRef.current;
      if (inputCurrent.value === value) {
        setInputValue(null);
        inputCurrent.value = '';
      } else {
        setInputValue(value);
        inputCurrent.value = value;
      }
    }
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (multiSelect) {
      handleMultiSelectChange(value);
    } else {
      handleSingleSelectChange(value);
    }
  };

  const onSelectClick = () => {
    setShowOptions(!showOptions);
  };

  const handleCheckboxStatus = (optionValue: string | number) => {
    if (multiSelect) {
      console.log(
        (String(value ?? '') || inputValue)
          ?.split(',')
          .includes(String(optionValue))
      );
      return (
        (String(value ?? '') || inputValue)
          ?.split(',')
          .includes(String(optionValue)) ?? false
      );
    } else {
      return (value ?? inputValue) === optionValue;
    }
  };

  return (
    <div>
      {label && <label className="text-sm">{label}</label>}
      <div ref={selectBoxRef} className="relative">
        <button
          type="button"
          onClick={onSelectClick}
          className={`text-base ${
            label ? 'mt-3' : ''
          } w-full h-12 pr-9 cursor-pointer flex items-center relative capitalize rounded-xl p-3 text-neutral-0 bg-neutral-400 focus:outline-none border border-neutral-400 transition hover:border-neutral-50 ${
            showOptions ? 'border-yellow-400' : ''
          } focus:border-yellow-400 placeholder:text-neutral-100 ${
            className ?? ''
          }`}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {value ?? inputValue ?? ''}
          </span>
          <FaChevronDown className="absolute right-4 top-0 bottom-0 m-auto" />
          <input
            id={name}
            name={name}
            className="pointer-events-none invisible absolute"
            ref={inputRef}
          />
        </button>

        {showOptions && (
          <>
            <ul className="hidden lg:flex absolute z-10 bg-neutral-100 border border-neutral-50 rounded-xl w-full max-h-52 overflow-auto mt-2 py-1.5 px-2 flex-col">
              {options?.map((option) => {
                const optionValue =
                  typeof option === 'string' ? option : option.value;
                const optionLabel =
                  typeof option === 'string' ? option : option.label;
                return (
                  <li
                    key={optionValue}
                    className="text-neutral-900 transition text-sm rounded-lg bg-neutral-100 hover:brightness-[0.85] active:brightness-75"
                  >
                    <Checkbox
                      label={optionLabel}
                      value={optionValue}
                      checked={handleCheckboxStatus(optionValue)}
                      className="w-full px-2 py-1.5"
                      onChange={onChange ?? onValueChange}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="lg:hidden fixed z-20 left-0 right-0 top-0 bottom-0">
              <div className="bg-neutral-900 opacity-70 fixed w-full h-full z-10" />
              <ul className="absolute bottom-0 bg-neutral-700 z-20 rounded-t-2xl w-full px-2 py-4 flex flex-col max-h-[70%] min-h-[40%]">
                <div className="flex items-start justify-between px-2">
                  <h3 className="text-neutral-0 text-xl font-semibold mb-3">
                    Select {label}
                  </h3>
                  <IconButton
                    Icon={FaTimes}
                    onClick={() => setShowOptions(false)}
                    className="text-neutral-50"
                  />
                </div>
                <div className="flex-grow overflow-auto">
                  {options?.map((option) => {
                    const optionValue =
                      typeof option === 'string' ? option : option.value;
                    const optionLabel =
                      typeof option === 'string' ? option : option.label;
                    return (
                      <li
                        key={optionValue}
                        className="text-neutral-0 transition text-base rounded-lg bg-neutral-700 hover:brightness-[0.85] active:brightness-75"
                      >
                        <Checkbox
                          label={optionLabel}
                          value={optionValue}
                          checked={handleCheckboxStatus(optionValue)}
                          className="w-full px-2 py-1.5"
                          onChange={onChange ?? onValueChange}
                        />
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
