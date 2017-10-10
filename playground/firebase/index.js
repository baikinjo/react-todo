import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCfVaM0RGo_UVc3kWIRN9fk_bJLGXpJGJA",
    authDomain: "baik-todo-app.firebaseapp.com",
    databaseURL: "https://baik-todo-app.firebaseio.com",
    projectId: "baik-todo-app",
    storageBucket: "baik-todo-app.appspot.com",
    messagingSenderId: "329395801005"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Josh',
        age: 28
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('new todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'todo1',    
});

todosRef.push({
    text: 'todo2',    
})