import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../css/MoviePage.css"
import demonSlayer from "../assets/demonSlayer.webp"
import { getMovieId, getMovieInfo } from "../services/api"
import imdb from "../assets/imdb.png"
import CommentForm from "../comment/CommentForm"
import CommentList from "../comment/CommentList"
import "../comment/commentCss.css"
import { motion, stagger } from "framer-motion"
import NavBar from "./NavBar"

const animationNegativeHorizon = {
    opacity: 0, x: -50
}
const animationZeroHorizon = {
    opacity: 1, x: 0
}
const animationNegVertical  = {

}

const animationZeroVertical ={

}

const animationVertical = {
    hidden: {opacity: 0, y: -50},
    show: {opacity: 1, y: 0}
}


function MoviePage () {
    const [data, setData] = useState([])
    const [cast, setCast] =useState([])
    const {id} = useParams()

    const [comments, setComments] = useState([]);

    // console.log(id);
    useEffect(()=>{
        const getMovie = async () =>{
            const movieID = await getMovieId(id)
            setData(movieID)
            // console.log(movieID.imdb_id);   
        }
        getMovie()
        
    }, [id])
    useEffect (() => {
        const getMovieCast = async () =>{
        const MovieCast = await getMovieInfo(id)
        setCast(MovieCast)
        console.log(MovieCast);
        
        }
        getMovieCast();
    }, [])
    console.log(cast?.cast);
    
    const castMovie = cast.cast?.slice(0, 3).map(actor => {
        return (
            <li key={actor.id}>{actor.name}</li>
        )
    })

    const directorMovie = cast?.crew?.filter((item => item.job === "Director")).map(item => <p key={item.id}>{item.name}</p>)

    
    const handleAddComment = (commentText, user) => {
    const newComment = {
      id: Date.now(), // Simple unique ID
      text: commentText,
      author: user, // Or get from user input
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
  };
    return (
        <>
        <NavBar home={"Home"}/>
        <section>
            <motion.section 
            
            className="movie-page">
            <div className="image">
                <motion.img
                variants={animationVertical} 
            initial="hidden"
            animate="show"
            transition={{duration: 0.5, ease: "easeOut", delay: 0.1}}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
            </div>
            <div className="page-info">
                <div>
                    <div className="header">
                        <motion.h1
                        initial={animationNegativeHorizon}
                        animate={animationZeroHorizon}
                        transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                        >{data.title}</motion.h1>
                        <div className="imdb-logo">
                            <a
                            href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noopener noreferrer">
                                <motion.img
                                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, ease: "easeOut", delay:0.1}}
                                src={imdb} alt="" /></a>
                        </div>
                    </div>
                <motion.div 
                
                className="genre-con"><p>Genres:</p>
                    {data && data.genres && data.genres.map((movie) =>{
                // console.log(movie);
            
                    return (
                        <motion.span
                        key={movie.id}
                        variants={{
                            hidden: {opacity: 0},
                            show: {
                                opacity: 1,
                                staggerChildren: 0.3,
                                
                         }
            }}
            initial="hidden"
            animate="show"
            transition={{duration: 0.9, ease: "easeOut", delay: 0.1}}
                        >{movie.name}
                        
                        </motion.span>
                    )           
                })}
                
                
                </motion.div>
                <motion.section
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, ease: "easeOut", delay:0.1}}
                className="cast-crew">
                    <div>
                        <h4>Director:</h4>
                        {directorMovie}
                    </div>
                    <div>
                        <h4>Cast:</h4>
                        <ul>
                            {castMovie}
                        </ul>
                    </div>
                    
                </motion.section>
                </div>
                <motion.p
                        initial={animationNegativeHorizon}
                        animate={animationZeroHorizon}
                        transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                className="overview"> {data.overview}</motion.p>
            </div>
            
           
        </motion.section>
                <div className="comment">
                    <h1>Comments</h1>
                    <CommentForm onAddComment={handleAddComment} />
                    <CommentList comments={comments} />
                </div>
                 
        </section>
        </>
    )
}

export default MoviePage