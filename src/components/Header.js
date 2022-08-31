import {React,useState} from 'react'
const Header = ({state,setState}) => {
    const [btntext, setBtntext] = useState("Enable DarkMode");


    let dark = true;
const changeTheme = () =>{
        if(dark === true && state ==="light"){
            let a =document.getElementById("header");
            a.style.backgroundColor = "rgb(21, 20, 20)";
            setState("dark");
            dark = false;
        }else{
             let a = document.getElementById("header");
            a.style.backgroundColor = "rgb(217 206 206)";
            // a.classList.add("header");
            // a.classList.remove("header1");
            setState("light");
            dark = true;
        }
    }

    return (
        <div className='header' id='header'>
            <div className='logo'>
                <div><i className="fa-solid fa-spell-check"></i></div>
                <div><a><h3>Textify</h3></a></div>
            </div>
            <div id="login">
                <div>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round" onClick={changeTheme}></span>
                    </label>
                </div>
                <div>{btntext}</div>
            </div>
        </div>
    )
}
export default Header