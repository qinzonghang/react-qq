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
import Song from './components/songs.jsx'

import Footer from './components/footer.jsx'

import './font/iconfont.css'

import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

//引入store使用redux
import Store from './redux/store.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: ["推荐", "音乐馆", "发现"],
      mySwiper: null
    }
  }
  render() {
    let n = Store.getState().options;
    return <Router>

      <div className="router">
        <Route exact path="/" render={() => {
          return <Redirect to="/t" />
        }} />

        <Route path='/t' render={() => {
          return <div className="App">
            <header>
              <div className="header-wrap">
                <div className="top">
                  <i className="icon iconfont icon-filter-"></i>
                  <div className="options">{
                    this.state.options.map((item, index) => {
                      return <span key={index} className={index == n ? "active lick" : "click"} onClick={() => { this.Click(index) }}>{item}</span>
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
              <div className="swiper-container App-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <My />
                  </div>
                  <div className="swiper-slide">
                    <Music />
                  </div>
                  <div className="swiper-slide">
                    <Find />
                  </div>
                </div>
              </div>
            </section>
            <footer><Footer /></footer>
          </div>
        }} />
        {/* 跳转后的页面 */}
        <Route path="/song" component={Song} />
      </div>

    </Router>
  }
  componentDidMount() {
    this.mySwiper = new Swiper('.App-swiper', {
      on: {
        slideChangeTransitionEnd: function () {
          //console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          Store.dispatch({ //redux更新数据
            type: "options",
            n: this.activeIndex
          })
        }
      }
    })
    this.mySwiper.slideTo(1, 0, false);
  }
  Click(index) {
    this.mySwiper.slideTo(index, 1000, false)

    Store.dispatch({ //redux更新数据
      type: "options",
      n: index
    })
  }
}


export default App;
