import "../css/MovieCard.css"
import { useMovieContext } from "./MovieContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function MovieCard ({movie}) {

    const {isFavorite, addtoFavorites, removeFavorite} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteBtn (e) {
        e.preventDefault()
        if(favorite) removeFavorite(movie.id)
        else addtoFavorites(movie)
    }
    return (
        
            <>
             <motion.div
              variants={{
                    hidden: {opacity: 0},
                    show: {
                        opacity: 1
                        
                    }
            }}
             className="movie-card">
                
            <div className="movie-poster">
                
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : " "}`} onClick={onFavoriteBtn}>
                        ♥
                    </button>
                </div>
            </div>
            <Link  to={`/moviepage/${movie.id}`}>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-info--overview">{movie.overview}</p>
                <p className="movie-info--date">{movie.release_date?.split("-")[0]}</p>
            </div>
            </Link>
        </motion.div>
        </>
           
        
    )
}