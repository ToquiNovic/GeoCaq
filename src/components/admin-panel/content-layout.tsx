import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function ContentLayout({ title, icon, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} icon={icon} />
      {children}
    </div>
  );
}
