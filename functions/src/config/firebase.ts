import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
    projectId: functions.config().project.id,
    clientEmail: functions.config().client.email
  }),
  databaseURL: 'https://nodejstestproject-8adf9.firebaseio.com'
})


const db = admin.firestore()
export { admin, db }

db.collection('entries').doc().create({ })
const entry = db.collection('entries').doc()

const entryObject = {
  id: entry.id,
  title: 'entry title here',
  text: 'entry text here'
}

entry.set(entryObject)