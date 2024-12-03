import { getImageProps } from 'next/image';
import { useMemo } from 'react';

type TProps = {
  authType: 'login' | 'signUp';
};

export const AuthPageImage = (props: TProps) => {
  const { authType } = props;

  const {
    props: { srcSet: desktop },
  } = useMemo(
    () =>
      getImageProps({
        width: 1069,
        height: 691,
        src: `/asset/images/${authType}/movie-desktop.jpg`,
        alt: 'movie',
      }),
    [authType]
  );

  const {
    props: { srcSet: tabl },
  } = useMemo(
    () =>
      getImageProps({
        width: 738,
        height: 356,
        src: `/asset/images/${authType}/movie-tablet.jpg`,
        alt: 'movie',
      }),
    [authType]
  );

  const {
    props: { srcSet: mobile, ...rest },
  } = useMemo(
    () =>
      getImageProps({
        width: 400,
        height: 150,
        placeholder: 'blur',
        blurDataURL: `/asset/images/${authType}/movie-placeholder.jpg`,
        src: `/asset/images/${authType}/movie-mobile.jpg`,
        alt: 'movie',
      }),
    [authType]
  );

  return (
    <picture className="lg:w-2/5">
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 640px)" srcSet={tabl} />
      <source media="(max-width: 639px)" srcSet={mobile} />
      <img
        alt="tape"
        {...rest}
        className="rounded-xl w-full sm:rounded-2xl sm:h-80 sm:object-cover lg:h-full lg:min-h-[600px]"
      />
    </picture>
  );
};
