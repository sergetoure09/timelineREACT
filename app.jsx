import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import Content from './content.jsx'
import Clock from './clock.jsx'

class App extends React.Component{

    

    render(){
      var activities=[]
      
        return(
            <div className="notificationsFrame">
              <div className="panel">
              <Header title="Activity Timeline"/>
              <Content activities={activities}/>
              <div className="clock">
              <Clock />
              </div>
              </div>
             
          </div>
        )
    }
}


export default App