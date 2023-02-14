import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/components/Routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((publicRoute, index) => {
            const Page = publicRoute.element
            let Layout = publicRoute.layout ?? DefaultLayout;
            if (publicRoute.layout === null) {
              Layout = Fragment;
            }

            return <Route key={index} path={publicRoute.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
