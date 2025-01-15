import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router";
import MainPageView from "./lib/pages/main_page/main_page_view";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<MainPageView />} />
    </Routes>
  </BrowserRouter>
);
