import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

export function watchUserChanges(callback){
  const unsub = firebase.auth().onAuthStateChanged((user)=>{
    if(user && !user.isAnonymous){
      console.log('Logging in')
      callback({
        id:user.uid,
        email: user.email,
        name: user.displayName,
        foto: user.photoURL
      })
    }else{
      console.log('No Logged in')
      callback(null)
    }
  })
  return unsub
}

const usuario = ()=>{
  let misDatos = []
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
          misDatos.push(result.user.uid)
        })
        .catch(err =>{
          console.log(err.message)
        })
    return misDatos
  }

export default usuario