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
        this.setState({
            activities:[{
                key:1,
                user:{
                  alt:'doug',
                  src:"http://www.croop.cl/UI/twitter/images/doug.jpg",
                  name:''
                },
                time:'10 am',
                comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                commentCount:4
        
        
              },
              {
                key:2,
                user:{
                  alt:'Mark',
                  src:"http://www.croop.cl/UI/twitter/images/carl.jpg",
                  name:''
                },
                time:'8 pm',
                comment:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                commentCount:9
        
        
              }]
        })
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