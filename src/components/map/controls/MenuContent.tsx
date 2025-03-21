// components/map/controls/MenuContent.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface MenuContentProps {
  title: string;
  items: string[];
  onClose: () => void;
}

export const MenuContent: React.FC<MenuContentProps> = ({ title, items, onClose }) => {
  return (
    <Card className="w-64 shadow-lg absolute top-0 right-16">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <ScrollArea className="h-48">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700 bg-gray-100 p-2 rounded-md">
                {item}
              </li>
            ))}
          </ul>
        </ScrollArea>
        <Button onClick={onClose} className="mt-4 w-full">
          Cerrar
        </Button>
      </CardContent>
    </Card>
  );
};
