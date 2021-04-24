import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
  firebase.initializeApp(firebaseConfig);
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage,errorCode,error,email,credential);
  });
  }
  return (
    <div>
      <button style={{width:'100%', height:'80px', marginTop:'10px', backgroundColor:'tomato', color:'white', fontSize:'25px'}} onClick={handleGoogleSignIn}>SIGN IN WITH GOOGLE</button>
      
    </div>
  );
};
export default Login;