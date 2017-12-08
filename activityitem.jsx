import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './avatar.jsx'


class ActivityItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activity:this.props.activity
        }
    }
    render(){
       
        
        return(
            <div className="item">
                    <Avatar user={this.state.activity.user}/>
                    <span className="time">
                        {this.state.activity.time}
                    </span>
                    <p>{this.state.activity.comment}</p>
                    <div className="commentCount">
                        {this.state.activity.commentCount}
                    </div>
            </div>
        )
    }
}
export default ActivityItem