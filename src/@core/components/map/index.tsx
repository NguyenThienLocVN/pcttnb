import * as React from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReactLeafletKml from 'react-leaflet-kml';

export default function Map({regionCoord}:any ) {

  console.log(regionCoord)

  const [kml, setKml] = React.useState<any | null>(null);

  const [map, setMap] = React.useState<any | null>(null);

  const [regCoord, setRegCoord] = React.useState<any | null>([20.246403, 105.967898]);
  
  React.useEffect(() => {

    setRegCoord(regionCoord);

    fetch(
      "/kml/song_nb.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);
  
  map?.flyTo([14,104], 11);

  return (
    <>
    <MapContainer whenReady={() => setMap} center={regCoord} zoom={10} style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kml && <ReactLeafletKml kml={kml} />}
    </MapContainer>
    </>
  );
}