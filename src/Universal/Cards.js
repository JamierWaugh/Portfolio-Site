

function Card(props) {
    return (
        <div>
            <h4> {props.title}</h4>
            <p> {props.content}</p>
        </div>
    )
}

export default Card