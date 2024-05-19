import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { Link , useLocation } from "react-router-dom";

export default function MovieList(data) {
    const location = useLocation();

    const listMarkup = data.data.map((film) => {
        return <li key={nanoid()}><Link to={`/movies/${film.id}`} state={location}>{film.original_title }</Link></li>
    })
    return <ul>{listMarkup }</ul>
}