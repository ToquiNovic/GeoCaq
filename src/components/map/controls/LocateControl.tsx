// components/map/controls/LocateControl.tsx
import { useMap } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Locate, LoaderCircle, X } from "lucide-react";

const LocateControl = () => {
  const map = useMap();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      setError("La geolocalización no está soportada en este navegador.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.flyTo([latitude, longitude], 14);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  };

  return (
    <div className="absolute bottom-25 right-3 z-[1000] space-y-1.5">
      <Button onClick={handleLocate} size="icon" disabled={loading}>
        {loading ? <LoaderCircle className="animate-spin" /> : <Locate />}
      </Button>
      {error && (
        <div className="flex items-center gap-2 bg-red-100 text-red-600 p-2 rounded-lg shadow">
          <X className="cursor-pointer" onClick={() => setError(null)} />
          {error}
        </div>
      )}
    </div>
  );
};

export default LocateControl;
