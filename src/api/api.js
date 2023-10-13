import axios from "axios";
axios.defaults.baseURL = "https://dokoopy.onrender.com/api/";
const token = localStorage.getItem("token");

export const lendingData = {
   getHero() {
      return axios.get("hero");
   },
   getProject() {
      return axios.get("projects");
   },
   getBank() {
      return axios.get("bank");
   },
   getPartners() {
      return axios.get("partners");
   },
   getContact() {
      return axios.get("contacts");
   },
   getReport() {
      return axios.get("reports");
   },
};

export const AdminApi = {
   loginAdmin(body) {
      return axios.post("auth/admin/login", body, {
         headers: {
            "Content-Type": "application/json",
         },
      });
   },
   logoutAdmin(body) {
      return axios.get("auth/admin/logout", body);
   },

   resetPasswordAdmin(resetToken, body) {
   return axios.post(`auth/admin/reset-password/${resetToken}`, body, {
         headers: {
            "Content-Type": "application/json",
         },
      });
   },

   //Project
   getProjectAdmin() {
      return axios.get("projects/admin");
   },
   addProject(body) {
      return axios.post("projects/admin", body);
   },
   updateProject({ id, body }) {
      return axios.patch(`projects/admin/${id}`, body);
   },
   deleteProject(id) {
      return axios.delete(`projects/admin/${id}`);
   },

   //Bank
   getBankAdmin() {
      return axios.get("bank/admin");
   },
   updateBank(body) {
      return axios.patch("bank/admin", body);
   },

   //Heros
   getHerosAdmin() {
      return axios.get("hero/admin");
   },
   addHero(body) {
      return axios.post("hero/admin", body);
   },
   updateHero({ id, body }) {
      return axios.patch(`hero/admin/${id}`, body);
   },
   deleteHero(id) {
      return axios.delete(`hero/admin/${id}`);
   },

   //Reports
   addReports(body) {
      return axios.post("reports/admin", body);
   },
   getReportsAdmin() {
      return axios.get("reports/admin");
   },
   updateReports({ id, body }) {
      return axios.patch(`reports/admin/${id}`, body);
   },

   //Contacts
   updateContacts(body) {
      return axios.patch("contacts/admin", body);
   },
   getContactsAdmin() {
      return axios.get("contacts/admin");
   },

   //Partners
   addPartners(body) {
      return axios.post("partners/admin", body);
   },
   getPartnersAdmin() {
      return axios.get("partners/admin");
   },
   updatePartners({ id, body }) {
      return axios.patch(`partners/admin/${id}`, body);
   },
   deletePartners(id) {
      return axios.delete(`partners/admin/${id}`);
   },
};
