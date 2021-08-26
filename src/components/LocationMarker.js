import { Icon } from "@iconify/react";

const LocationMarker = ({ onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon="ic:baseline-storm" className="location-icon" />
    </div>
  );
};

export default LocationMarker;
