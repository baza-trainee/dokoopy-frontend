import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout.jsx";

import { Home } from "./pages/Home.jsx";
import { AllProjects } from "./pages/AllProjects.jsx";
import { AdminPanel } from "./pages/AdminPanel.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {   
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="allprojects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
         </Route>
         <Route path="/admin" element={<AdminPanel />}></Route>
      </Routes>
   );
}

export default App;
