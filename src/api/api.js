import axios from "axios";
// axios.defaults.baseURL = "https://dokoopy.onrender.com/api/";
// axios.defaults.baseURL = "http://185.65.246.252:3000/api/";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
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
   setToken(token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   },
   getCurrentAdmin(body) {
      return axios.get(`auth/admin/current`, body);
   },
   loginAdmin(body) {
      return axios.post("auth/admin/login", body);
   },
   logoutAdmin(body) {
      return axios.post("auth/admin/logout", body);
   },

   resetPasswordAdmin(resetToken, body) {
      return axios.post(`auth/admin/reset-password/${resetToken}`, body);
   },
   changePasswordAdmin(body) {
      return axios.patch("auth/admin/change-password", body);
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
   getBankAdmin(body) {
      return axios.get("bank/admin", body);
   },
   updateBank({ body, id }) {
      return axios.patch(`bank/admin/${id}`, body);
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
   updateContacts({ id, body }) {
      return axios.patch(`contacts/admin/${id}`, body);
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
