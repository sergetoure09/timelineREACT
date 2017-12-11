import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import Content from './content.jsx'
import Clock from './clock.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:this.props.title,
      activities:[],
      
    }
  }



  componentDidMount(){
    var url=('/timeline')
    var request=new XMLHttpRequest()
    request.open('GET',url)
    request.responseType='json'
    request.onload=()=>{
      this.setState({
        activities:request.response,
        title:"Timeline activities from python server backend",
      })
    }
    request.send()
  }

    

    render(){
      
      
        return(
            <div className="notificationsFrame">
              <div className="panel">
              <Header title={this.state.title}/>
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