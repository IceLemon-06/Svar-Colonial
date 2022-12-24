const fs = require('firebase-admin');

const serviceAccount = require('./rafeal-db-firebase.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore(); 
const reportsdb = db.collection('bug_reports');

module.exports.getFromDB = async function (bugID) { 
  const bug_reports = await db.collection('bug_reports').get();
  const bug = await reportsdb.doc(`DocumentBugReports${bugID}`).get();

  if (!bug.exists) {
    await console.log('No document');
   } else {
    console.log(bug.data());
   }
}

//async function getFromDB(bugID) { 
//  const bug_reports = await db.collection('bug_reports').get();
//  const bug = await reportsdb.doc(`DocumentBugReports${bugID}`).get();
//
//  if (!bug.exists) {
//    console.log('No document');
//   } else {
//    console.log(bug.data());
//   }
//}
//
//getFromDB(3704788)
