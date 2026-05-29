// 'use server';

// import cloudinary from '@/lib/cloudinary';
// import { prisma } from '@/lib/db';
// import { revalidateTag } from 'next/cache';

// // init state
// type TInitialState = {
//   message: string;
// };

// export type TDeleteMoviePayload = {
//   movieId: string;
//   imagePublicId: string | null;
// };

// export const deleteMovie = async (
//   _initialState: TInitialState,
//   { imagePublicId, movieId }: TDeleteMoviePayload
// ) => {
//   if (imagePublicId) {
//     await cloudinary?.uploader.destroy(imagePublicId);
//   }

//   await prisma.movie.delete({
//     where: {
//       id: movieId,
//     },
//   });

//   revalidateTag('movies');
//   return { message: 'success' };
// };
