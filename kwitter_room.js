
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5aYaJGDI7uEtZVjOo60kMdW3tubrmg3M",
  authDomain: "kwitter-fa108.firebaseapp.com",
  databaseURL: "https://kwitter-fa108-default-rtdb.firebaseio.com",
  projectId: "kwitter-fa108",
  storageBucket: "kwitter-fa108.appspot.com",
  messagingSenderId: "854082659778",
  appId: "1:854082659778:web:eb46acf7e854e6c2e9e25b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
