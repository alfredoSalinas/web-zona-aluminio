import { db } from "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { collection, getDocs } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
export const iniciarSession = ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export async function  listaProductos(callback){
  let misProductos = []
  const querySnapshot = await getDocs(collection(db, "productos"));
  querySnapshot.forEach((doc) => {
      misProductos.push(doc.data())
  });
  callback(misProductos)
}

export async function  listaCursos(callback){
    let misCursos = []
    const querySnapshot = await getDocs(collection(db, "cursos"));
    querySnapshot.forEach((doc) => {
        misCursos.push(doc.data())
    });
    callback(misCursos)
}

export async function  listaDocentes(callback){
  let misCursos = []
  const querySnapshot = await getDocs(collection(db, "docentes"));
  querySnapshot.forEach((doc) => {
      misCursos.push(doc.data())
  });
  callback(misCursos)
}

export async function  getInscritos(callback){
    let inscritos = []
    const querySnapshot = await getDocs(collection(db, "inscritos"));
    querySnapshot.forEach((doc) => {
        inscritos.push(doc.data())
    });
    callback(inscritos)
}

export const getFoto = idFoto => {
    var urlFoto=''
    const storageRef = firebase.storage().ref(idFoto)
          storageRef.getDownloadURL()
          .then(function(url){
            console.log('Mi foto : ', url)
            urlFoto=url
          })
          .catch(e =>{
              console.log(e)
          })
    return urlFoto
}


