'use server';

import { auth } from '@/lib/auth';
import cloudinary from '@/lib/cloudinary';
import { prisma } from '@/lib/db';
import { revalidateTag } from 'next/cache';

// init state
type TInitialState = {
  message: string;
};

export const createMovie = async (
  initialState: TInitialState,
  formData: FormData
) => {
  const imageFile = formData.get('image') as File | string;

  const uploadedImage =
    typeof imageFile !== 'string'
      ? null
      : await cloudinary?.uploader?.upload(imageFile, {
          folder: 'MovieRepo',
        });

  const name = (formData.get('name') as string | null) ?? '';
  const genre = (formData.get('genre') as string | null) ?? '';
  const year = (Number(formData.get('year')) as number | null) ?? 0;
  const image = uploadedImage?.secure_url ?? null;
  const rating = (Number(formData.get('rating')) as number | null) ?? 0;

  const session = await auth();
  const userId = session?.user?.id;

  await prisma.movie.create({
    data: {
      name,
      genre,
      year,
      image,
      rating,
      user: {
        connect: { id: userId },
      },
    },
  });

  revalidateTag('movies');
  return { message: 'success' };
};
