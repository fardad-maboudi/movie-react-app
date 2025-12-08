import "../css/Favorites.css"
import { useMovieContext } from "../components/MovieContext"
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";
function Favorites () {

    const {favorites} = useMovieContext();
    console.log(favorites);
    if (favorites.length > 0) {
        return (
            <>
            <NavBar home={"Home"}/>
            <div className="favorites">
                <h2>favorites</h2>
                <div className="movies-grid">
                {favorites.map(movie => 
                    <MovieCard key={movie.id} movie={movie}/> 
                )}
            </div>
            </div>
            </>
            
            
        )
    
    
    }
    
    else {
        return (
            <>
            <NavBar home={"Home"}/>
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movivies to your favorites and they will apear here</p>
            </div>
            </>
    )
    }
    
}

export default Favorites
