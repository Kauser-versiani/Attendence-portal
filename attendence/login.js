import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const auth = getAuth();
const database =getDatabase();
const login = () => {
    let email = document.getElementById("login=email");
    let password = document.getElementById("login-password");
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((resolve) => {
   
    alert("Sucessfully login");
    let userRef = database().ref("user/lucky");
    userRef.once("value")
      .then((snapshot) => {
        let data = snapshot.val();
        console.log(data);
      })
    // ...
  })
  .catch((reject) => {
   alert(reject.message)
    // ..
  });
}
let loginbtn = document.getElementById("login-btn");
loginbtn.addEventListener("click",login);