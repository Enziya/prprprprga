var firebaseConfig = {
      apiKey: "AIzaSyDmpy0DEpxBlWodbi9-bCxyGD1oFfzHRE4",
      authDomain: "kwitter-1dc4b.firebaseapp.com",
      databaseURL: "https://kwitter-1dc4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1dc4b",
      storageBucket: "kwitter-1dc4b.appspot.com",
      messagingSenderId: "376909480330",
      appId: "1:376909480330:web:f1b64a5512a741ff7d4873"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"rm"
      });
      localStorage.setItem("room_name",room_name);
      //window.location=""\\
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
     // window.location=kwitter_page.html;\\
}