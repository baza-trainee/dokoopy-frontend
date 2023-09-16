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
   config: {
      headers: {
         "Content-Type": "multipart/form-data",
      },
   },
   _token: null,
   // setToken(token) {
   //    this._token = token;
   //    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   // },
   // loginAdmin() {
   //    return axios.post("auth/admin/login", {
   //       headers: {
   //          "Content-Type": "application/json",
   //       },

   //       email: "test@test.com",
   //       password: "test",
   //    });
   // },
   //Project
   getProjectAdmin() {
      return axios.get("projects/admin");
   },
   addProject(body) {
      return axios.post("project/admin", {
         config,
         ...body,
      });
   },
   updateProject({ id, body }) {
      return axios.put(`project/admin${id}`, {
         config,
         ...body,
      });
   },
   deleteProject(id) {
      return axios.delete(`projects/admin${id}`);
   },
   //Bank
   getBankAdmin() {
      return axios.get("bank/admin");
   },
   updateBank(body) {
      return axios.get("bank/admin", {
         ...body,
      });
   },
   //Hero

   getHerosAdmin() {
      return axios.get("hero/admin");
   },
   addHero(body) {
      return axios.post("hero/admin", {
         ...body,
      });
   },
   updateHero({ id, body }) {
      return axios.put(`hero/admin${id}`, {
         config,
         ...body,
      });
   },
   deleteHero(id) {
      return axios.delete(`hero/admin${id}`);
   },
};
