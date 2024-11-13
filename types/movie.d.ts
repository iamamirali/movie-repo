export type TGetMoviesResponse = TMovie[];

export type TMovie = {
  image: string | null;
  id?: string;
  name: string;
  genre: string;
  rating: number;
  year: number;
};
