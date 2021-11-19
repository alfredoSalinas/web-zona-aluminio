import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/*
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
*/
const auth = getAuth();

function watchUserChanges(callback){
  const unsub = onAuthStateChanged(auth, (user)=>{
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

export default watchUserChanges