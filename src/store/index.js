import { createStore } from 'vuex'
  //import commonActions from './actions/actions';
  import actions from './actions/actions';
  import mutations from './mutations/mutations';
  import getters from './getters/getters';

//const actions = {...commonActions, ...apiRequests};

export default createStore({
  state: {
    pets: [],
    testimonials: []
  },
  getters,
  mutations,
  actions
})
