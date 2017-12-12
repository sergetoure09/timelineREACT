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

   
  componentWillMount(){
    var url=('/timeline')
    fetch(url)
    .then((resp)=>resp.json()
    .then(resp=>{
        this.setState({
        activities:resp
    })}))
}
    /*
    var request=new XMLHttpRequest()
    request.open('GET',url)
    request.responseType='json'
    request.onload=()=>{
      var resp=request.response
      this.setState({
        activities:resp
       
      })
    }
    request.send()
  }
  */
     

   
   
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