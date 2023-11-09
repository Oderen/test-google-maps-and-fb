import { Map } from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_API_KEY_GL;

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return (
    <>
      <h1 className="title">Test Asignment</h1>
      {isLoaded ? <Map /> : <h2 className="loader">Loadding...</h2>}
    </>
  );
};

export default App;
