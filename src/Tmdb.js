const API_KEY = "9b698c8ec299e721672d081cfec06ff9";

const API_BASE = "https://api.themoviedb.org/3";

/*
- originais da netflix
- recomendados
- em alta
- açao
- comedia
- terror
- romance
- documentario
*/

const getData = async (endpoint) => {
  const resq = await fetch(`${API_BASE}${endpoint}`);
  const json = await resq.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await getData(
          `/discover/tv?with_network=213?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "treding",
        title: "Recomendados para você",
        items: await getData(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await getData(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await getData(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await getData(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await getData(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await getData(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentario",
        items: await getData(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await getData(
            `/movie/${movieId}?language=pt-BR?a&pi_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await getData(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
