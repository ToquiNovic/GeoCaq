// app/page.tsx
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Map } from "@/components/map";

export default function HomePage() {
  return (
    <ContentLayout title="Visor">
        <Map />
    </ContentLayout>
  );
}
