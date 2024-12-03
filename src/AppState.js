import { reactive } from 'vue'
import { Art } from './models/Art.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {Art[]} */
  arts: [],

  currentPage: 1,
  totalPages: 35,

  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})

