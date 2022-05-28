import { createStore } from 'vuex'
import { getAllQuestions, deleteQuestion, getAllFatwas } from '@/firebase/firebase';

export default createStore({
  state: {
    isDashboard : false,
    questions : [],
    fatwas : [],
  },
  getters: {
    getAllQuestions(state){
      return state.questions ;
    },
    getAllFatwas(state){
      return state.fatwas ;
    }
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


  },
  modules: {
  }
})
