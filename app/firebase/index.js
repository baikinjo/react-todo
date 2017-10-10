import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCfVaM0RGo_UVc3kWIRN9fk_bJLGXpJGJA",
        authDomain: "baik-todo-app.firebaseapp.com",
        databaseURL: "https://baik-todo-app.firebaseio.com",
        projectId: "baik-todo-app",
        storageBucket: "baik-todo-app.appspot.com",
        messagingSenderId: "329395801005"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;