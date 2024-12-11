'use client';

import Image from 'next/image';
import { FaRegEdit, FaStar } from 'react-icons/fa';
import { MouseEventHandler, useState } from 'react';
import { GiFilmStrip } from 'react-icons/gi';
import { TMovie } from '@/types/movie';
import { Dropdown } from '../dropdown';
import { IconType } from 'react-icons';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Modal } from '../modal';
import { Button } from '../button';

type TMovieAction = {
  title: string;
  icon?: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const MovieCard = (props: TMovie) => {
  const { name, year, genre, rating, image } = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const movieActions: TMovieAction[] = [
    {
      title: 'Edit',
      icon: FaRegEdit,
      onClick: () => null,
      className: '!text-neutral-0 lg:!text-neutral-900',
    },
    {
      title: 'Delete',
      icon: FaRegTrashCan,
      onClick: () => setShowDeleteModal(true),
      className: 'text-red-400 lg:text-red-600',
    },
  ];

  const onDeleteModalClose = () => setShowDeleteModal(false);

  return (
    <>
      <article className="h-40 rounded-xl bg-neutral-400 flex items-center justify-between overflow-hidden">
        {!imageLoaded && (
          <GiFilmStrip className="min-w-28 h-full bg-neutral-200 text-neutral-50" />
        )}
        {typeof image === 'string' && (
          <Image
            src={image}
            alt={name}
            width={112}
            height={160}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            className={`${imageLoaded ? 'visible' : 'invisible absolute'}`}
          />
        )}
        <div className="p-2.5 h-full w-full flex flex-col justify-center gap-2.5">
          <div className="flex justify-between items-center h-12">
            <h3 className="text-lg font-bold ellipsis-2">{name}</h3>
            <Dropdown items={movieActions} label={name} />
          </div>
          <div className="text-sm font-medium text-neutral-50">{year}</div>
          <div className="text-sm font-medium text-neutral-50 capitalize">
            {genre}
          </div>
          <div className="flex items-center gap-0.5 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
      </article>

      {showDeleteModal && (
        <Modal
          title={`Delete ${name}`}
          subtitle="Are you sure about deleting this movie?"
          onClose={onDeleteModalClose}
        >
          <div className="flex justify-end gap-4 text-right absolute bottom-6 z-0 w-full left-0 right-0 px-6 lg:px-0 lg:justify-between lg:static">
            <Button
              title="Cancel"
              type="button"
              onClick={onDeleteModalClose}
              className="bg-neutral-100 text-neutral-700 !w-2/5  !h-12 !text-base !rounded-xl"
            />
            <Button
              title="Delete"
              type="submit"
              className="border border-red-400 !h-12 text-red-400 !w-3/5  !text-base !rounded-xl"
            />
          </div>
        </Modal>
      )}
    </>
  );
};
