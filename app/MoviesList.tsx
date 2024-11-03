'use client';

import { FaFilter, FaSort } from 'react-icons/fa';
import { Button, Input, Modal, MovieCard } from './components';
import { FaPlus } from 'react-icons/fa6';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiVideoOff } from 'react-icons/fi';
import { TGetMoviesResponse } from '@/types/movie';
import { useState } from 'react';

type TProps = { movies: TGetMoviesResponse };

export const MoviesList = (props: TProps) => {
  const { movies } = props;

  const [showAddModal, setShowAddModal] = useState(true);

  const onAddModalClose = () => setShowAddModal(false);

  const onAddButtonClick = () => setShowAddModal(true);

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

      <div className="py-6 grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] gap-6 w-full justify-center">
        {movies?.map(({ id, name, genre, rating, year, image }) => (
          <MovieCard key={id} {...{ name, genre, rating, year, image }} />
        ))}
      </div>

      {showAddModal && (
        <Modal
          title="Add Movie"
          subtitle="Enter details of your movie"
          onClose={onAddModalClose}
          className="lg:w-[60%] lg:min-w-[42rem] flex flex-col"
        >
          <form className="flex flex-col overflow-auto pb-20">
            <div className="flex flex-col gap-4 overflow-auto">
              <Input label="Name" name="name" />
              <Input label="Name" name="name" />
              <div className="flex gap-4 w-full">
                <Input label="Year" name="year" type="number" />
                <Input label="Rating" name="rating" type="number" />
              </div>
            </div>

            <div className="flex gap-4 absolute bottom-6 w-full left-0 right-0 px-6">
              <Button
                title="Cancel"
                type="button"
                onClick={onAddModalClose}
                className="border border-neutral-50 text-neutral-50 w-2/5 !h-12 !text-base !rounded-xl"
              />
              <Button
                title="Add Movie"
                type="submit"
                className="bg-yellow-400 !h-12 text-neutral-700 w-3/5 !text-base !rounded-xl"
              />
            </div>
          </form>
        </Modal>
      )}

      {/* <div className="py-6 flex items-center flex-grow">
        <button className="w-full h-1/2 flex flex-col items-center justify-center border border-dashed rounded-xl transition-all hover:brightness-[.85] active:brightness-75 border-neutral-50">
          <p className="mb-4 text-2xl font-bold text-neutral-50">
            Add your first movie
          </p>
          <IoAddCircleOutline className="text-6xl text-neutral-50" />
        </button>

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
