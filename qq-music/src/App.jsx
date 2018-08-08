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

import Footer from './components/footer.jsx'

import './font/iconfont.css'

import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

class App extends Component {
  constructor(props){
        super(props)
        this.state={
            options : ["我的","音乐馆","发现"]
        }
    }
  render() {
    return <div className="App">
             <header>
             <div className="header-wrap">
                <div className="top">
                    <i className="icon iconfont icon-filter-"></i>
                    <div className="options">{
                          this.state.options.map((item,index)=>{
                                return  <span key={index} onClick={()=>{this.Click(index)}} className="lick">{item}</span>
                          })     
                    }</div>
                    <i className="icon iconadd iconfont icon-add"></i>
                </div>
                <div className="input">
                  <p><i className="icon iconfont icon-sousuo"></i>
                  <span>搜索</span></p>
                </div>
            </div>
             </header>
             <section>
             <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">我的</div>
                        <div className="swiper-slide">音乐</div>
                        <div className="swiper-slide">发现</div>
                    </div>
                </div> 
             </section>
             <footer><Footer/></footer>
          </div>
  }
  componentDidMount(){
    this.swiper = new Swiper('.swiper-container', {
     
      // loop: true,
      // autoplay: true,
      // on: {
      //     slideChangeTransitionEnd: function(){
      //       console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
      //     },
      //   },
  })
  }
  Click(index){
    console.log(index)
    
  }
}

export default App;
