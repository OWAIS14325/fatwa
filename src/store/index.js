import { createStore } from 'vuex'
import { getAllQuestions, deleteQuestion, getAllFatwas, deleteFatwa } from '@/firebase/firebase';

export default createStore({
  state: {
    isDashboard : false,
    questions : [],
    fatwas : [],
    fatwaCategories : [
      {
        name: 'ZAKAAH (ALMS) - (300)',
        count : 0,
        value : 'ZAKAAH'
      },
      {
        name: 'SAWM & RAMADHAAN (FASTING)› - (200)',
        count : 0,
        value : 'FASTING'
      },
      // {
      //   name: "AQAA'ID (BELIEFS)› - (100)",
      //   count : 0,
      //   value : 'BELIEFS'
      // },
      // {
      //   name: 'SALAAH (PRAYER)› - (400)',
      //   count : 0,
      //   value : 'PRAYER'
      // },
      // {
      //   name: 'HAJJ/ UMRAH (PILGRIMAGE) - (500)',
      //   count : 0,
      //   values : 'PILGRIMAGE'
      // },
      // {
      //   name: 'NIKAH & TALAQ (MARRIAGE & DIVORCE) - (240)',
      //   count : 0,
      //   value : 'PILGRIMAGE'
      // },
      // {
      //   name: "BUYOO' (MONEY-RELATED ISSUES) - (350)",
      //   count : 0,
      //   value : 'MONEY-RELATED'
      // },
      // {
      //   name: 'AADAAB (ETTIQUETTES & MANNERS) - (330)',
      //   count : 0,
      //   value : 'ETTIQUETTES'
      // },
      // {
      //   name: 'HALAAL & HARAAM - (220)',
      //   count : 0,
      //   value : 'HALAAL'
      // },
      // {
      //   name: 'WAQF & CHARITY - (120)',
      //   count : 0,
      //   value : 'WAQF'
      // },
      // {
      //   name: "TAHAARAH (CLEANLINESS) - (180)",
      //   count : 0,
      //   value : 'CLEANLINESS'
      // },
      // {
      //   name: 'OATHS & VOWS - (160)',
      //   count : 0,
      //   value : 'OATHS'
      // },
      // {
      //   name: 'CUSTOMS - (270)',
      //   count : 0,
      //   value : 'CUSTOMS'
      // },
      // {
      //   name: "QUR'AN & HADEETH› - (670)",
      //   count : 0,
      //   value : 'HADEETH'
      // },
      {
        name: "DAILY MATTERS - (380)",
        count : 0,
        value : 'DAILY-MATTERS'
      },
      {
        name: 'SOCIAL CONDUCT - (100)',
        count : 0,
        value : 'SOCIAL-CONDUCT'
      },
      {
        name: 'DEATH (FUNERAL) - (330)',
        count : 0,
        value : 'FUNERAL'
      },
      {
        name: "INHERITANCE & WILL - (305)",
        count : 0,
        value : 'INHERITANCE'
      },
    ]
  },
  getters: {
    // Get All Questions
    getAllQuestions(state){
      return state.questions ;
    },

    // Get All Fatwas List
    getAllFatwas(state){
      return state.fatwas ;
    },

    // Get Categories List
    getCategories(state){
      return state.fatwaCategories
    },
  },
  mutations: {
    /**
     * Mutate Questions
     * @param {Object} state 
     * @param {Array} data 
     */
    setQuestion(state, data){
      state.questions = data
    },

    /**
     * Mutate Fatwas
     * @param {Object} state 
     * @param {Array} data 
     */
     setFatwas(state, data){
      state.fatwas = data
    },

    /**
     * Remove Question from questions store
     * @param {Object} state 
     * @param {String} id 
     */
    removeQuestion(state, id){
      const res = state.questions.findIndex(que => que.id === id)
      state.questions.splice(res, 1)
    },

    /**
     * Remove Fatwa from fatwas store
     * @param {Object} state 
     * @param {String} id 
     */
     removeFatwa(state, id){
      const res = state.fatwas.findIndex(que => que.id === id)
      state.fatwas.splice(res, 1)
    },

  },
  actions: {
    /**
     * Get Questions from Database
     * @param {*} context 
     */
    async fetchQuestions (context) {
    const res =  await getAllQuestions()
    context.commit('setQuestion', res)
    return res ;
    },

    /**
     * Get Fatwas List from Database
     * @param {*} context 
     */
     async fetchFatwas (context) {
      const res =  await getAllFatwas()
      context.commit('setFatwas', res)
      return res ;
      },

    deleteQuestion(context, id){
      deleteQuestion(id) ;
      context.commit('removeQuestion', id)
    },

    deleteFatwa(context, id){
      deleteFatwa(id) ;
      context.commit('removeFatwa', id)
    }


  },
  modules: {
  }
})
