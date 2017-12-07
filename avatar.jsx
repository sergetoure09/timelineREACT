import React from 'react'
import ReactDOM from 'react-dom'

class Avatar extends React.Component{
    render(){
        return(
            <div class="avatar">
                <img
                alt={props.alt}
                src={props.src}/>
          </div>
        )
    }
}

export default Avatar