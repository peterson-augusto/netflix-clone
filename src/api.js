const API_KEY = '21989ea7f1838d307e5f598db6dc1837';

const categories = [
    {
        name: 'trending',
        title: 'Em alta',
        path: `/trending/all/day?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true
    },
    {
        name: 'netflixOriginals',
        title: 'Originais Netflix',
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false
    },
    {
        name: 'topRated',
        title: 'Populares',
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
    },
    {
        name: 'comedy',
        title: 'Comédias',
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false
    },
    {
        name: 'romances',
        title: 'Romances',
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false
    },
    {
        name: 'documentaries',
        title: 'Documentários',
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false
    },
];

export const getMovies = async (path) => {

    try {
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log('error getMovies: ', error)
    }
}

export default categories;