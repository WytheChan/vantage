import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import actions from './actions'
import getter from './getters'
import mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions,
    getter,
    mutations
})
 
export default store