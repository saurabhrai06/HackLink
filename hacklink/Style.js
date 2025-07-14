const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
  
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
  
signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDbuJ1MYGcJ8HsLR_EuDa87w75_hjVVxqc",
//     authDomain: "hacklink-c08c8.firebaseapp.com",
//     databaseURL: "https://hacklink-c08c8-default-rtdb.firebaseio.com",
//     projectId: "hacklink-c08c8",
//     storageBucket: "hacklink-c08c8.appspot.com",
//     messagingSenderId: "281471596737",
//     appId: "1:281471596737:web:b4aee317437b9122e9bc40"
//   };

// //   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);
//     // Initialize variables
//    const email = document.getElementById( 'email' ).value;
//    const password = document.getElementById( 'password' ).value;
//    const fname = document.getElementById( 'fname' ).value;
//    const submit = document.getElementById( 'submit' ).value;
//    submit.addEventListener('click', function(event){
//       event.preventDefault()
//        alert(5)
//   }); 

  
  
  