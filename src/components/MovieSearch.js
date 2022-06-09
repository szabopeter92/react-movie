import React from 'react'

const MovieSearch = (props) => {
  return (
    <div className='col col-sm-4'>
        <input  
            className='form-contol'
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
            placeholder="Keresés..."
        />
    </div>
  )
}

export default MovieSearch