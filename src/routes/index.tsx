import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Fragment } from "react";
import DefaultLayout from "~/layouts/DefaultLayout";

function RenderRouter() {
  return (
    <Routes>
      {routes.map((route, index) => {
        let Layout;
        if (route.layout === null) Layout = Fragment;
        else Layout = route.layout || DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default RenderRouter;
