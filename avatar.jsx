import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:this.props.user
        }
    }
    render(){
        
        return(
            <div className="avatar">
            <h5>{this.state.user.name}</h5>
                <img
                alt={this.state.user.alt}
                src={this.state.user.src}/>
                
          </div>
        )
    }
}

export default Avatar