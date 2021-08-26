import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox';


// define constants
const NATURAL_EVENT_WILDFIRE = 10;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo]=useState(null)

    const [isToggle, setToggle]=useState(false);

    const handleClick = ()=>{
        setToggle(!isToggle)
    }

    const onClick1= (ev) =>{
        setLocationInfo({ id: ev.id, title: ev.title })
        setToggle(false);
    }
    
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            // return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=> {setLocationInfo({ id: ev.id, title: ev.title })} } />

            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=> {onClick1(ev)}} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAhySc8IPjHamrws-V0wKbszfDjfWWaxLw' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && !isToggle && <LocationInfoBox info={locationInfo}  onDelete={handleClick} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 2
}

export default Map