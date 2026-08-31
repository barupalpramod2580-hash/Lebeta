import {
  auth
} from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const authArea =
  document.getElementById("authArea");

if (authArea) {

  onAuthStateChanged(auth, user => {

    if (user) {

      authArea.innerHTML = `
        <button id="logoutBtn" class="gray">
          Logout
        </button>
      `;

      document
        .getElementById("logoutBtn")
        .onclick = async () => {
          await signOut(auth);
          location.href = "index.html";
        };

    } else {

      authArea.innerHTML = `
        <a href="login.html" class="dark">
          Login
        </a>
      `;

    }

  });

}
