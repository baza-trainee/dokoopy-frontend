import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/landing-components/SharedLayout";
import { AdminSharedLayout } from "./components/admin-components/AdminSharedLayout";

import { AllProjects } from "./pages/landing-pages/AllProjects";
import { Home } from "./pages/landing-pages/Home";
import { NotFound } from "./pages/landing-pages/NotFound";

import { AdminBankAccount } from "./pages/admin-pages/AdminBankAccount";
import { AdminContacts } from "./pages/admin-pages/AdminContacts";
import { AdminHero } from "./pages/admin-pages/AdminHero";
import { AdminNotFound } from "./pages/admin-pages/AdminNotFound";
import { AdminPartners } from "./pages/admin-pages/AdminPartners";
import { AdminProjects } from "./pages/admin-pages/AdminProjects";
import { AdminReporting } from "./pages/admin-pages/AdminReporting";

function App() {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="allprojects/:id" element={<AllProjects />} />
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
