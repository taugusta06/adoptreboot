import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets pets from the PetFinder API
  getPets: function(params) {
    return axios.get("/api/pets", { params: filterParams(params) });
  },
  // Gets all saved pets
  getSavedPets: function() {
    return axios.get("/api/pets");
  },
  // Deletes the saved pet with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves an pet to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  }
};
