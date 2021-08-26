
import { Icon } from "@iconify/react";


const LocationInfoBox = ({ info, onDelete }) => {

    
  return (
    
      
        <div className="location-info">
      <div className="info-header">
        <h2>Event Location info</h2>
        
        <Icon className="close-btn" icon="ant-design:close-circle-outlined" onClick={()=>onDelete()} />
      </div>

      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>

  );
}


export default LocationInfoBox;
