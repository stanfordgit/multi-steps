import { createStore } from 'vuex'
import inviteUserStore from './modules/inviteUser.store'

export default createStore({
  modules: {
    inviteUserStore
  }
})