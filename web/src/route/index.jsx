import { useRoutes } from "react-router-dom";
import { SampleView } from "@/view";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <SampleView />,
    },
  ]);
}
