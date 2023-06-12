importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAYL7v-PJ_5N5Sn12Ghr8Zfu7Zre7pHtiI",
  authDomain: "pecano-notification.firebaseapp.com",
  projectId: "pecano-notification",
  storageBucket: "pecano-notification.appspot.com",
  messagingSenderId: "446734505028",
  appId: "1:446734505028:web:b7347c54f112fc36fc5811"
});

const messaging = firebase.messaging();