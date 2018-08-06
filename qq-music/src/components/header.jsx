import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route
} from 'react-router-dom'

import '../scss/header.css'
import '../font/iconfont.css'


export default class header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <div className="top">
                    <i className="icon iconfont icon-filter-"></i>
                    <div className="options">
                      <Link className="link" to="/s/my">我的</Link>
                      <Link className="link" to="/s/music">音乐馆</Link>
                      <Link className="link" to="/s/find">发现</Link>
                    </div>
                    <i className="icon iconadd iconfont icon-add"></i>
                </div>
                <div className="input">
                  <p><i className="icon iconfont icon-sousuo"></i>
                  <span>搜索</span></p>
                </div>
            </div>
        )
    }
}
