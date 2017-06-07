var firebase = require('firebase')

module.exports = {
  listener : ()=>{
    var config = {
        apiKey: "AIzaSyBr2XuOByDxYE2mBmnlb7LyPwhWDQ24Tlw",
        authDomain: "web-socket-f7e63.firebaseapp.com",
        databaseURL: "https://web-socket-f7e63.firebaseio.com",
        storageBucket: "web-socket-f7e63.appspot.com"
     };
     firebase.initializeApp(config);

     // Get a reference to the database service
     var database = firebase.database();

    var userId = 'D001'

    var member = database.ref('users/' + userId);
    member.on('value', function(user) {
      console.log(user.val());
    });
  }
}
