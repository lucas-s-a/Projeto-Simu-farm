import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ini from "./paginasweb/Inic";
import Pget from "./paginasweb/Pget"
import NoPage from "./paginasweb/NoPage";
import Ppost from "./paginasweb/Ppost"

export default function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Ini />}/>
          <Route path="/PagGet" element={<Pget />} />
          <Route path="Medicamentos/PagPost" element={<Ppost />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//<Route path="PagPut" element={<Pput />} />
//<Route path="PagDel" element={<Pdel />} />
//<Route path="/PagGet" element={<Pget />} />