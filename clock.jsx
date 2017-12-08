import React from 'react'
import ReactDOM from 'react-dom'


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date().toLocaleTimeString()
        }
    }
componentDidMount(){
   setInterval(
        () => this.setState({
            date:new Date().toLocaleTimeString()
        }),1000)  
}


    render(){
        
        return(
        <span>
        {this.state.date}
        </span>
        
        )
    }
}

export default Clock