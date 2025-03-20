// components/Map.tsx
"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";

// Importación dinámica
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function Map() {
  const position: LatLngTuple = [1.679869, -75.249297];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    import("leaflet").then((L) => {
      if (typeof window !== "undefined") {
        delete (
          L.Icon.Default.prototype as L.Icon.Default & {
            _getIconUrl?: () => string;
          }
        )._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
      }
    });
  }, []);

  if (!isClient) {
    return <p>Loading map...</p>;
  }

  return (
    <div className="z-1 p-0 m-0">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "93.8vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>¡Un marcador de ejemplo en Colombia!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
