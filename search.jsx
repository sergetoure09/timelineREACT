import React from 'react'
import ReactDOM from 'react-dom'

class Search extends React.Component{
    render(){
        return(
            <div>
            <input
            type="text"
            className="searchInput"
            placeholder="Search ..." />

          <div className="fa fa-search searchIcon"></div>
          </div>
            
        )
    }
}
export default Search