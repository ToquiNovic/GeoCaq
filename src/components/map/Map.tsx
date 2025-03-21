"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { LocateControl, MapControls } from "./controls";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

// Componentes dinámicos de React-Leaflet
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const ZoomControl = dynamic(() => import("react-leaflet").then((mod) => mod.ZoomControl), { ssr: false });
const ScaleControl = dynamic(() => import("react-leaflet").then((mod) => mod.ScaleControl), { ssr: false });

export default function Map() {
  const sidebar = useStore(useSidebar, (x) => x);
  const position: LatLngTuple = [1.679869, -75.249297];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Configurar los íconos por defecto de Leaflet
    delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  if (!sidebar || !isClient) {
    return <p>Loading map...</p>;
  }

  const { getOpenState, settings } = sidebar;
  const isOpen = getOpenState();
  const isDisabled = settings.disabled;

  return (
    <div
      className={cn(
        "relative z-1",
        !isDisabled && isOpen && "md:max-w-[100vw] lg:max-w-[100vw]",
        !isDisabled && !isOpen && "md:max-w-[calc(100%_-_70px)] lg:max-w-[105vw]"
      )}
    >
      {isClient && (
        <MapContainer
          center={position}
          zoom={6}
          className={cn("h-[93.8vh] w-full", isDisabled && "w-full")}
          zoomControl={false}
          maxZoom={18}
          minZoom={8}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>¡Un marcador de ejemplo en Colombia!</Popup>
          </Marker>
          <ZoomControl position="bottomright" />
          <ScaleControl position="bottomleft" metric={true} maxWidth={100} />
          <LocateControl />
        </MapContainer>
      )}

      <div className="absolute top-4 right-4 z-[1000]">
        <MapControls />
      </div>
    </div>
  );
}
