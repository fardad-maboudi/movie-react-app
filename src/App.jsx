
import Home from './pages/Home'
import "./css/App.css"
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'
import Error from './components/Error'
import { MovieProvider } from './components/MovieContext'



function App() {
  


  return (
    <>
      <MovieProvider>
        {/* <NavBar movie_app={"Movie App"}/> */}
        <main className='main-content'>
          
          <Routes>
            
            <Route path='/' element={<Home/>}  />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/moviepage/:id' element={<MoviePage/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          
        </main>
      </MovieProvider>

      
    </>
  )
}

export default App
