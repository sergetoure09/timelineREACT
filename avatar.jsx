import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component{
    render(){
        let {user}=this.props
        return(
            <div className="avatar">
                <img
                alt={user.alt}
                src={user.src}/>
                <h5>{user.name}</h5>
          </div>
        )
    }
}

export default Avatar