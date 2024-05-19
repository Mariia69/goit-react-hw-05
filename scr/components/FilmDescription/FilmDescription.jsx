import css from "./FilmDescription.module.css"

export default function FilmDescription(data) {
    const { title, overview, genres, backdrop_path } = data.data;

    const getGenres = (genre) =>{
        return <p key={genre.id}>{genre.name}</p>
    }

    return <div className={css.movieDescription}>

        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />

        <div>
        <h2>{title }</h2>
        <h3>Overview</h3>
        <p className={css.overview}>{overview }</p>
        <h3>Genres</h3>
        {genres && <div className={css.genresContainer}>{genres.map(getGenres) }</div>}
        </div>
        
    </div>
}