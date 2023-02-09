//<button id="settings-btn">Settings</button>  <script> const settingsBtn = document.getElementById("settings-btn");  if (!loggedIn) {   settingsBtn.style.display = "none"; } </script>


//conectar la api

// const url = 'http://127.0.0.1:3000/api/';
// const HTML_response = document.getElementById('app')
// fetch(url)
// .then((resp) => resp.json())
// .then((data) => console.log(data))



const knighterButton = document.getElementById("knighter-button");
const knighterInput = document.getElementById("knighter-input");
const knighterList= document.getElementById("knighter-list");
const followButton = document.getElementById("followButton")
let newFollowButton = document.querySelector(".knighter-footer .followButton");



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



//adding an event to the button for publishing a knighter
knighterButton.addEventListener("click", function(){
  if (!isLoggedIn){ //if is logged 
    alert ("Please , you have to login before publish a knighter!");
    return;
  }
  const knighter = knighterInput.value ;
  // const date = new Date();
  //const dateString = date.toLocaleString();
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="knighter-container">
  <div class="knighter-header">
  <h3>bbb</h3>
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

// connecting the publishing to the API
//   // // body: JSON.stringify({   
//   // //   texto: knighterInput.value,
//   // //   imagen: "imageProfile"
// }) 
// .then((response) => {
//   if (response.status === 201) {
//     console.log("Knighter published successfully");
//   } else {
//     console.error("Error publishingthe knighter");
//   }
// })




//aadding and event giving a like (honor) for the knighters
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
