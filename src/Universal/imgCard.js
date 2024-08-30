

function ImgCard(props) {
    return (
        <div>
            <a href = {props.linkTo}><img src={props.source} width = {props.width} height = {props.height} alt = {props.altText}></img></a>
        </div>
    )
}

export default ImgCard