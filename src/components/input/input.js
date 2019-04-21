import React, { Component } from 'react';
import './input.scss';



class Input extends Component {
    state = {
        isChecked: false,
        textStyle: {
            color: "black",
        },
        inputValue: "This input unchecked"
    }

    makeChecked = () => {
        if (this.state.isChecked === false) {
            this.setState({
                isChecked: true,
                inputValue: "Checked input",
                textStyle: {
                    color: "green",
                    textDecorationLine: "line-through"
                }
            })
        } else {
            this.setState({
                isChecked: false,
                textStyle: {
                    color: "black"
                },
                inputValue: "This input unchecked"
            })
        }
    }

    render() {
        const { textStyle, inputValue } = this.state;
        return (
            <div style={textStyle}>
                <input
                    type="checkbox"
                    id="inputComponent"
                    onChange={this.makeChecked} >
                </input>
                {inputValue}
            </div>

        )
    }
}

export default Input;