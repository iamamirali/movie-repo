'use client';

import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';

type TProps = {
  label: string;
  name?: string;
};

export const Upload = (props: TProps) => {
  const { label, name } = props;

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files?.length !== 0) {
      setFile(files[0]);
    }
  };

  return (
    <div>
      <div className="border border-dashed border-yellow-400 h-12 flex gap-2 items-center rounded-xl p-4 relative transition hover:brightness-75 active:brightness-50">
        <FaUpload className="text-yellow-400 text-lg" />
        <label className="font-medium text-sm">{label}</label>
        <input
          type="file"
          name={name ?? 'image'}
          className="opacity-0 absolute h-full w-full left-0 rounded-xl cursor-pointer"
          onChange={onChange}
        />
      </div>
      {preview && file ? (
        <div className="flex gap-2 border border-neutral-400 rounded-xl px-2 mt-2 h-12 items-center text-sm text-neutral-50 overflow-hidden">
          <Image
            src={preview}
            width={36}
            height={36}
            alt={file.name}
            className="rounded-lg object-cover h-9 w-9"
          />
          <div className="text-ellipsis whitespace-nowrap overflow-hidden">
            {file.name}
          </div>
        </div>
      ) : null}
    </div>
  );
};
