var firebase = require('firebase')
    // change lines below with your own Firebase snippets!
var config = {
    apiKey: "AIzaSyB5N4ecWww6hkpC9XxeiLskVJ3vkL7pKB0",
    authDomain: "badeel-ed06d.firebaseapp.com",
    databaseURL: "https://test-iot-esp.firebaseio.com",
    projectId: "badeel-ed06d",
    storageBucket: "badeel-ed06d.appspot.com",
    messagingSenderId: "749911150419"
};
const fire = firebase.initializeApp(config);
module.exports = fire;