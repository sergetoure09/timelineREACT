import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import Content from './content.jsx'

class App extends React.Component{
    render(){
        return(
            <div className="notificationsFrame">
            <div className="panel">
             <Header />
             <Content />
            </div>
          </div>
        )
    }
}


export default App