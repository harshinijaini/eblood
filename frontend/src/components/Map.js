import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/map.module.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const location = {
  address: "Friends for Seva Society",
  lat: 15.456892967224121,
  lng: 78.47853088378906,
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB4YgPfQbfjoZ1nkN5vQH9t2Z-_vXHRl8o" }}
          defaultCenter={location}
          defaultZoom={14}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
