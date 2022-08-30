import react, { Component} from "react";


export default class Bodyclass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            text: "Please type here......."
        }
    }
    update = (e) => {
        this.setState({
            count: this.state.count + 1,
            text: e.target.value
        })
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
        this.state.text.current.select();
        navigator.clipboard.writeText(this.state.text)
    }

    render() {
        const { text, count } = this.state;
        return (
            <div>
                <div className='body'>
                    <div className="conatinall">
                        <div className='container'>
                            <textarea  value={text} cols="10" rows="19" onChange={this.update}></textarea>
                            <div className="buttons" >
                            <button className='btn' onClick={this.upperCase}>Convert UpperCase</button>
                            <button className='btn' onClick={this.lowerCase}>Convert LowerCase</button>
                            <button className='btn' onClick={this.clearData}>Clear</button>
                            <button className='btn' onClick={this.copyData}>Copy Text</button>
                            <div className="counter"><b>Counter : {count} </b></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}