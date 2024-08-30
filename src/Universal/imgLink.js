function ImgLink(props) {
    return (
        <a href = {props.refer} target = "_blank">
        <div>
            <img src={props.source} width = {props.width} height = {props.height} alt = {props.altText}></img>
        </div>
        </a>
    )
}

export default ImgLink