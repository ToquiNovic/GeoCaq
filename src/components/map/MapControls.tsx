import { Button } from "@/components/ui/button";
import { Layers, Map, Wrench, List } from "lucide-react";

const MapControls = () => {
  const handleAlert = (message: string) => {
    alert(message);
  };

  return (
    <div className="absolute top-4 right-4 space-y-2 z-10">
      <Button
        onClick={() => handleAlert("Herramientas")}
        variant="secondary"
        className="rounded-full p-3"
      >
        <Wrench size={24} />
      </Button>
      <Button
        onClick={() => handleAlert("Leyenda")}
        variant="secondary"
        className="rounded-full p-3"
      >
        <List size={24} />
      </Button>
      <Button
        onClick={() => handleAlert("Mapas Base")}
        variant="secondary"
        className="rounded-full p-3"
      >
        <Map size={24} />
      </Button>
      <Button
        onClick={() => handleAlert("Capas")}
        variant="secondary"
        className="rounded-full p-3"
      >
        <Layers size={24} />
      </Button>
    </div>
  );
};

export default MapControls;
