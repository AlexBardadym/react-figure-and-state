import React, { Component } from 'react';
import './block.css';



class Block extends Component {
    render() {
        return (
            <div className="block" style={this.props.figure}></div>
        )
    }
}

export default Block;