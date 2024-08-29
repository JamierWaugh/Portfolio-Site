import "./Card.css"


function LongTextCard(props) {
    return (
        <div >
            <h1 className = "mainTitle"> {props.maintitle} </h1>
            <h1 className = "mainSub"> {props.sub1} <span className = "mainPara"> {props.date1}</span></h1>
            <p className = "mainPara"> {props.content1}</p>
            <h1 className = "mainSub"> {props.sub2} <span className = "mainPara"> {props.date2}</span></h1>
            <p className = "mainPara"> {props.content2}</p>
            <h1 className = "mainSub"> {props.sub3} <span className = "mainPara"> {props.date3}</span></h1>
            <p className = "mainPara"> {props.content3}</p>

        </div>
    )
}

export default LongTextCard