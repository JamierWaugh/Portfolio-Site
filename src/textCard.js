import "./Card.css"

function TextCard(props) {
    return (
        <div>
            <h1 className="mainTitle"> {props.title}</h1>
            <p className="mainPara"> {props.content}</p>
        </div>
    )
}

export default TextCard