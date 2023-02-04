// window.onload = function() {

const knighterButton = document.getElementById("knighter-button");
const knighterInput = document.getElementById("knighter-input");
const knighterList= document.getElementById("knighter-list");

let isLoggedIn = false; // variable to indicate if the user is logged in or not 


//function to update the login season variable
function updateLoginStatus(status) {
  isLoggedIn = status;
}


//adding an event to the button for publishing a knighter
knighterButton.addEventListener("click", function(){
  if (!isLoggedIn){
    alert ("Please , you have to login before publish a knighter!");
    return;
  }

  const knighter = knighterInput.value ;
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="knighter-header">
    <img src="image-url-here" alt="Profile picture">
    <h3>Username here</h3>
  </div>
  <p class="knighter-text">${knighter}</p>
  <button class="like-button">HONOR</button>
`;
  knighterList.prepend(li);
})

//like for the knighters

knighterList.addEventListener("click", function(event) {
  if (event.target.className === "honor-button") {
    event.target.innerHTML = "Honor!";
  }
});


// }





