import React from 'react'
import ReactDOM from 'react-dom'
import ActivityItem from './activityitem.jsx'



class Content extends React.Component{
    render(){
        return(
            <div className="content">
            <div className="line"></div>
            {/* for each activity item*/}

            <ActivityItem />
       

          </div>
            
        )
    }
}


export default Content