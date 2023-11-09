import { GoogleMap } from "@react-google-maps/api";
import { useRef, useCallback, useState, useEffect } from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import { getAllMarkers, addMarker } from "../../Firebase/api-operations";
import css from "./Map.module.css";

const containerStyle = {
  width: "90vw",
  height: "90vh",
};

const defaultLocation = {
  lat: 49.842957,
  lng: 24.031111,
};

const Map = () => {
  const mapRef = useRef(undefined);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const markersData = await getAllMarkers();
      setMarkers(markersData);
    };

    fetchData();
  }, []);

  const onHandleClick = async (e) => {
    const newPosition = {
      label: String(markers.length + 1),
      location: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    };
    setMarkers((prevState) => {
      return [...prevState, newPosition];
    });

    addMarker(newPosition);
  };

  // const convertFbTimeToReal = (fbTime) => {
  //   const realTime = (fbTime.seconds + fbTime.nanoseconds / 1000000000) * 1000;
  //   const currentdate = new Date(realTime).toString();
  //   return currentdate;
  // };

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={css.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultLocation}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onHandleClick}
      >
        {markers.map(({ location, label, createdAt }) => {
          // const currentDate = convertFbTimeToReal(createdAt);

          return (
            <MarkerF key={label} position={location} label={label}></MarkerF>
          );
        })}
      </GoogleMap>
    </div>
  );
};

export { Map };
