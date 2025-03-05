'use client';

import { FaTimes } from 'react-icons/fa';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Button, IconButton } from '../button';
import { useOutsideClick } from '@/app/hooks';
import { IconType } from 'react-icons';
import { IoMdMore } from 'react-icons/io';

type TItem = {
  title: string;
  icon?: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

type TProps = {
  label?: string;
  items: TItem[];
  iconButton?: IconType;
};

export const Dropdown = (props: TProps) => {
  const { label, items, iconButton } = props;

  const [showItems, setShowItems] = useState(false);
  const desktopItemsRef = useRef(null);
  const nonDesktopItemsRef = useRef(null);
  const triggerButtonRef = useRef(null);
  const isOutsideClick = useOutsideClick([
    desktopItemsRef,
    triggerButtonRef,
    nonDesktopItemsRef,
  ]);

  useEffect(() => {
    isOutsideClick && setShowItems(false);
  }, [isOutsideClick]);

  const onTriggerClick = () => setShowItems(!showItems);

  return (
    <div className="relative">
      <IconButton
        ref={triggerButtonRef}
        Icon={iconButton ?? IoMdMore}
        onClick={onTriggerClick}
      />

      {showItems && (
        <>
          <ul
            ref={desktopItemsRef}
            className="hidden lg:flex min-w-32 right-0 absolute z-10 bg-neutral-100 border border-neutral-50 rounded-lg w-full max-h-52 overflow-auto py-1.5 px-1 flex-col"
          >
            {items?.map((item) => {
              return (
                <li key={item.title}>
                  <Button
                    {...(item.icon ? { Icon: item.icon } : {})}
                    className={`w-full gap-1 bg-neutral-100 text-neutral-900 !justify-start !font-normal text-sm ${
                      item.className ?? ''
                    }`}
                    title={item.title}
                    onClick={item.onClick}
                  />
                </li>
              );
            })}
          </ul>

          <div className="lg:hidden fixed z-20 left-0 right-0 top-0 bottom-0">
            <div className="bg-neutral-900 opacity-70 fixed w-full h-full z-10" />
            <ul
              ref={nonDesktopItemsRef}
              className="absolute bottom-0 bg-neutral-700 z-20 rounded-t-2xl w-full px-2 py-4 flex flex-col max-h-[70%]"
            >
              <div
                className={`flex flex-row-reverse items-start justify-between px-2 ${
                  label ? 'mb-3' : ''
                }`}
              >
                <IconButton
                  Icon={FaTimes}
                  onClick={() => setShowItems(false)}
                  className="text-neutral-50"
                />
                {label && (
                  <h3 className="text-neutral-0 text-xl font-semibold">
                    {label}
                  </h3>
                )}
              </div>
              <div className="flex flex-col flex-grow overflow-auto gap-2">
                {items?.map((item) => {
                  return (
                    <li key={item.title}>
                      <Button
                        {...(item.icon ? { Icon: item.icon } : {})}
                        className={`w-full gap-1 !h-9 bg-neutral-700 text-neutral-900 !justify-start !font-normal !text-base ${
                          item.className ?? ''
                        }`}
                        iconClassName="!text-lg"
                        title={item.title}
                        onClick={item.onClick}
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
  );
};
