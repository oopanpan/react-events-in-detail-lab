// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {


    handleClick = (e) =>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton
