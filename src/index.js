import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Get from "./pages/Ver";
import Post from "./pages/Criar";
import Edit from "./pages/Editar";
import Del from "./pages/Del";
import NoPage from "./NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Get" element={<Get />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Editar/:barra/:id" element={<Edit />} />
          <Route path="/Deletar/:barra/:id" element={<Del />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);