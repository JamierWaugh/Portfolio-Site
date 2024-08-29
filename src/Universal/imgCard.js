

function ImgCard(props) {
    return (
        <div>
            <a href = "#"><img src={props.source} width = "150px" height = "150px" alt = {props.altText}></img></a>
        </div>
    )
}

export default ImgCard