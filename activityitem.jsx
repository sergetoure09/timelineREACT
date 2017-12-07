import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './avatar.jsx'


class ActivityItem extends React.Component{
    render(){
        
        return(
            <div className="item">
                    <Avatar />
                    <span className="time">
                        {props.time}
                    </span>
                    <p>{props.comment}</p>
                    <div className="commentCount">
                        {props.commentCount}
                    </div>
            </div>
        )
    }
}
export default ActivityItem