var firebase = require('firebase')

module.exports = {
  write : ()=>{
    var config = {
        apiKey: "AIzaSyBr2XuOByDxYE2mBmnlb7LyPwhWDQ24Tlw",
        authDomain: "web-socket-f7e63.firebaseapp.com",
        databaseURL: "https://web-socket-f7e63.firebaseio.com",
        storageBucket: "web-socket-f7e63.appspot.com"
     };
     firebase.initializeApp(config);

     // Get a reference to the database service
    var database = firebase.database();
    writeUserData('D001', 'sirine', 'sirine@gmail.com')

     function writeUserData(userId, name, email) {
       database.ref('users/' + userId).set({
         username: name,
         email: email,
         job: 'ringing'
       });
     }
  }
}
