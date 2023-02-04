// window.onload = function() {

const knighterButton = document.getElementById("knighter-button");
const knighterInput = document.getElementById("knighter-input");
const knighterList= document.getElementById("knighter-list");

//adding an event to the button for publishing a knighter
knighterButton.addEventListener("click", function(){
  const knighter = knighterInput.value ;
  const li = document.createElement("li");
  li.innerHTML = knighter + ` <button class="honor-button">Honor</button>`
  knighterList.prepend(li);
})

//LIKE TO THE FIGHTERS

knighterList.addEventListener("click", function(event) {
  if (event.target.className === "honor-button") {
    event.target.innerHTML = "Honor!";
  }
});


// }





