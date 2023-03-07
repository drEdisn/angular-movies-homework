import { MovieFullInfo, MovieFullInfoApi } from 'src/app/movie-page/models/movie-full-info.model';

export const fullMovieMockApi: MovieFullInfoApi = {
  adult: false,
  backdrop_path: '/22z44LPkMyf5nyyXvv8qQLsbom.jpg',
  belongs_to_collection: null,
  budget: 20000000,
  genres: [
    { id: 27, name: 'Horror' },
    { id: 9648, name: 'Mystery' },
    { id: 53, name: 'Thriller' },
  ],
  homepage: 'https://www.knockatthecabin.com',
  id: 631842,
  imdb_id: 'tt15679400',
  original_language: 'en',
  original_title: 'Knock at the Cabin',
  overview:
    'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
  popularity: 4969.06,
  poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
  production_companies: [
    {
      id: 12236,
      logo_path: '/uV6QBPdn3MjQzAFdgEel6od7geg.png',
      name: 'Blinding Edge Pictures',
      origin_country: 'US',
    },
    {
      id: 33,
      logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      name: 'Universal Pictures',
      origin_country: 'US',
    },
    {
      id: 7493,
      logo_path: '/452FO4LcI6lA6bfgl6w1kQYRBlr.png',
      name: 'FilmNation Entertainment',
      origin_country: 'US',
    },
    { id: 152785, logo_path: null, name: 'Wishmore', origin_country: 'US' },
    {
      id: 10338,
      logo_path: '/el2ap6lvjcEDdbyJoB3oKiYgXu9.png',
      name: 'Perfect World Pictures',
      origin_country: 'CN',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2023-02-01',
  revenue: 52000000,
  runtime: 100,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'Save your family or save humanity. Make the choice.',
  title: 'Knock at the Cabin',
  video: false,
  vote_average: 6.57,
  vote_count: 815,
};

export const fullMovieMock: MovieFullInfo = {
  genres: fullMovieMockApi.genres,
  id: fullMovieMockApi.id,
  overview: fullMovieMockApi.overview,
  posterPath: fullMovieMockApi.poster_path,
  releaseDate: fullMovieMockApi.release_date,
  revenue: fullMovieMockApi.revenue,
  runtime: fullMovieMockApi.runtime,
  title: fullMovieMockApi.title,
  voteAverage: fullMovieMockApi.vote_average,
};