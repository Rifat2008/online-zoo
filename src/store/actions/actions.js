import axios from "axios";

export default {
    GET_PETS_FROM_API({commit}) {
        return axios('http://localhost:3000/pets', {
          method: "GET"
        })
          .then((pets) => {
            commit('SET_PETS_TO_STATE', pets.data);
            return pets;
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
      },
    GET_TESTIMONIALS_FROM_API({commit}) {
        return axios('http://localhost:3000/testimonials', {
          method: "GET"
        })
          .then((testimonials) => {
            commit('SET_TESTIMONIALS_TO_STATE', testimonials.data);
            return testimonials;
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
      }
}

