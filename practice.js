
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCRBuAZa7DtzWjajTTHh85g_8nZA6cksW4",
    authDomain: "kwitter-f8efa.firebaseapp.com",
    databaseURL: "https://kwitter-f8efa-default-rtdb.firebaseio.com",
    projectId: "kwitter-f8efa",
    storageBucket: "kwitter-f8efa.appspot.com",
    messagingSenderId: "575816255573",
    appId: "1:575816255573:web:31787a79c1b42e5099ecdc",
    measurementId: "G-PH1G54P2N0"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function adduser(){
        name=document.getElementById("user_name").value;
        console.log(name);
        firebase.database().ref('/').child(name).update({
        use:"adding user name"
        });
    }