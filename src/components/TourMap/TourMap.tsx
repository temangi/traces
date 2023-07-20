import React, { useEffect, useState } from "react";
import scss from "./TourMap.module.scss";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export interface Coordinates {
  width: string | string[] | undefined;
  longitude: string | string[] | undefined;
}

const Map: React.FC<Coordinates> = ({ width, longitude }) => {
  const apiKey = "AIzaSyAbZbYh50zF5JfJds-QfBC-Ymzpu9KN4eQ";
  const [showMarker, setShowMarker] = useState(false);
  const marker = { lat: Number(width), lng: Number(longitude) };
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMarker(true);
    }, 1000);
  }, []);

  if (!isLoaded) return <div>..LOADING</div>;
  return (
    <section className={scss.map}>
      <div className="container">
        <p className={scss.map__title}>Map</p>
        <GoogleMap
          mapContainerClassName="map"
          center={{ lat: 41.481952987724895, lng: 74.80065312025594 }}
          zoom={windowSize.width < 620 ? 6 : 7}
        >
          {showMarker && (
            <Marker
              position={
                marker
                  ? marker
                  : { lat: 41.481952987724895, lng: 74.80065312025594 }
              }
            />
          )}
        </GoogleMap>
      </div>
    </section>
  );
};

export default Map;
