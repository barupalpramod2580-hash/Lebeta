import {
  db
} from "./firebase.js";

import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const container =
  document.getElementById("videos");


async function loadVideos() {

  try {

    const q =
      query(
        collection(db, "videos"),
        orderBy(
          "createdAt",
          "desc"
        )
      );


    const snapshot =
      await getDocs(q);


    container.innerHTML = "";


    if (snapshot.empty) {

      container.innerHTML =
        "<p>अभी कोई video नहीं है।</p>";

      return;

    }


    snapshot.forEach(item => {

      const video =
        item.data();


      const card =
        document.createElement("div");

      card.className = "card";


      card.innerHTML = `

        <video
          class="thumbnail"
          src="${video.videoURL}"
          muted
          preload="metadata">
        </video>

        <div class="card-body">

          <div class="card-title">
            ${escapeHTML(video.title)}
          </div>

          <div class="meta">
            ${escapeHTML(video.creator || "Creator")}
          </div>

          <div class="meta">
            👁 ${video.views || 0} views
            • ❤️ ${video.likes || 0}
          </div>

        </div>
      `;


      card.onclick = () => {

        location.href =
          `watch.html?id=${item.id}`;

      };


      container.appendChild(card);

    });


  } catch (error) {

    console.error(error);

    container.innerHTML =
      "<p>Videos load नहीं हो पाए।</p>";

  }

}


function escapeHTML(text) {

  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


loadVideos();
