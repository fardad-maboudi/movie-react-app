import { useState } from "react"
import moviesData from "./services/myMovieList"
import MovieCardTwo from "./components/MovieCardTwo"
import "./css/MovieCardTwo.css"
MovieCardTwo
export default function AppTwp () {
    const [list, setList] = useState(moviesData)

    const handleBtns = (e) => {
    let word=e.target.value;
     
    if(word === "All"){
      setList(moviesData)
    }
    else if(word === "Drama") {
      const filtered = moviesData.filter(item=>item.genre.includes("Drama"));
      setList(filtered)
    }
    else if(word === "Crime") {
      const filtered = moviesData.filter(item=>item.genre.includes("Crime"));
      setList(filtered)
    }else if(word === "Action") {
      const filtered = moviesData.filter(item=>item.genre.includes("Action"));
      setList(filtered)
    }
}
    return (
        <main>
             <h1>hell</h1>
             <div className="btn-con">
                <button value="All" onClick={handleBtns}>All</button>
                <button value="Drama" onClick={handleBtns}>Drama</button>
                <button value="Crime" onClick={handleBtns}>Crime</button>
                <button value="Action" onClick={handleBtns}>Action</button>
             </div>
             
                {list.map((movie) => {
                    return <MovieCardTwo key={movie.id} title={movie.title}
                    director={movie.director}
                    year={movie.year}
                    poster={movie.poster}
                    genre={movie.genre}
                    />
                })}
             
        </main>
       
    )
}


