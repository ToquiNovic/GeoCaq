import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Map, Wrench, List, X, LucideProps } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MenuContent from "./MenuContent";

const menuItems = {
  tools: [
    "Importar datos",
    "Dibujar y medir",
    "Operadores espaciales",
    "Imprimir",
    "Compartir el mapa",
  ],
  legend: ["Simbología", "Categorías", "Escalas"],
  baseMaps: ["Mapa Satelital", "Mapa Topográfico", "Mapa de Calles"],
  layers: ["Capas Activas", "Capas Base", "Capas de Usuario"],
};

const MapControls = () => {
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuItems | null>(
    null
  );

  const toggleMenu = (menu: keyof typeof menuItems) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const renderButton = (
    menu: keyof typeof menuItems,
    Icon: React.ComponentType<LucideProps>,
    label: string
  ) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => toggleMenu(menu)}
            variant="secondary"
            className="rounded-full p-3"
          >
            {activeMenu === menu ? <X size={24} /> : <Icon size={24} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
      {renderButton("tools", Wrench, "Herramientas")}
      {renderButton("legend", List, "Leyenda")}
      {renderButton("baseMaps", Map, "Mapas Base")}
      {renderButton("layers", Layers, "Capas")}

      {activeMenu && (
        <div className="absolute top-0 right-1">
          <MenuContent
            title={activeMenu}
            items={menuItems[activeMenu]}
            onClose={() => setActiveMenu(null)}
          />
        </div>
      )}
    </div>
  );
};

export default MapControls;
