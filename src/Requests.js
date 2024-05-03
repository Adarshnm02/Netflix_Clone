import {api_key} from './utilities/api_key'

const requests = {
    now_playing: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY_HERE&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Horror`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Comedy`

};



export default requests