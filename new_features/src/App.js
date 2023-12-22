import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import AutomaticBatching from "./pages/automatic-batching";
import NewHooks from "./pages/new-hooks";
import ClientServerRendering from "./pages/client-server-rendering";
import StrictMode from "./pages/strict-mode";
import Suspense from "./pages/suspense-features";
import Trasitions from "./pages/transitions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="automatic-batching" element={<AutomaticBatching />} />
          <Route path="new-hooks" element={<NewHooks />} />
          <Route path="client-server" element={<ClientServerRendering />} />
          <Route path="strict-mode" element={<StrictMode />} />
          <Route path="suspense" element={<Suspense />} />
          <Route path="transitions" element={<Trasitions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
