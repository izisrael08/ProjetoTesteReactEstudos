import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;