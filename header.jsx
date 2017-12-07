import React from 'react'
import ReactDOM from 'react-dom'
import MenuIcon from './menuicon.jsx'
import Search from './search.jsx'



class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <MenuIcon />
                        <span className="title">{props.title}</span>
                <Search />
            
                        
            </div>

        )
    }
}


export default Header