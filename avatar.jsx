import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component{
    render(){
        let {user}=this.props
        return(
            <div class="avatar">
                <img
                alt={user.alt}
                src={user.src}/>
          </div>
        )
    }
}

export default Avatar