"use client";

import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
      console.log(`Tamaño de pantalla: ${screenSize}, Ancho: ${width}px`);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);

  if (!sidebar) return null;
  const { getOpenState, settings } = sidebar;

  const isOpen = getOpenState();
  const isDisabled = settings.disabled;

  console.log(`isOpen: ${isOpen}, isDisabled: ${isDisabled}, screenSize: ${screenSize}`);

  return (
    <>
    <Sidebar />
    <main
      className={cn(
        "mt-4 min-h-[calc(90vh_-_56px)] bg-red-500 dark:bg-red-900 transition-[margin-left] ease-in-out duration-300 md:ml-4 md:max-w-[calc(102%_-_70px)]",
        !settings?.disabled && (!isOpen ? "lg:ml-[105px] lg:max-w-[93vw]" : "lg:ml-76 lg:max-w-[83vw]")
      )}
    >
      {children}
    </main>
    <footer
      className={cn(
        "transition-[margin-left] ease-in-out duration-300",
        !settings?.disabled && (!isOpen ? "lg:ml-[90px]" : "lg:ml-72")
      )}
    />
  </>
  );
}