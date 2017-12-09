import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import Content from './content.jsx'
import Clock from './clock.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activitie:this.props.activities
    }
  }



  componentWillMount(){
    this.setState({activities:[{
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
            <div className="notificationsFrame">
              <div className="panel">
              <Header title=""/>
              <Content activities={this.state.activities}/>
              <div className="clock">
              <Clock />
              </div>
              </div>
             
          </div>
        )
    }
}


export default App