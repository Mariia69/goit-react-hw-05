import { useEffect, useState, useRef } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { fetchFilms } from "../../fetchFilms-api";
import { useSearchParams , Link, useLocation} from "react-router-dom";

export default function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filmList, setFilmList] = useState([])    
    const [searchParams, setSearchParams] = useSearchParams();
    const urlQuery = searchParams.get("query") || "";
    const location = useLocation();
    const backLinkURL = useRef(location.state ?? "/movies");


    const handleChange = (inputValue) => {
        setSearchParams({
            query:inputValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchQuery(event.target[0].value)
        event.target.reset()
    };

    useEffect(() => {

        async function getFilm() {
            try {
                const response = await fetchFilms(searchQuery)
                setFilmList(response.results)
            } catch (error) {
                throw Error("there an error in the fetch")
            }
        }
        
        getFilm()

    }, [searchQuery]);

    return <>
        <Navigation></Navigation>
        <div>
            <Link to={backLinkURL.current}>Go back</Link>
        </div>
        <div>
            <form action="" onSubmit={handleSubmit}>    
                <input type="text" name="query" value={urlQuery} onChange={e => { handleChange(e.target.value) }} />
                <button type="submit">Search</button>
            </form>
        </div>
        {filmList.length > 0 && <MovieList data={filmList}></MovieList>}
    </>
}