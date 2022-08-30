import React, { useState, useRef } from 'react'

const BodyFunction = (props) => {
    const [text, setText] = useState('Please typee here.....');
    const [count, setCount] = useState(0);
    const [words, setWords] = useState(0);
    const textAreaRef = useRef(null);

    const upperCase = () => {
        let value = text.toUpperCase();
        setText(value);
    }
    const update = (e) => {
        setText(e.target.value);
        setCount(count + 1);
        if (e.nativeEvent.data == " ") {
            setWords(words + 1);
        }
    }
    const lowerCase = () => {
        let value = text.toLowerCase();
        setText(value);
    }
    const clearData = () => {
        setText('');
        setCount(0);
        setWords(0);
    }
    const copyData = (e) => {
        textAreaRef.current.select();
        navigator.clipboard.writeText(text)
    }
    const removeSpaces = () => {
        const taxt1 = text.replace(/\s+/g, ' ').trim();
        setText(taxt1);
    }
    return (
        <div>
            <div className={props.state == "light" ? 'body':'body1'} >
                <div className="conatinall">
                    <div className='container'>
                        <textarea ref={textAreaRef} className={props.state == "dark" ? 'darktext': null}
                         value={text} cols="10" rows="19" onChange={update}></textarea>
                        <div className="buttons" >
                            <button className='btn' onClick={upperCase}>Convert UpperCase</button>
                            <button className='btn' onClick={lowerCase}>Convert LowerCase</button>
                            <button className='btn' onClick={clearData}>Clear</button>
                            <button className='btn' onClick={copyData}>Copy Text</button>
                            <button className='btn' onClick={removeSpaces}>Remove Spaces</button>
                        </div>
                        <div className={props.state == "dark" ? 'summary': null}><h1>Your text summary</h1></div>
                        <div className={props.state == "dark" ? 'summary': null}><b>{words} words and {count} characters </b></div>
                        <div className={props.state == "dark" ? 'preview': null}>
                        <div><h3>Preview</h3></div>
                        <div>{text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BodyFunction