import React from 'react'
import ReactDOM from 'react-dom'
import ActivityItem from './activityitem.jsx'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activities:this.props.activities
            
        }
    }
   
   
    render(){
        
        return(
            <div className="content">
            <div className="line"></div>
            {/* for each activity item*/}

            {this.state.activities.map((activity)=> 
            <ActivityItem key={activity.key.toString()} activity={activity}/>
        )}
       
          
       

          </div>
            
        )
    }
}


export default Content