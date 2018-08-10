import React, { Component } from 'react'
import { getSongList } from '../api/net.js'
import '../scss/songs.css'
export default class song extends Component {
    constructor(){
        super()
        this.state = {
            list : []
        }
    }
    render() {
        return (
            <div className="song-wrap">
                song
            </div>
        )
    }
    componentDidMount(){
        getSongList()
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                list : json.data.music
            })
        })
    }
}
