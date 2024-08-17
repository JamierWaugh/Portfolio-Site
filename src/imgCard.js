import "./Card.css"

function ImgCard(props) {
    return (
        <div>
            <a href = "#"><img src={props.source} width = "150px" height = "150px" alt = "Sand simulation"></img></a>
        </div>
    )
}

export default ImgCard