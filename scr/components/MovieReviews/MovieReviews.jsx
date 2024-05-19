import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews} from "../../fetchFilms-api";

export default function MovieReviews() {
    const { filmId } = useParams();
    const [filmReviews, setFilmReviews] = useState(null);
    
    useEffect(() => {
        
        async function getReviews() {
            try {
                const response = await fetchReviews(filmId)
                setFilmReviews(response.results)
            } catch (error) {
                throw Error("error")
            }
        }

        getReviews()
    }, [filmId])
    
    function makeMarkup(data) {

        const markup = data.map(review => {
            const { author, id, content } = review;

            return <li key={id}>
                <p>
                    <b>Author:</b> {author}
                </p>

                <p>
                    <b>Review:</b>{content}
                </p>
            </li>
        });

        return markup;
    }

    return <>
        {filmReviews ? <ul>{makeMarkup(filmReviews)}</ul> : <p>Sorry, there no reviews about this movie</p>}
    </>
}