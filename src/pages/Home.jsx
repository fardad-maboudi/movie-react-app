import MovieCard from '../components/MovieCard'
import { useState, useEffect, use } from 'react'
import { searchMovies, getPopularMovies, getGenraMovies } from '../services/api'
import "../css/Home.css"
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { option, p } from 'framer-motion/client'


export default function Home () {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [allMovies, setAllMovies] = useState([])

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [genreBtn, setGenreBtn] = useState();

    const [dropdownMovieGenras, setDropdownMovieGenras] = useState()

    const [genreData, setGenreData] = useState()

    const [searchedMovie, setSearchedMovie] = useState("")
    const loadPopularMovies = async () => {
            
            
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
                setAllMovies(popularMovies)
            } catch (err){
                console.log(err);
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
    useEffect(() => {
        
        loadPopularMovies()
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return;
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch (err){
            console.log(err);
            setError("Failed to search movies...") 
        }finally{
            setLoading(false)
        }
        setSearchQuery("")
    }
    
   
    useEffect(()=>{
        
        const Gmovies = async () =>{
            const ggmovies = await getGenraMovies();
            setGenreData(ggmovies)

            // console.log(ggmovies);
            
            const handleBtn = (e,id) =>{
            // console.log(allMovies);
            
            const mm = allMovies.filter(movie => {
            return movie.genre_ids.includes(id)

        })
        
        setMovies(mm)

        console.log(mm);
        
    }

            const moviesWithGenres = ggmovies.genres.map(movie => { 
                return <button className='btn-gerne' onClick={(e)=> handleBtn(e,movie.id)} key={movie.id}>{movie.name}</button>
            })
            setGenreBtn(moviesWithGenres)
            
        }
        Gmovies()
        // console.log(allMovies);
        
    },[allMovies])
    function SearchMovie () {
        setSearchedMovie(searchQuery)
        // console.log(searchedMovie);
        
    }

    //     const ddmenu = allMovies.filter(movie => {
        //         console.log(movie);
                
        //     return movie.genre_ids.includes(value)
        // })
    // const handleChange = (e) => {
    //     console.log(genreData);
        
    //         const value = e.target.value;
        

    //     const ddmenu = genreData.genres.map (item => {
    //         allMovies.filter(movie => {
            
                
    //             return movie.genre_ids.includes(item?.id)
    //         })
    //     })
    //         console.log(value);
    //         setMovies(ddmenu)
            
            
    //     } 
    const handleChange = (e) => {
    const value = e.target.value;
    
    if (value === "all") {
        setMovies(allMovies);
        return;
    }
    
    // Find the genre ID that matches the selected name
    const selectedGenre = genreData.genres.find(genre => genre.name === value);
    
    if (selectedGenre) {
        const filteredMovies = allMovies.filter(movie => {
            return movie.genre_ids.includes(selectedGenre.id);
        });
        setMovies(filteredMovies);
    }
}
    return (
        <>
        <NavBar movie_app={"Movie App"} />
        <div className="home">
            <h2>filter by Genres</h2>
            <div className='btn-container'>
                        
                {genreBtn}
            </div>
            <div className='dropdown-con'>
                <select 
                        className='dropdown'
                        value={dropdownMovieGenras}
                        onChange={handleChange}>
                    
                    <option value="all">All</option>
                    {genreData?.genres?.map(movie =>{
                        return <option key={movie.id} value={movie.name} >{movie.name}</option>
                    })}
                </select>
            </div>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                value={searchQuery}
                type="text"
                placeholder='Search for movies ...'
                className='search-input'
                onChange={(e)=> setSearchQuery(e.target.value)} />
                
                <button onClick={SearchMovie} type="submit" className='search-button'>Serch</button>
            </form>
            {/* <div>
                {searchedMovie && <p>you searche for {searchedMovie}</p>}
            </div> */}
            {error && <div className='error-message'>
                {error}
            </div>} 
            
                 {loading ? (
            <div className="loading">Loading...</div>
            ) : movies.length < 1 ? (
            <div className="movies-grid not-found">
                <h3>Something went wrong</h3>
                {searchedMovie && <p>You searche for {searchedMovie}</p>}
                <p>No Results Found
                </p>
                <button onClick={() => loadPopularMovies()}>Go Back</button>
            </div>
            ) : (
            <motion.div
                variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.20 }
                }
                }}
                initial="hidden"
                animate="show"
                className="movies-grid"
            >
                {movies.map(movie => (
                     
                <MovieCard key={movie.id} movie={movie} />

                ))}
            </motion.div>
            )}
            
        </div>
        </>
    )
    
}
