import React, { Component } from 'react'
import { getMusicList } from '../api/net.js'
import '../scss/music.css'

export default class music extends Component {
    constructor(){
        super()
        this.state = {
            list : []
        }
    }
    render() {
        return (
            <div className="music-wrap">
                {
                    this.state.list.map((item,index)=>{
                        return <div className="children" key={index}>
                          <div className="imgs"><img src={item.picUrl}/></div>
                          <div className="songer-box">
                            <div className="songer">
                                   <div className="topTitle">{item.topTitle}</div>{
                                       item.songList.map((value,key)=>{
                                           return <div className="songlister" key={key}>
                                              <b>{key+1}</b>
                                              <span className="songname">{value.songname}</span>
                                              <span className="concat">--</span>
                                              <span className="singername">{value.singername}</span>
                                           </div>
                                       })
                                   }
                                
                            </div>
                            <i className="icon iconfont icon-arrow-right-1"></i>
                          </div>
                        </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        getMusicList()
        .then(res=>res.json())
        .then(json=>{
            console.log('------json',json)
            this.setState({
                list : json.data.topList
            })
        })
    }
}
