import { createStore } from 'vuex'
import { getAllQuestions, deleteQuestion } from '@/firebase/firebase';

export default createStore({
  state: {
    isDashboard : false,
    questions : []
  },
  getters: {
    getAllQuestions(state){
      return state.questions ;
    }
  },
  mutations: {
    setQuestion(state, data){
      state.questions = data
    },
    removeQuestion(state, id){
      const res = state.questions.findIndex(que => que.id === id)
      state.questions.splice(res, 1)
    },

  },
  actions: {
    async fetchQuestions (context) {
    const res =  await getAllQuestions()
    context.commit('setQuestion', res)
    },

    deleteQuestion(context, id){
      deleteQuestion(id) ;
      context.commit('removeQuestion', id)
    },


  },
  modules: {
  }
})
