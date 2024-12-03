import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Header } from './components';
import { MoviesList } from './MoviesList';
import { prisma } from '@/lib/db';
import { TGetMoviesResponse } from '@/types/movie';
import { unstable_cache } from 'next/cache';

const getMovies = unstable_cache(
  async (userId: string) =>
    await prisma.movie?.findMany({
      where: { userId },
    }),
  ['movies'],
  {
    revalidate: 120,
    tags: ['movies'],
  }
);

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect('/login');

  // const movies: TGetMoviesResponse = [];
  const movies: TGetMoviesResponse =
    typeof session.user.id === 'string' ? await getMovies(session.user.id) : [];

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-col flex-grow pb-5 pt-16 px-4">
        <MoviesList movies={movies} />
      </main>
    </div>
  );
}
