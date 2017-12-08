import React from 'react'
import ReactDOM from 'react-dom'


class Clock extends React.Component{
    render(){
        this.props=new Date().toLocaleTimeString()
        return(
        <span>
        {this.props}
        </span>
        
        )
    }
}

export default Clock