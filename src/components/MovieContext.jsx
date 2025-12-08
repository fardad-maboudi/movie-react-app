import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect (() => {
        const storedFavs = localStorage.getItem('favorites')
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(()=> {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addtoFavorites = (movie) => {
        setFavorites(preFav => [...preFav, movie])
    }
    const removeFavorite = (movieId) => {
        setFavorites(preFav => preFav.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {
        favorites,
        addtoFavorites,
        removeFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}