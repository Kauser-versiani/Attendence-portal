import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
console.log("logging");
const auth = getAuth();
const database = getDatabase();



const signup = () => {
console.log(auth);
    let firstName = document.getElementById("firstname");
    let laststName = document.getElementById("lastname");
    let email = document.getElementById("signemail");
    let password = document.getElementById("signpassword");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((resolve) => {
        // Signed in 
        // const user = userCredential.user;
        set(ref(database,"users/"+auth.currentUser.uid),{
            firstName:firstName.value,
            laststName:laststName.value,
            email:email.value,
            password:password.value,
        })
        alert("successfully signup",resolve)
        location.replace("login.html")
        // ...
    })
    .catch((reject) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("reject",reject);
        // ..
    });
}
let signupBtn = document.getElementById("signupbtn");
signupBtn.addEventListener("click",signup);