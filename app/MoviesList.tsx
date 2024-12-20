'use client';

import { FaFilter, FaSort } from 'react-icons/fa';
import { Button, Input, Modal, MovieCard, Select, Upload } from './components';
import { FaPlus } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiVideoOff } from 'react-icons/fi';
import { TGetMoviesResponse } from '@/types/movie';
import { useEffect } from 'react';
import { createMovie } from './actions';
import { convertToBase64 } from '@/utils';
import { useFormState } from 'react-dom';
import { useModalState } from './hooks';

type TProps = { movies: TGetMoviesResponse };

const genreOptions = [
  'action',
  'drama',
  'comedy',
  'sci-fi',
  'horror',
  'mysterious',
  'romance',
  'documentary',
  'animation',
  'thriller',
  'anime',
  'biography',
  'historical',
  'series',
];

const initialFormState = {
  message: '',
};

export const MoviesList = (props: TProps) => {
  const { movies } = props;

  const [showAddModal, setShowAddModal] = useModalState(false);
  const [formState, formAction] = useFormState(createMovie, initialFormState);

  useEffect(() => {
    if (formState.message === 'success') {
      setShowAddModal(false);
    }
  }, [formState, setShowAddModal]);

  const onAddModalClose = () => setShowAddModal(false);

  const onAddButtonClick = () => setShowAddModal(true);

  const handleFormAction = async (formData: FormData) => {
    const image = formData.get('image') as File;
    if (image.name) {
      const base64Image = await convertToBase64(image);
      formData.set('image', base64Image);
    }
    formAction(formData);
  };

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Button
            title="Newest"
            Icon={FaSort}
            className="bg-neutral-200 text-neutral-0"
          />
          <Button
            title="Filters"
            Icon={FaFilter}
            className="bg-neutral-200 text-neutral-0"
            iconClassName="text-sm"
          />
        </div>
        <Button
          title="Add"
          Icon={FaPlus}
          className="text-neutral-700 bg-yellow-400"
          onClick={onAddButtonClick}
        />
      </div>

      {movies.length > 0 && (
        <ul className="py-6 grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] gap-6 w-full justify-center">
          {movies?.map(({ id, name, genre, rating, year, image }) => (
            <li key={id}>
              <MovieCard {...{ name, genre, rating, year, image }} />
            </li>
          ))}
        </ul>
      )}

      {showAddModal && (
        <Modal
          title="Add Movie"
          subtitle="Enter details of your movie"
          onClose={onAddModalClose}
          className="lg:w-[60%] lg:min-w-[42rem] flex flex-col"
        >
          <form
            action={handleFormAction}
            className="flex flex-col overflow-auto pb-20"
          >
            <div className="flex flex-col gap-4 overflow-auto">
              <Input label="Name" name="name" />
              <Select
                multiSelect
                name="genre"
                label="Genre"
                options={genreOptions}
              />
              <div className="flex gap-4 w-full mb-2">
                <Input label="Year" name="year" type="number" />
                <Input label="Rating" name="rating" type="number" step="0.1" />
              </div>
              <Upload label="Upload Movie Poster" />
            </div>

            <div className="flex justify-end gap-4 text-right absolute bottom-6 z-0 w-full left-0 right-0 px-6">
              <Button
                title="Cancel"
                type="button"
                onClick={onAddModalClose}
                className="border border-neutral-50 text-neutral-50 !w-2/5 md:!w-32 !h-12 !text-base !rounded-xl"
              />
              <Button
                title="Add Movie"
                type="submit"
                className="bg-yellow-400 !h-12 text-neutral-700 !w-3/5 md:!w-48 !text-base !rounded-xl"
              />
            </div>
          </form>
        </Modal>
      )}

      {movies.length <= 0 && (
        <div className="py-6 flex items-center flex-grow">
          <button
            onClick={onAddButtonClick}
            className="w-full h-1/2 min-h-40 flex flex-col items-center justify-center border border-dashed rounded-xl transition-all hover:brightness-[.85] active:brightness-75 border-neutral-50"
          >
            <p className="mb-4 text-2xl font-bold text-neutral-50">
              Add your first movie
            </p>
            <IoAddCircleOutline className="text-6xl text-neutral-50" />
          </button>
        </div>
      )}

      {/* <div className="py-6 flex items-center flex-grow">
        <div className="w-full h-1/2 flex flex-col items-center justify-center border rounded-xl border-neutral-50">
          <p className="mb-4 text-2xl font-bold text-neutral-50">
            No movies found
          </p>
          <FiVideoOff className="text-6xl text-neutral-50" />
        </div>
      </div> */}
    </div>
  );
};
