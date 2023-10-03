import axios from "axios";
axios.defaults.baseURL = "https://dokoopy.onrender.com/api/";

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
};

export const AdminApi = {
   loginAdmin(body) {
      return axios.post("auth/admin/login", body);
   },
   logoutAdmin(body) {
      return axios.get("auth/admin/logout", body);
   },

   //Project
   getProjectAdmin() {
      return axios.get("projects/admin");
   },
   addProject(body) {
      return axios.post("project/admin", body);
   },
   updateProject({ id, body }) {
      return axios.put(`project/admin/${id}`, body);
   },
   deleteProject(id) {
      return axios.delete(`projects/admin/${id}`);
   },

   //Bank
   getBankAdmin() {
      return axios.get("bank/admin");
   },
   updateBank(body) {
      return axios.get("bank/admin", body);
   },

   //Heros
   getHerosAdmin() {
      return axios.get("hero/admin");
   },
   addHero(body) {
      return axios.post("hero/admin", body);
   },
   updateHero({ id, body }) {
      return axios.put(`hero/admin/${id}`, body);
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
      return axios.put(`reports/admin/${id}`, body);
   },

   //Contacts
   updateContacts(body) {
      return axios.put("contacts/admin", body);
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
      return axios.put(`partners/admin/${id}`, body);
   },
   deletePartners(id) {
      return axios.delete(`partners/admin/${id}`);
   },
};
