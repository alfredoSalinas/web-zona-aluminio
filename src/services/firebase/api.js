import { db } from './setup'
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { collection, getDocs } from "firebase/firestore";


export async function  listaProductos(callback){
  let misProductos = []
  const querySnapshot = await getDocs(collection(db, "productos"));
  querySnapshot.forEach((doc) => {
      misProductos.push(doc.data())
  });
  callback(misProductos)
}

export const getAdmin = (user, callback)=>{
  const unsub = db
        .collection('administradores')
        .doc(user.id)
        .get()
        .then(admin => {
          if(admin.exists) callback(true)
        }).catch(error => {
          callback(false)
        })
  return unsub  
}

export const createPedido = (data) => {
  return db.collection('pedidos')
    .doc(data.id)
    .set(data);
};

export const createCliente = (data) => {
  return db.collection('cliente')
    .doc(data.id)
    .set(data);
};

export const getClientes = (callback)=>{
  const unsub = db
        .collection('clientes')
        .get()
        .then(cliente => {
          const docs = []
          cliente.forEach(doc => {
            const data = doc.data
            docs.push({
              ...data,
              id: doc.id,
            })
          })
          callback(docs)
        }).catch(error => {
          callback(null)
        })

  return unsub
}