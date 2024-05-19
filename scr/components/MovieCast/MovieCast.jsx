import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "../../fetchFilms-api";
import css from './MovieCast.module.css'

export default function MovieCast() {
    const { filmId } = useParams();
    const [movieCast, setMovieCast] = useState(null)
    
    useEffect(() => {

        async function getMovieCast() {
            try {
                const response = await fetchCredits(filmId)
                setMovieCast(response.cast)
                console.log(response)
            } catch (error) {
                throw Error("error")
            }
        }

        getMovieCast();
    }, [filmId]);
    
    function getMarkup(data) {
        const markup = data.map((actor) => {
            const { id, name, character, profile_path } = actor;

            return <li className={css.actorItem} key={id}>

                <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} width={200} height={200} alt="" />

                <div className={css.characterOverview}>
                    <p>{name}</p>
                    <p>
                        <b>Character</b><span className={css.character}>{character}</span>
                    </p>
                </div>

            </li>
        });
        return markup;
    }

    return <>
        {movieCast ? <ul className={css.actorsList}>{getMarkup(movieCast)}</ul> : <p>Sorry there`s no info about the cast</p>}
    </>;
}