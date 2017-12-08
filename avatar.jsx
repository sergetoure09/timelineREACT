import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component{
    render(){
        let {user}=this.props
        return(
            <div className="avatar">
            <h5>{user.name}</h5>
                <img
                alt={user.alt}
                src={user.src}/>
                
          </div>
        )
    }
}

export default Avatar