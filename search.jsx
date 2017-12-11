import React from 'react'
import ReactDOM from 'react-dom'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchInputClass:["searchInput"],
            searchVisibility:false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){

        if (!this.state.searchVisibility){
            this.setState(prevState=>
            ({
               searchInputClass:prevState.searchInputClass.push(':active')
            })
            )
         
        }
        else{
            this.setState(prevState=>
                ({
                   searchInputClass:prevState.searchInputClass.pop(':active')
                })

            )}
    }

  
    
    render(){
        
            
        return(
            <div>
                <input
                type="text"
                className={this.state.searchInputClass.join(' ')}
                placeholder="Search ..." />

            <div className="fa fa-search searchIcon" onClick={this.handleClick}></div>
          </div>
            
        )
    }
}


export default Search