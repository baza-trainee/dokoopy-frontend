import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout.jsx";
import { AdminSharedLayout } from "./components/admin-components/AdminSharedLayout.jsx";

import { Home } from "./pages/landing-pages/Home.jsx";
import { AllProjects } from "./pages/landing-pages/AllProjects.jsx";
import { NotFound } from "./pages/landing-pages/NotFound.jsx";

import { AdminHero } from "./pages/admin-pages/AdminHero.jsx";
import { AdminProjects } from "./pages/admin-pages/AdminProjects.jsx";
import { AdminPartners } from "./pages/admin-pages/AdminPartners.jsx";
import { AdminContacts } from "./pages/admin-pages/AdminContacts.jsx";
import { AdminBankAccount } from "./pages/admin-pages/AdminBankAccount.jsx";
import { AdminReporting } from "./pages/admin-pages/AdminReporting.jsx";
import { AdminNotFound } from "./pages/admin-pages/AdminNotFound.jsx";

import { Modal } from "./components/Modal.jsx";

function App() {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="allprojects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
         </Route>
         <Route path="/admin" element={<AdminSharedLayout />}>
            <Route index element={<AdminHero />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="bank-account" element={<AdminBankAccount />} />
            <Route path="reporting" element={<AdminReporting />} />
            <Route path="*" element={<AdminNotFound />} />
         </Route>
      </Routes>
   );
}

export default App;
