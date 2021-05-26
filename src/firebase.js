import firebase from "firebase/app";
import "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyDcnTFU0gmlSKkAFt0LaZ1kxFW_o2CWBUY",
  authDomain: "live-blogging-66b07.firebaseapp.com",
  databaseURL: "https://live-blogging-66b07.firebaseio.com",
  projectId: "live-blogging-66b07",
  storageBucket: "live-blogging-66b07.appspot.com",
  messagingSenderId: "153272594111",
  appId: "1:153272594111:web:2f802b97d1944e3dc0e00a",
  measurementId: "G-BELYPCN2RB",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
