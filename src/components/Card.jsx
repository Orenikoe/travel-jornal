
import pinMap from "../images/location-pin.png";


export default function Card(props) {
  console.log(props.item)
  
  
    return (
      <div className="card">
      
      <img alt={props.title} src={props.imageUrl} className="card-pic" />
      <div className="card-details">
        <div className="card-location-bar">
        <img className="location-pin" alt="" src={pinMap}/>
        <span className="grey-font location-country">{props.location} || </span>
        <a href={props.googleMapsUrl}>View on google maps</a>
        </div>
         <div className="location-title">
          <h1>{props.title}</h1>
         </div>
         <div className="travel-dates">
        <p>{props.startDate} - {props.endDate}</p>
      </div>
      <div className="card-description">
        <p>{props.description}</p>
      </div>
      
      {/* <br></br> */}
      </div>
  
    </div>
    );
  }