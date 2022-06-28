
import db from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Swal from 'sweetalert2';

//Refactorizando el GET
const itemCollection = db.collection('items');

export function getProducts() {
    return itemCollection.get()
      .then(snapShot => {
          return snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))
      })  
     
}

export function getProductsById(productId) {
    const itemById = itemCollection.doc(productId)
    return itemById.get()
    .then(snapShot => {
        return ({...snapShot.data(), id: snapShot.id})
    })

}

const orderCollection = db.collection("orders")

export function createOrder(buyer, item, total) {
    return orderCollection.add({
      buyer: buyer,
      item: item,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    })
   
    .then(function(newOrder) {
        Swal.fire({
            
            icon: 'info',
            title: `Gracias por tu compra `,
            text: `Tu Número de orden es: ${newOrder.id}`,
            
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            } 
            
          })
        return newOrder.id;
       
    })
    .catch((err) => {});


    
}



/* 
ESTA FUNCION PASARÁ A HACER LA QUE REEMPLACE A LA DE LA LÍNEA 7
Me devuelve mi "colección"(todos los productos) Después la tengo que importar a "Cartcontainer.js"

const orderCollection = db.collection("order")

export function getCollection() {
    return orderCollection;
}

export async function getProducts() {
    const docRef = await itemCollection.get();

    const posts = docRef.docs.map(getDocDataAndId);
        
    return posts;

}

// POST//
// export async function createPost(post) {
//    itemCollection.add(post);
// }

*/


//UPDATE// PRIMERO DEBEMOS OBTENER LA REFERENCIA DEL DOCUMENTO QUE QUEREMOS MODIFICAR 
/*
export async function updatePost(data) {
    const docRef = await postCollection.doc(data.postId);
    
    await docRef.update(data);

}

*/

