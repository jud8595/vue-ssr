import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        // wrap state in a function, so that it will not leak into the next server-side runs
        state: () => {
            count: 0
        },
        actions,
        mutations
    })
}
  