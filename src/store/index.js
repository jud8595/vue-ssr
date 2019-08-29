import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        // wrap state in a function, so that it will not leak into the next server-side runs.
        // https://vuex.vuejs.org/guide/modules.html#module-reuse :
        // The state object can be shared between multiple modules, so to avoid cross module
        // pollution when state is mutated, the function should be shared and not the object
        state: () => ({
            count: 1,
            firstIncrement : false
        }),
        actions,
        mutations
    })
}
  