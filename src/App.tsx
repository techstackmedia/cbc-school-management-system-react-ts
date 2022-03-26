import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navabar";
// import Footer from "./components/Footer/Footer";
// import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />}></Route> */}
          {/* <Route path="/" element={<Footer />}></Route> */}
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
