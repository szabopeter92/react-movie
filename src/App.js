import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import {useEffect, useState} from "react";
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import MovieSearch from './components/MovieSearch';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

      useEffect(()=>{
       
          Axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=b69a7fbb`)
               .then(resp =>{

                  if(resp.data.Search){

                    setMovies(resp.data.Search);
                  }
               })
      }, [searchValue]);




  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-4 ">
        <MovieHeader />
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      
      <div className="row movie-box">
          <MovieList  movies={movies}/>
      </div>
    </div>
  );
}

export default App;
