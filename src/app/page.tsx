// app/page.tsx
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Navbar } from "@/components/admin-panel/navbar";
import { Map } from "@/components/map";

export default function HomePage() {
  return (
    <>
      {/* <Navbar />
      <div className="container pt-4 sm:px-6">
        <AdminPanelLayout>
        </AdminPanelLayout>
        </div> */}
        <Map />
    </>
  );
}
