// import { initializeApp, cert } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
// // This is a sudo code & line 1- 13 will always be the same
// // import our credentials (credentials)
// import {credentials} from './creds.js';

// // connect to our firebase project using those credentials 
// initializeApp({
//     credential: cert(credentials)
// });

// // connect to firestore database
// const db = getFirestore();

// // define the pet; 
// const newPet = { 
//     name: 'Willow',
//     color: 'Brown',
//     age: '3', 
//     id: 1,
// }

// const secondNewPet = { 
//     name: 'Lassie',
//     color: 'Black',
//     age: '5', 
//     id: 5,
// }


// console.log(secondNewPet)

// // create a doc inside a collection 
// db.collection('pet').add(secondNewPet)// says go to the database 
//     // if ok, console log the doc id 
//     .then(doc => console.log('Pet: ', doc.id))
//     // if not, console error 
//     .catch(console.error)
//     // .catch(err => console.error(err))


// db.collection('pet').get()
// //reshape the collection
//     .then(collection => {  // We are going to loop through the whole thing
//         collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())    
//         })
//     })
//     .catch(console.error)

//     db.collection ('pet')
//     .doc('38bdUN5XpjAp4QdBrhHg')              
//     .update({id: '22'})
//     .catch(console.error)

//     db.collection ('pet')
//     .doc('38bdUN5XpjAp4QdBrhHg')                
//     .update({id: '77'})
//     .catch(console.error) 



//     db.collection ('pet')
//     .doc('38bdUN5XpjAp4QdBrhHg')              
//     .update({color:'Golden Brown', id: '22' })
//     .catch(console.error)

//     db.collection ('pet')
//     .doc('38bdUN5XpjAp4QdBrhHg')                
//     .update({ color: 'Striped', id: '77'})
//     .catch(console.error) 




//     //db.collection('pet').where('name', '==', 'Willow').update({ age: 1 })

//     //db.collection('pet').where('name', '==', 'Lassie').delete()




// import { initializeApp, cert } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
// // This is a sudo code & line 1- 13 will always be the same
// // import our credentials (credentials)
// import {credentials} from './creds.js';

// // connect to our firebase project using those credentials 
// initializeApp({
//     credential: cert(credentials)
// });

// // connect to firestore database
// const db = getFirestore();

// // define the product; 
// const newProduct = { 
//     name: 'AquaFresh',
//     type: 'Toothpaste', 
//     id: 17,
// }

// const secondNewProduct = { 
//     name: 'DialSoap',
//     color: 'Soap',
//     id: 51,
// }


// console.log(secondNewProduct)

// // create a doc inside a collection 
// db.collection('secondNewProduct').add(secondNewProduct)// says go to the database 
//     // if ok, console log the doc id 
//     .then(doc => console.log('secondNewProduct: ', doc.id))
//     // if not, console error 
//     .catch(console.error)
//     // .catch(err => console.error(err))


// db.collection('secondNewProduct').get()
// //reshape the collection
//     .then(collection => {  // We are going to loop through the whole thing
//         collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())    
//         })
//     })
//     .catch(console.error)






    // db.collection ('pet')
    // .doc('38bdUN5XpjAp4QdBrhHg')              
    // .update({id: '22'})
    // .catch(console.error)

    // db.collection ('pet')
    // .doc('38bdUN5XpjAp4QdBrhHg')                
    // .update({id: '77'})
    // .catch(console.error) 



    // db.collection ('pet')
    // .doc('38bdUN5XpjAp4QdBrhHg')              
    // .update({color:'Golden Brown', id: '22' })
    // .catch(console.error)

    // db.collection ('pet')
    // .doc('38bdUN5XpjAp4QdBrhHg')                
    // .update({ color: 'Striped', id: '77'})
    // .catch(console.error) 


    //db.collection('pet').where('name', '==', 'Willow').update({ age: 1 })

    //db.collection('pet').where('name', '==', 'Lassie').delete()




// import { initializeApp, cert } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
// // This is a sudo code & line 1- 13 will always be the same
// // import our credentials (credentials)
// import {credentials} from './creds.js';

// // connect to our firebase project using those credentials 
// initializeApp({
//     credential: cert(credentials)
// });

// // connect to firestore database
// const db = getFirestore();

// // define the product; 
// const newCustomer = { 
//     name: 'Todd',
//     phone: '5617891717', 
//     id: 19,
// }

// const secondNewCustomer = { 
//     name: 'Damian',
//     phone: '5619097890',
//     id: 15,
// }


// console.log(newCustomer)

// // create a doc inside a collection 
// db.collection('newCustomer').add(newCustomer)// says go to the database 
//     // if ok, console log the doc id 
//     .then(doc => console.log('newCustomer: ', doc.id))
//     // if not, console error 
//     .catch(console.error)
//     // .catch(err => console.error(err))


// db.collection('newCustomer').get()
// //reshape the collection
//     .then(collection => {  // We are going to loop through the whole thing
//         collection.docs.forEach(doc => {
//         console.log(doc.id, doc.data())    
//         })
//     })
//     .catch(console.error)




import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
// This is a sudo code & line 1- 13 will always be the same
// import our credentials (credentials)
import {credentials} from './creds.js';

// connect to our firebase project using those credentials 
initializeApp({
    credential: cert(credentials)
});

// connect to firestore database
const db = getFirestore();

// define the product; 
const newCustomer = { 
    name: 'John',
    phone: '5617891717', 
    id: 30,
}

const secondNewCustomer = { 
    name: 'Jane',
    phone: '5619097890',
    id: 25,
}


console.log(secondNewCustomer)

// create a doc inside a collection 
db.collection('secondNewCustomer').add(secondNewCustomer)// says go to the database 
    // if ok, console log the doc id 
    .then(doc => console.log('secondNewCustomer: ', doc.id))
    // if not, console error 
    .catch(console.error)
    // .catch(err => console.error(err))


db.collection('secondNewCustomer').get()
//reshape the collection
    .then(collection => {  // We are going to loop through the whole thing
        collection.docs.forEach(doc => {
        console.log(doc.id, doc.data())    
        })
    })
    .catch(console.error)

    