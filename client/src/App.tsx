import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/navbar/NavBar";
import CustomLinearProgress from "./components/ui/linear-progress/CustomLinearProgress";

const Home = lazy(() => import("./pages/home/Home"));
const Companies = lazy(() => import("./pages/companies/Companies"));

function App() {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <NavBar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Companies />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
