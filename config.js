import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCya1MmsnoDbzietorPED1QZ1B0ZyFjT4E",
    authDomain: "wily-3c824.firebaseapp.com",
    projectId: "wily-3c824",
    storageBucket: "wily-3c824.appspot.com",
    messagingSenderId: "475242349949",
    appId: "1:475242349949:web:4a7a4028175f64c77ab814"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();