export interface MovieType {
  backdrop: string;
  cast: Array<string>;
  classification: string;
  director: string | Array<string>;
  genres: Array<string>;
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
  isLiked?: boolean;
}
