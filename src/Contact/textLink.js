import {CopyText} from "./clipboardCopy";
import clipboard from "../assets/clipboard2.png"


function TextLink(props){
    return (
        <div>
        <a href = "mailto:jamierwaugh@gmail.com"><p> {props.email} </p></a>
        <button onClick = {CopyText}><img src = {clipboard} alt = "Button to allow for copying my email"></img></button>
        </div>
    )
}

export default TextLink