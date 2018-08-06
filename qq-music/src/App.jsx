import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route
} from 'react-router-dom'

import './rem.js'
import './scss/reset.css'
import './scss/app.css'
import My from './components/my.jsx'
import Music from './components/music.jsx'
import Find from './components/find.jsx'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

class App extends Component {
  render() {
    return <Router>
      <div className="router">
        <Route exact path="/" render={()=>{
          return <Redirect to="/s"/>
        }}/>

        <Route path="/s" render={()=>{
          return <div className="App">
             <header><Header/></header>
             <section>
               <Route exact path="/s" render={()=>{
                 return <Redirect to="/s/music"/>
               }}/>
               <Route path="/s/my" component={My}/>
               <Route path="/s/music" component={Music}/>
               <Route path="/s/find" component={Find}/>
             </section>
             <footer><Footer/></footer>
          </div>
        }}/>
      </div>
    </Router>
  }
}

export default App;
