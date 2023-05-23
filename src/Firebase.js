import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCPT5u9WpJwCIf8YBcNpCx-O8Y8t2VaxWw",
    authDomain: "reactcadastro.firebaseapp.com",
    projectId: "reactcadastro",
    storageBucket: "reactcadastro.appspot.com",
    messagingSenderId: "18821949619",
    appId: "1:18821949619:web:13821cfac595cd96a868c6"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;