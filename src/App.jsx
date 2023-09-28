import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/landing-components/SharedLayout";
import { AdminSharedLayout } from "./components/admin-components/AdminSharedLayout";

import { AllProjects } from "./pages/landing-pages/AllProjects";
import { Home } from "./pages/landing-pages/Home";
import { NotFound } from "./pages/landing-pages/NotFound";

import { AdminBankAccount } from "./pages/admin-pages/AdminBankAccount";
import { AdminContacts } from "./pages/admin-pages/AdminContacts";
import { AdminHero } from "./pages/admin-pages/AdminSlider";
import { AdminNotFound } from "./pages/admin-pages/AdminNotFound";
import { AdminPartners } from "./pages/admin-pages/AdminPartners";
import { AdminProjects } from "./pages/admin-pages/AdminProjects";
import { AdminReporting } from "./pages/admin-pages/AdminReporting";

import { AddSlide } from "./pages/admin-pages/addNew/AddSlide";
import { AddProject } from "./pages/admin-pages/addNew/AddProject";
import { AddPartner } from "./pages/admin-pages/addNew/AddPartner";

import { EditSlider } from "./pages/admin-pages/editPage/EditSlider";
import { EditProject } from "./pages/admin-pages/editPage/EditProject";
import { EditPartner } from "./pages/admin-pages/editPage/EditPartner";
import { EditContact } from "./pages/admin-pages/editPage/EditContact";
import { EditBankAccount } from "./pages/admin-pages/editPage/EditBankAccount";
import { EditReporting } from "./pages/admin-pages/editPage/EditReporting";

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
            <Route path="add-new-slide" element={<AddSlide />} />
            <Route path="edit/:slideId" element={<EditSlider />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="projects/add-new-project" element={<AddProject />} />
            <Route path="projects/edit/:projectId" element={<EditProject />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="partners/add-new-partner" element={<AddPartner />} />
            <Route path="partners/edit/:partnerId" element={<EditPartner />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="contacts/edit" element={<EditContact />} />
            <Route path="bank-account" element={<AdminBankAccount />} />
            <Route path="bank-account/edit" element={<EditBankAccount />} />
            <Route path="reporting" element={<AdminReporting />} />
            <Route path="reporting/edit" element={<EditReporting />} />
            <Route path="*" element={<AdminNotFound />} />
         </Route>
      </Routes>
   );
}

export default App;
