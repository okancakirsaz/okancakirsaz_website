import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router";
import MainPageView from "./lib/pages/main_page/main_page_view";
import ModelGeneratorView from "./lib/pages/model_generator/model_generator_view";
import PanelLoginView from "./lib/pages/panel_login/panel_login_view";
import PanelBaseView from "./lib/pages/panel/base/panel_base_view";
import BustedView from "./lib/pages/panel/busted/busted_view";
import { ApplicationManager } from "./application_manager";

await new ApplicationManager().init();
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<MainPageView />} />
      <Route path="/model-generator" element={<ModelGeneratorView />} />
      <Route path="/admin" element={<PanelLoginView />} />
      <Route path="/admin-panel" element={<PanelBaseView />} />
      <Route path="/busted" element={<BustedView />} />
    </Routes>
  </BrowserRouter>
);
