import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './avatar.jsx'


class ActivityItem extends React.Component{
    render(){
        let {activity}=this.props
        
        return(
            <div className="item">
                    <Avatar user={activity.user}/>
                    <span className="time">
                        {activity.time}
                    </span>
                    <p>{activity.comment}</p>
                    <div className="commentCount">
                        {activity.commentCount}
                    </div>
            </div>
        )
    }
}
export default ActivityItem