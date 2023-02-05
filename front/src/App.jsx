
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{} from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  let back = {url: "http://localhost:3000/Dibujos",}
  // let [selectedBack, setSelectedBack] = useState(true);

  return (
    <BrowserRouter>
      <Header back={back} />
      <Routes>
      <Route path="/Home" element={<Home/>}  back={back}  />
      <Route path="/Contact" element={<Contact/>}  back={back} />
      <Route path="/About" element={<About/>}  back={back}  />
      </Routes>
      <Footer back={back} />
    </BrowserRouter>
  );
}

export default App;
