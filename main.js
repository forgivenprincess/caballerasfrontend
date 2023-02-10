//<button id="settings-btn">Settings</button>  <script> const settingsBtn = document.getElementById("settings-btn");  if (!loggedIn) {   settingsBtn.style.display = "none"; } </script>


const knighterButton = document.getElementById("knighter-button");
const knighterInput = document.getElementById("knighter-input");
const knighterList= document.getElementById("knighter-list");
const followButton = document.getElementById("followButton")
let newFollowButton = document.querySelector(".knighter-footer.followButton");

let isLoggedIn = true; // variable to indicate if the user is logged in or not 



//function to update the login season variable
function updateLoginStatus(status) {
  isLoggedIn = status;
  if (isLoggedIn) {
  knighterInputContainer.style.display = "block";
  } else {
  knighterInputContainer.style.display = "none";
  }
  }


const postingKnighters = async() =>{
  fetch("")
}

//DRAW THE KNIGHTERS FROM THE API
const url = 'http://127.0.0.1:3000/api/listadeposts' 
fetch(url)
  .then(response => response.json())
  .then(data => {
let postHTML = [];
for (const i of data.listado) {
  postHTML += `
    <div class="knighter-container">
      <div class="knighter-header">
        <img src="/caballera404.png" alt="avatar">
        <h3>${i.usuario}</h3>
        <br>
        <p class="knighter-date">${i.fecha}</p>
      </div>
      <p class="knighter-text">${i.texto}</p>
      <div class="knighter-footer">
        <button class="honor-button" data-id="${i._id}">Honor</button>
        <span class="honor-count">0</span>
        <button class="followButton">Follow</button>
      </div>
    </div>` 
  document.getElementById('knighter-list').innerHTML = postHTML;
  }})


// document.getElementById("knighter-list").innerHTML = postHTML;






//PUBLISH A KNIGHTER
//adding an event to the button for publishing a knighter and conecting with the API
knighterButton.addEventListener("click", function(){
  if (!isLoggedIn){ 
    alert ("Please , you have to login before publish a knighter!");
    return;
  }
  const knighter = knighterInput.value ;
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="knighter-container">
  <div class="knighter-header">
  <h3>{usuario}</h3> //hay que poner el usuario
  </div>
  <p class="knighter-text">${knighter}</p>
  <button class="honor-button">Honor</button>
  <span class="honor-count">0</span>
  <button class="followButton">Follow me!</button>
  </div>
  `;
  knighterList.prepend(li);

  const usuario = "Gabriela";
  const url = 'http://127.0.0.1:3000/api/listadeposts?' + new URLSearchParams({usuario:usuario,texto:knighter,imagen:"img"});
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }})
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error connecting to the server");
  });
})



//adding and event giving a like (honor) for the knighters
// and connecting to give an honor to the API 

knighterList.addEventListener("click", function(event) {
  if (event.target.className === "honor-button") {
    const knighterId = event.target.getAttribute("data-id");
    const knighter = event.target.parentNode.parentNode;
    const honorCount = knighter.querySelector(".honor-count");
    let count = parseInt(honorCount.innerHTML);
    if (event.target.innerHTML === "Honor") {
      count++;
      event.target.innerHTML = "HONOR!";
      fetch("/api/honors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: knighterId,
          count: count
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      count--;
      event.target.innerHTML = "Honor";
    }
    honorCount.innerHTML = count;
  }
});


  // Add an event listener to the follow button
  knighterList.addEventListener("click", function(event) {
    if (event.target.className === "followButton") {
      const followButton = event.target;
      if (followButton.innerHTML === "Following!") {
        followButton.innerHTML = "Follow";
        followButton.disabled = false;
      } else {
        followButton.innerHTML = "Following!";
        followButton.disabled = false;
      }
    }
  });
