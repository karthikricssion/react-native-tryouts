import firebase from 'firebase'
import 'firebase/firestore'
import { 
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID,
    STORAGE_BUCKET,
    MEASUREMENT_ID
 } from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
// db.settings({
//     timestampsInSnapshots: true
// })

export default Firebase