

import "../css/MovieCardTwo.css"
import myMovieList from "../services/myMovieList"
export default function MovieCardTwo ({genre,poster,title, director, year}) {
    
    
    return (
        <section className="main-card">
            <div className="movie-card">
            <div className="movie-poster">
                <img src={poster} alt={title} />
                
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{director}</p>
                <p>{year}</p>
                <p>{genre}</p>
            </div>
        </div>
        </section>  
    )
}