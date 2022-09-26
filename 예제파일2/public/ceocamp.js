const firebaseConfig = {
  apiKey: "AIzaSyAcu8kmCT0Sq_yToO7fUY-Lgq4C9axLOsk",
  authDomain: "codecamp-80c16.firebaseapp.com",
  databaseURL: "https://codecamp-80c16-default-rtdb.firebaseio.com",
  projectId: "codecamp-80c16",
  storageBucket: "codecamp-80c16.appspot.com",
  messagingSenderId: "356946131929",
  appId: "1:356946131929:web:157ab8b1a8314f7e24b7c8",
  measurementId: "G-BFS23FN25B"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
