//variables that contains the user information
const john = {
   name : "John Tarkpor",
   position: "Junior Front-end Developer",
   quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
   imageRoute : "images/image-john.jpg"
}
const tanya = {
   name : "Tanya Sinclair",
   position: "UX Engineer",
   quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
   imageRoute : "images/image-tanya.jpg"
}

// variables that keeps on track of the current status of which profile is displayed
const profiles = [tanya, john];
let curIdx = 0;

// query select previous and next buttons from the DOM
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// variables that contains the elements that are currently displayed that are to be change based on the button clicked
let profileImg = document.querySelector('.profilePicture');
let quotes = document.querySelector('.quote');
let name = document.querySelector('.name');
let position = document.querySelector('.position');

// function that will switch the profiles based on which profile is currently displayed
function nextProfile(){
   curIdx = (curIdx+1) % 2;
   const profileToSwitch = profiles[curIdx];
   //switch the profile picture
   profileImg.src = profileToSwitch.imageRoute
   quotes.innerHTML = profileToSwitch.quote;
   name.innerHTML = profileToSwitch.name;
   position.innerHTML = profileToSwitch.position;
}

function prevProfile(){
   curIdx = Math.abs((curIdx-1) % 2);
   const profileToSwitch = profiles[curIdx];
   //update the elements that are to be displayed
   profileImg.src = profileToSwitch.imageRoute;
   quotes.innerHTML = profileToSwitch.quote;
   name.innerHTML = profileToSwitch.name;
   position.innerHTML = profileToSwitch.position;
}

// update the elements on click
prev.addEventListener('click', prevProfile);
next.addEventListener('click', nextProfile);