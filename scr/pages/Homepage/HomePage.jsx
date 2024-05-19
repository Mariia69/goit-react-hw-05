import { useEffect, useState } from "react";
import { fetchTrendingFilms } from "../../fetchFilms-api";
import MovieList from '../../components/MovieList/MovieList';
import Navigation from '../../components/Navigation/Navigation';

function HomePage() {
    const [trendingFilmList, setTrendingFilmList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
    
    useEffect(() => {

        async function getTrendingFilms() {
            try {
                setIsLoading(true)
                const response = await fetchTrendingFilms()
                setTrendingFilmList(response.results)
            } catch (error) {
                return Error("there is an error in fetch")
            }
            finally {
                setIsLoading(false)
            }
        }
        
        getTrendingFilms()

    }, []);

    return <div>
        <Navigation></Navigation>
        <MovieList data={trendingFilmList}></MovieList>
        {isLoading && <p>Loading films.Please wait...</p>}
    </div>
}

export default HomePage;