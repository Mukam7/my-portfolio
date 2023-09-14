import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsideHeader from "./page/AsideHeader";
import HomeP from "./page/HomeP";
import NotFoundP from "./page/NotFoundP";
import SiteCode from "./page/SiteCode";
import Contact from "./page/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AsideHeader />}>
          <Route path="/" index element={<HomeP />} />
          <Route path="/site-code" index element={<SiteCode />} />
          <Route path="/contact" index element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
