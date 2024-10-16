import Image from 'next/image';
import { IoMdMore } from 'react-icons/io';
import { IconButton } from '../button';
import { FaStar } from 'react-icons/fa';

type TProps = {
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
};

export const MovieCard = (props: TProps) => {
  const { title, year, genre, rating, image } = props;

  return (
    <article className="h-40 rounded-xl bg-neutral-400 flex items-center justify-between overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className="h-full w-28 object-cover"
      />
      <div className="p-2.5 h-full w-full flex flex-col justify-center gap-2.5">
        <div className="flex justify-between items-center h-12">
          <h3 className="text-lg font-bold ellipsis-2">{title}</h3>
          <IconButton Icon={IoMdMore} />
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
  );
};
