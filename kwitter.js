
var firebaseConfig = {
  apiKey: "AIzaSyB1TVCyz8SLdnluijJeXHpWjQtwMi6WqrE",
  authDomain: "schoolchatapp-6a718.firebaseapp.com",
  databaseURL: "https://schoolchatapp-6a718-default-rtdb.firebaseio.com",
  projectId: "schoolchatapp-6a718",
  storageBucket: "schoolchatapp-6a718.appspot.com",
  messagingSenderId: "403476063012",
  appId: "1:403476063012:web:7001c5bcd1fa144dc789b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser(){

    user_name = document.getElementById("user_name").value;

firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
})
    window.location="kwitter_room.html";
}