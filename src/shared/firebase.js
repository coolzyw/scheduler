import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAuptJPRvNDLXg7J8ZXWKPrsWmvlowYLow",
    authDomain: "schedule-778a6.firebaseapp.com",
    databaseURL: "https://schedule-778a6.firebaseio.com/",
    projectId: "schedule-778a6",
    storageBucket: "schedule-778a6.appspot.com",
    messagingSenderId: "1080997115039",
    appID: "app-id",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
