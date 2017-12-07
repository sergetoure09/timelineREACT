import React from 'react'
import ReactDOM from 'react-dom'
import ActivityItem from './activityitem.jsx'

class Content extends React.Component{
    render(){
        let {activities}=this.props
        return(
            <div className="content">
            <div className="line"></div>
            {/* for each activity item*/}

            {activities.map((activity)=> 
            <ActivityItem key={activity.key} activity={activity}/>
        )}
          
       

          </div>
            
        )
    }
}


export default Content