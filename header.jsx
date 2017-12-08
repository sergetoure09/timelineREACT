import React from 'react'
import ReactDOM from 'react-dom'
import MenuIcon from './menuicon.jsx'
import Search from './search.jsx'



class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
           
        }
    }
    render(){
        return(
            <div className="header">
                <MenuIcon />
                        <span className="title">{this.state.title}</span>
                <Search />
            
                        
            </div>

        )
    }
}


export default Header