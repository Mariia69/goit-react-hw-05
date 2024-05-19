import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const tokenAPI = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRiNWQ0ZTFjMmIyYjRhYTcwMDhhZGNlYTYxMmNiNCIsInN1YiI6IjY2NDllZThhNzNjZGI0NGJiZjJmYmJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rib-RBb-yyYTdIPCyyzJBXu_7XyZiDX5mrMMnc0RzzA";
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
