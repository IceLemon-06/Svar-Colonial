const fs = require('firebase-admin');

const serviceAccount = require('./rafeal-db-firebase.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore(); 

const usersDb = db.collection('users'); 
//const liam = usersDb.doc('lragozzine'); 

//async function set() {
//  await liam.set({
//    first: 'Rafeal',
//    last: 'Forest',
//    hobby: 'imran khan lover'
//   });
//
//}
//
//set()

//async function get() {
//  const users = await db.collection('users').get();
//  const liam  = await usersDb.doc('lragozzine').get();
//
//  if (!liam.exists) {
//    console.log('No document');
//   } else {
//    console.log(liam.data());
//   }
//   const underForest = await db.collection('users').where('first', '==', 'Rafeal').get();
//
//  if(!underForest.exists) {
//    console.log('No document');
//  } else {
//     console.log(underForest);
//  }
//}
//
//get()

//async function observe() {
//  const liam = db.collection('users').doc('lragozzine');
//
//  const observer = liam.onSnapshot(snapshot => {
//   console.log(`changes: ${snapshot}`);
//  }, err => {
//   console.log(`Error: ${err}`);
//  });
//}
//observe()

async function update() {
  const liam = await
  db.collection('users').doc('lragozzine').set({
    senttoDiscord: false
  }, { merge: true });
}

async function delete1() {
  const liam = await db.collection('users').doc('lragozzine').delete();
}
delete1()