import * as React from "react";
import { MapContainer, TileLayer, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReactLeafletKml from 'react-leaflet-kml';
import { BingLayer } from '../bingmap';

const { BaseLayer, Overlay } = LayersControl;

export default function Map() {

  const [kml, setKml] = React.useState<any | null>(null);

  const [map, setMap] = React.useState<any | null>(null);
  
  React.useEffect(() => {

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

  const bing_key = "AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L"
  return (
    <>
    <MapContainer whenReady={() => setMap} center={[20.246403, 105.967898]} zoom={9} style={{ height: '100%' }}>
      <LayersControl position='topright'>
        <BaseLayer name='Bản đồ hành chính'>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </BaseLayer>
        <BaseLayer checked name='Bản đồ đường'>
          <BingLayer  bingkey={bing_key} type="Road"/>
        </BaseLayer>
        <BaseLayer name='Bản đồ vệ tinh'>
          <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
        </BaseLayer>
      </LayersControl>
      {kml && <ReactLeafletKml kml={kml} />}
    </MapContainer>
    </>
  );
}