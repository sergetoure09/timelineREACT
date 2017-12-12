import React from 'react'
import ReactDOM from 'react-dom'
import MenuIcon from './menuicon.jsx'
import Search from './search.jsx'
import PropTypes from 'prop-types'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:""
           
        }
    
    }
    componentWillMount(){
        this.setState({
            title:"Hello serge"
        })
    }

    render(){
        const textstyle={
                color:'white'
            
        }

        return(
            <div className="header">
                <MenuIcon />
                        <span style={textstyle} className="title">{this.state.title}</span>
                <Search />
            
                        
            </div>

        )
    }
}





export default Header