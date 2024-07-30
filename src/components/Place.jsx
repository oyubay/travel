export default function Place(props){
    return(
        <div className="place-container">
            <img className="place--image" src={props.place.img} alt=""/>
            <div className="place--info">
                <span className="place--loc">{props.place.name}
                    <img className="place--loc--icon" src="/images/locationicon.png" alt=""/>
                    {props.place.location}</span>
                <h1>{props.place.title}</h1>
                <span className="place--date">{props.place.date}</span>
                <span className="place--description">
                    {props.place.description}
                </span>
                <hr/>
            </div>

        </div>
    )
}
