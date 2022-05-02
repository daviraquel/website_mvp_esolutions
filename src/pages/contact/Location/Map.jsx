import React from "react";

import { MapContainer } from "./Location.styled";

export const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=R.%20Crist%C3%B3v%C3%A3o%20Nunes%20P%C3%ADres,%20110%20-%20Centro,%20Florian%C3%B3polis%20-%20SC,%2088010-120&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </MapContainer>
  );
};
