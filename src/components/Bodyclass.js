import React from "react";
import { Component } from "react";


export default class Bodyclass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            text: "Please type here.......",
            word: 0
        }
        this.inputref = React.createRef()
    }
    update = (e) => {
        if (e.nativeEvent.data === " ") {
            this.setState({
                count: this.state.count + 1,
                text: e.target.value,
                word: this.state.word + 1
            })
        } else {
            this.setState({
                count: this.state.count + 1,
                text: e.target.value,
            })
        }
    }
    upperCase = () => {
        let value = this.state.text.toUpperCase();
        this.setState({
            text: value
        })
    }
    lowerCase = () => {
        let value = this.state.text.toLowerCase();
        this.setState({
            text: value
        })
    }
    clearData = () => {
        this.setState({
            text: ''
        })
    }
    copyData = () => {
        this.inputref.current.select();
        navigator.clipboard.writeText(this.state.text)
        this.inputref.current.focus();
        console.log(this.inputref)
    }
    removeSpaces = () => {
        const taxt1 = this.state.text.replace(/\s+/g, ' ').trim();
        this.setState({
            text: taxt1
        })
    }

    render() {
        const { text, count, word } = this.state;
        return (
            <div>
                <div className={this.props.state === "light" ? 'body':'body1'}>
                    <div className="conatinall">
                        <div className='container'>
                            <textarea ref={this.inputref} className={this.props.state === "dark" ? 'darktext': null}
                            value={text} cols="10" rows="19" onChange={this.update}></textarea>
                            <div className="buttons" >
                                <button className='btn' onClick={this.upperCase}>Convert UpperCase</button>
                                <button className='btn' onClick={this.lowerCase}>Convert LowerCase</button>
                                <button className='btn' onClick={this.clearData}>Clear</button>
                                <button className='btn' onClick={this.copyData}>Copy Text</button>
                                <button className='btn' onClick={this.removeSpaces}>Remove ExtraSpaces</button>
                            </div>
                            <div className={this.props.state === "dark" ? 'summary' : null}><h1>Your text summary</h1></div>
                            <div className={this.props.state === "dark" ? 'summary' : null}><b>{word} words and {count} characters </b></div>
                            <div className={this.props.state === "dark" ? 'preview' : null}>
                                <div><h3>Preview</h3></div>
                                <div>{text}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}