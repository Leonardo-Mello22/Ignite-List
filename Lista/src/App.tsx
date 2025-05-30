import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageComponents } from "./pages/pages-components";
import { LayoutMain } from "./pages/layout-main";
import { PageHome } from "./pages/page-home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
