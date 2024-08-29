import "./Card.css"

function RepeatImgCard(props) {
    return (
        <div>
            <h1 className="mainTitle"> {props.title}</h1>
            <div className = "flexImage">
                <img src={props.img1} width ="25px" height = "25px" alt= {props.alt1}></img>
                <img src={props.img2} width ="25px" height = "25px" alt= {props.alt2}></img>
                <img src={props.img3} width ="25px" height = "25px" alt= {props.alt3}></img>
                <img src={props.img4} width ="25px" height = "25px" alt= {props.alt4}></img>
                <img src={props.img5} width ="25px" height = "25px" alt= {props.alt5}></img>
            </div>
        </div>
    )
}

export default RepeatImgCard