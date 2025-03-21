import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavbarProps {
  title?: string;
  icon?: React.ReactNode;
}

export function Navbar({ title, icon }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          {/* Logo y título */}
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            <h1 className="font-bold text-lg">{title}</h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/dashboard" passHref>
            <Button>Ir a Dashboard</Button>
          </Link>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
