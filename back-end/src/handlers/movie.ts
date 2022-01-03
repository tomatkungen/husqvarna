import assert from 'assert';
import axios from 'axios';

export type RoutesProps = {
  api: string;
  cb: () => Promise<void>;
};

type MovieProps = {
  original_title: string;
  homepage: string;
  overview: string;
  release_date: string;
};

type GenreProps = {
  name: string;
};

class Movie {
  private _URL: string;
  private _API_KEY: string;

  constructor(apiKey: string) {
    assert(apiKey !== undefined, `Missing API in .env ${apiKey}`);

    this._URL = 'https://api.themoviedb.org/3';
    this._API_KEY = `api_key=${apiKey}`;
  }

  public getRoutes(): RoutesProps[] {
    return [
      { api: '/movie', cb: this.getMovie.bind(this) },
      { api: '/genre', cb: this.getGenre.bind(this) },
    ];
  }

  private async getMovie(): Promise<Partial<MovieProps>> {
    const result = await axios.get(`${this._URL}/movie/550?${this._API_KEY}`);
    if (!result.data) {
      return {};
    }

    const data = result.data;
    return {
      original_title: data.original_title,
      homepage: data.homepage,
      overview: data.overview,
      release_date: data.overview,
    };
  }

  private async getGenre(): Promise<GenreProps[]> {
    const result = await axios.get(
      `${this._URL}/genre/movie/list?${this._API_KEY}`
    );

    if (!result.data) {
      return [];
    }

    const genres = result.data.genres;
    return genres.map((genre: { name: string }) => genre.name);
  }
}

export { Movie };
