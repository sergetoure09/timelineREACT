import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.jsx'
import Content from './content.jsx'

class App extends React.Component{

    render(){
      var activities=[
        {
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


        },
        {
          key:3,
          user:{
            alt:'Rek',
            src:"http://www.croop.cl/UI/twitter/images/russel.jpg",
            name:''
          },
          time:'12 am',
          comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          commentCount:4


        },
        {
          key:4,
          user:{
            alt:'Fel',
            src:"http://www.croop.cl/UI/twitter/images/doug.jpg",
            name:''
          },
          time:'2 pm',
          comment:'Read Day two article',
          commentCount:4


        }
     
      ]
      
        return(
            <div className="notificationsFrame">
              <div className="panel">
              <Header title="Activity Timeline"/>
              <Content activities={activities}/>
              </div>
          </div>
        )
    }
}


export default App