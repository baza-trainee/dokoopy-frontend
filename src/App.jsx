import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./components/admin-components/PrivateRoute";

import { SharedLayout } from "./components/landing-components/SharedLayout";
import { AdminSharedLayout } from "./components/admin-components/AdminSharedLayout";

import { AllProjects } from "./pages/landing-pages/AllProjects";
import { Home } from "./pages/landing-pages/Home";
import { NotFound } from "./pages/landing-pages/NotFound";

import { LoginLayout } from "../src/components/admin-components/LoginLayout";
import { Login } from "./components/admin-components/Login";
import { ForgetPassword } from "./components/admin-components/ForgetPassword";
import { RenewPassword } from "./components/admin-components/RenewPassword";
import { SuccessfullRenew } from "./components/admin-components/SuccessfullRenew";

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
         <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="renew/*" element={<RenewPassword />} />
            <Route path="successful-renew" element={<SuccessfullRenew />} />
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
         </Route>
         <Route path="admin/*" element={<AdminNotFound />} />
            

         {/* <Route
            path="/admin"
            element={<PrivateRoute redirectTo="/login" component={<AdminSharedLayout />} />}
         >
            <Route index element={<PrivateRoute redirectTo="/login" component={<AdminHero />} />} />
            <Route
               path="add-new-slide"
               element={<PrivateRoute redirectTo="/login" component={<AddSlide />} />}
            />
            <Route
               path="edit/:slideId"
               element={<PrivateRoute redirectTo="/login" component={<EditSlider />} />}
            />
            <Route
               path="projects"
               element={<PrivateRoute redirectTo="/login" component={<AdminProjects />} />}
            />
            <Route
               path="projects/add-new-project"
               element={<PrivateRoute redirectTo="/login" component={<AddProject />} />}
            />
            <Route
               path="projects/edit/:projectId"
               element={<PrivateRoute redirectTo="/login" component={<EditProject />} />}
            />
            <Route
               path="partners"
               element={<PrivateRoute redirectTo="/login" component={<AdminPartners />} />}
            />
            <Route
               path="partners/add-new-partner"
               element={<PrivateRoute redirectTo="/login" component={<AddPartner />} />}
            />
            <Route
               path="partners/edit/:partnerId"
               element={<PrivateRoute redirectTo="/login" component={<EditPartner />} />}
            />
            <Route
               path="contacts"
               element={<PrivateRoute redirectTo="/login" component={<AdminContacts />} />}
            />
            <Route
               path="contacts/edit"
               element={<PrivateRoute redirectTo="/login" component={<EditContact />} />}
            />
            <Route
               path="bank-account"
               element={<PrivateRoute redirectTo="/login" component={<AdminBankAccount />} />}
            />
            <Route
               path="bank-account/edit"
               element={<PrivateRoute redirectTo="/login" component={<EditBankAccount />} />}
            />
            <Route
               path="reporting"
               element={<PrivateRoute redirectTo="/login" component={<AdminReporting />} />}
            />
            <Route
               path="reporting/edit"
               element={<PrivateRoute redirectTo="/login" component={<EditReporting />} />}
            />
            <Route
               path="*"
               element={<PrivateRoute redirectTo="/login" component={<AdminNotFound />} />}
            />
         </Route> */}

      </Routes>
   );
}

export default App;

{
   /* <Route path="/" element={<SharedLayout />}>
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
         </Route> */
}
