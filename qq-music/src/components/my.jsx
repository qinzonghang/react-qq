import React, { Component } from 'react'
import Store from '../redux/store.js'
import { getRecommendList } from '../api/net.js'
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import '../scss/recomment.css'
export default class my extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            list : {}
        }
    }
    componentDidMount(){
       getRecommendList() // 请求数据
       .then(res=>res.json())
       .then(json=>{
           this.setState({
               list : json.data
           } , ()=>{
             this.swiper= new Swiper('.mySwipers',{
                autoplay: {
                    delay: 2000,//1秒切换一次
                  },
                pagination: {
                    el: '.swiper-pagination',
                  },
            })
           })
       })
    }
    render() {
        return  <div className="my-wrap">
                 <div className="swiper-container mySwipers swiper">
                    <div className="swiper-wrapper">{
                       this.state.list.slider && this.state.list.slider.map((item,index)=>{
                           //console.log('----item',item)
                           return <div className="swiper-slide" key={index}>
                             <img src={item.picUrl}/>
                           </div>
                       })
                      }</div>
                      <div className="swiper-pagination"></div>
                  </div>
                  <div className="song">
                    <p>电台</p>
                    <div className="childrens">
                       {
                           this.state.list.radioList && this.state.list.radioList.map((value,key)=>{
                               return <div className="children" key={key}>
                                 <div className="img"><img src={value.picUrl}/>
                                 <i className="icon iconfont icon-bofang"></i>
                                 </div>
                                 <span>{value.Ftitle}</span>
                               </div>
                           })
                       }
                    </div>
                  </div>
                 </div>
        
    }
}
