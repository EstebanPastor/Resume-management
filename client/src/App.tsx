import { useContext } from "react";
import { ThemeContext } from "./context/theme.context"; 
import NavBar from "./components/ui/navbar/NavBar";

function App() {
  const {darkMode}  = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app"

  return (<div className={appStyles}>
    <NavBar />
    <div className="wrapper">

    </div>
  </div>)
}

export default App;
