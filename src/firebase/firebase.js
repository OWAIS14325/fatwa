import firebase from 'firebase'
// import { ref, onUnmounted } from 'vue'

const config = {
  // Firebase config here
  apiKey: "AIzaSyDnLfbRnlQP3weInXN_YxrG6ovAULwYldE",
  authDomain: "itqan-9efca.firebaseapp.com",
  projectId: "itqan-9efca",
  storageBucket: "itqan-9efca.appspot.com",
  messagingSenderId: "722704813297",
  appId: "1:722704813297:web:97d62a31b7f49b5028ad50"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const questionsCollection = db.collection('questions')
const fatwaCollection = db.collection('fatwas')

export const createQuestion = que => {
  return questionsCollection.add(que)
}

export const createFatwa = fatwa => {
  return fatwaCollection.add(fatwa)
}
// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

export const deleteQuestion = id => {
  return questionsCollection.doc(id).delete()
}

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

export const getAllQuestions = async () => {
    const questions = [];
    await db.collection("questions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            questions.push({id:doc.id , data : doc.data()})
        });
    });
   return questions.length ? questions : null
}