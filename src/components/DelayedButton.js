// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {

    handleClick = () =>{
        setTimeout(this.props.onDelayedClick, this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={handleClick}>
                </button>
            </div>
        )
    }
}

export default DelayedButton
