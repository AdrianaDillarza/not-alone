// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAau7Vg5_6obNBGxf19-3e5nwe0w8sNRp0",
    authDomain: "not-alone-41459.firebaseapp.com",
    databaseURL: "https://not-alone-41459.firebaseio.com",
    projectId: "not-alone-41459",
    storageBucket: "",
    messagingSenderId: "971433045993"
  };
  firebase.initializeApp(config);

  var bigOne = document.getElementById("bigOne");
  var ref = firebase.database().ref().child("text");
  ref.on("value", snap => bigOne.innerText = snap.val());

  // Splash view
  $(document).ready(function() {
    setTimeout(function() {
        $(".container-1").fadeOut(1500);
    },1000);
});


$(document).ready(function() {
    setTimeout(function() {
        $(".container-2").fadeIn(1500);
    },1000);
});

//Carousel
$('.carousel').carousel({
  interval: 2000
})
