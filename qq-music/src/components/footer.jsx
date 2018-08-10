import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class footer extends Component {
    constructor(props) {
        super(props)
        //this.context.router;
        this.state = {
            list: []
        }
    }
    render() {
        return (

            <Link to={{
                pathname: '/song'//跳转页面
            }}>
                <div className="footer-wrap">
                    footer
                </div>
            </Link>


        )
    }

}
