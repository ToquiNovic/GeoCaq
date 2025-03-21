"use client";

import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);

  if (!sidebar) return null;
  const { getOpenState, settings } = sidebar;

  const isOpen = getOpenState();

  return (
    <>
    <Sidebar />
    <main
      className={cn(
        "min-h-[calc(106vh_-_55px)] transition-[margin-left] ease-in-out duration-300 md:ml-4 md:max-w-[calc(102%_-_70px)]",
        !settings?.disabled && (!isOpen ? "lg:ml-23 lg:max-w-[96vw]" : "lg:ml-72 lg:max-w-[90vw]")
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