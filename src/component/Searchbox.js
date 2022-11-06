import React from "react";

const Searchbox =({searchChange}) =>{
    return (
        <div className="pa2">
            <input type='search' 
            onChange ={searchChange}
            className='pa3 ba b--green bg-lightest-blue'
            placeholder='search robos' />
            
        </div>
    )
}

export default Searchbox