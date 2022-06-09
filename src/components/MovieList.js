import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie) =>{

            return(
                <div className='movie-container m-3'>
                    <img src={movie.Poster} alt="movie" />
                </div>

            )
            
        })}
    </>
  )
}

export default MovieList