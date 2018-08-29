import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import action from './actions'
import getter from './getters'
import mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    action,
    getter,
    mutations
})
 
export default store