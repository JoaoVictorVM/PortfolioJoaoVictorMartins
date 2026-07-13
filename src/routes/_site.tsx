import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}
