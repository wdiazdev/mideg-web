import React, { Component } from 'react'

class BannerContact extends Component {
    render() {
        return (
            <div className='contact--banner--img'>
                <div className='contact--heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default BannerContact