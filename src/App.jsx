import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout.jsx";

import { Home } from "./pages/Home.jsx";
import { AllProjects } from "./pages/AllProjects.jsx";
import { NotFound } from "./pages/NotFound.jsx";

import { Modal } from "./components/Modal.jsx";

function App() {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="allprojects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
   );
}

export default App;
