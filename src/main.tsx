import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router";
import MainPageView from "./lib/pages/main_page/main_page_view";
import ModelGeneratorView from "./lib/pages/model_generator/model_generator_view";
import PanelLoginView from "./lib/pages/panel_login/panel_login_view";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<MainPageView />} />
      <Route path="/model-generator" element={<ModelGeneratorView />} />
      <Route path="/admin" element={<PanelLoginView />} />
    </Routes>
  </BrowserRouter>
);
