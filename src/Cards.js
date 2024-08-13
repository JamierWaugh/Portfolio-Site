import "./Card.css"

function Card(props) {
    return (
        <div className = "box">
            <h3> {props.title}</h3>
            <p> {props.content}</p>
        </div>
    )
}

export default Card