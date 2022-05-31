import firebase from 'firebase'
// import { ref, onUnmounted } from 'vue'

const config = {
  // Firebase config here
    apiKey: "AIzaSyC7JgkUS8jSpWaBCh5FKt3YLTLr7BTXAoc",
    authDomain: "itqan-6f9fe.firebaseapp.com",
    projectId: "itqan-6f9fe",
    storageBucket: "itqan-6f9fe.appspot.com",
    messagingSenderId: "540111028301",
    appId: "1:540111028301:web:e3a17958fd18f613a85c04",
    measurementId: "G-BX955H68L7"

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
export const getFatwa = async id => {
  const fatwa = await fatwaCollection.doc(id).get()
  return fatwa.exists ? fatwa.data() : null
}

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

export const deleteQuestion = id => {
  return questionsCollection.doc(id).delete()
}

export const deleteFatwa = id => {
  return fatwaCollection.doc(id).delete()
}

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

// Get All Questions from Database
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

// Get All Fatwa List from Database
export const getAllFatwas = async () => {
  const fatwas = [];
  await db.collection("fatwas").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          fatwas.push({id:doc.id , data : doc.data()})
      });
  });
 return fatwas.length ? fatwas : null
}