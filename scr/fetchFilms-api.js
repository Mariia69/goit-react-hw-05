import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const tokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzlhOWZjMjRiODYwMjczM2YwMThiNzQ1NjExMTU5MCIsInN1YiI6IjY2MmFiMDhmOWFjNTM1MDExYzhlZDJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8WisobdK1jXGSdZtS7YOdT9FnVlS_UOhzY7AcGN3yw";
axios.defaults.headers.common["Authorization"] = `Bearer ${tokenAPI}`;


export const fetchTrendingFilms = async () => {
    const response = await axios.get(`trending/movie/day`);
    return response.data;
}

export const fetchFilmsById = async (id) => {
    const response = await axios.get(`movie/${id}`);
    return response.data;
};

export const fetchFilms = async (query,page) => {
    const response = await axios.get(`search/movie`, {
        params: {
            query,
            page
        }
    });
    return response.data;
}

export const fetchReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews`);
    return response.data;
}

export const fetchCredits = async (id) => {
    const response = await axios.get(`movie/${id}/credits`);
    return response.data;

}
