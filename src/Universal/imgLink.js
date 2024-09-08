function ImgLink(props) {
    return (
        <a href = {props.refer} target = "_blank" rel="noreferrer">
        <div>
            <img src={props.source} width = {props.width} height = {props.height} alt = {props.altText}></img>
            <h2> {props.title}</h2>
            <p className = "altPara"> {props.main}</p>
        </div>
        </a>
    )
}

export default ImgLink