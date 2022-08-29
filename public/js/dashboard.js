var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var suggestion = document.getElementById("suggestion");
var submitScore = document.getElementById("submitScore");
var reset = document.getElementById("reset");
var sixHours = document.getElementById("6h");
var sixToEightHours = document.getElementById("6-8h");
var eightHours = document.getElementById("8h");
var sleepFacts = document.getElementById("sleepFacts");
var journalEntries = document.getElementById("journalEntries");
var sixHoursFact = document.getElementById("6HoursFact");
var sixToEightHoursFact = document.getElementById("6-8HoursFact");
var eightHoursFact = document.getElementById("8HoursFact");
var video = document.getElementById("video");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

submitScore.addEventListener("click", scoreResponse);
reset.addEventListener("click", resetSlider);
sixHours.addEventListener("click", sixHoursSleep)
journalEntries.addEventListener("click", journalEntriesRoute);
sixToEightHours.addEventListener("click", sixToEightHoursSleep);
eightHours.addEventListener("click", eightHoursSleep);

// Redirects user to journal entries
function journalEntriesRoute(event) {
  event.preventDefault;
  document.location.replace('/journal');
}

// Shows fact for six hours of sleep, while hiding other facts
function sixHoursSleep(event) {
  event.preventDefault;
  if (sixToEightHoursFact.getAttribute("class")){
    sixToEightHoursFact.removeAttribute("class");
    sixToEightHoursFact.setAttribute("class", "hide")
  }
  if (eightHoursFact.getAttribute("class")){
    eightHoursFact.removeAttribute("class");
    eightHoursFact.setAttribute("class", "hide")
  }
  sixHoursFact.removeAttribute("class");
  sixHoursFact.setAttribute("class", "show")
}

// Shows fact for six to eight hours of sleep, while hiding other facts
function sixToEightHoursSleep(event) {
  event.preventDefault;
  if (sixHoursFact.getAttribute("class")){
    sixHoursFact.removeAttribute("class");
    sixHoursFact.setAttribute("class", "hide")
  }
  if (eightHoursFact.getAttribute("class")){
    eightHoursFact.removeAttribute("class");
    eightHoursFact.setAttribute("class", "hide")
  }
  sixToEightHoursFact.removeAttribute("class");
  sixToEightHoursFact.setAttribute("class", "show")
}

// Shows fact for eight hours of sleep, while hiding other facts
function eightHoursSleep(event) {
  event.preventDefault;
  if (sixHoursFact.getAttribute("class")){
    sixHoursFact.removeAttribute("class");
    sixHoursFact.setAttribute("class", "hide")
  }
  if (sixToEightHoursFact.getAttribute("class")){
    sixToEightHoursFact.removeAttribute("class");
    sixToEightHoursFact.setAttribute("class", "hide")
  }
  eightHoursFact.removeAttribute("class");
  eightHoursFact.setAttribute("class", "show")
}
// Shows or hides text suggestions based on user input
function scoreResponse(event) {
event.preventDefault;
if (video.getAttribute("class")){
  video.removeAttribute("class");
  video.setAttribute("class", "hide")
};

  if (slider.value>=0 && slider.value<25) {
  suggestion.textContent = "We suggest that you take some time to yourself, rest, recover and rebuild. Play our mood radio to try and uplift your mood!";
  } else if (slider.value>=25 && slider.value<50) {
    suggestion.textContent = "We suggest you to go outside get some fresh air and walk outdoors. A 2015 study compared the activity the activity of people who walked for 90 minutes in either an urban or natural place. Researchers discovered that the people who took a natural walk had lower activity in the prefrontal cortex, a part of the brain that is overactive during depression and stress. So head on out and be one with nature!";
  } else if (slider.value>=50 && slider.value<75) {
    suggestion.textContent = "We suggest doing a little breathing work to improveyour mood. Try out this great video below!";
    video.removeAttribute("class");
    video.setAttribute("class", "show");
    video.setAttribute("class", "video-container");
  } else {
    suggestion.textContent = "Keep doing what your doing!";
  }
}

function resetSlider(event){
  event.preventDefault;
  output.textContent = 50;
  slider.value = 50;
  suggestion.textContent = '';
  if (video.getAttribute("class")){
    video.removeAttribute("class");
    video.setAttribute("class", "hide")
  };
}

// Loads music for mood radio
document.addEventListener('DOMContentLoaded', () => {
  const src = [
    [
      "Fleetwood Mac", "Dreams", "https://ia601800.us.archive.org/3/items/fleetwood-mac-11-gold-dust-woman/Fleetwood%20Mac%20-%2002%20%20Dreams.mp3", "https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773dd2bfe1b"
    ],
    [
      "MGMT", "Electric Feel", "https://ia904500.us.archive.org/32/items/youtube-r78xfXZb_WU/r78xfXZb_WU.mp4", "https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb"
    ],
    [
      "Walking on a Dream", "Empire Sun", "https://ia600706.us.archive.org/20/items/cd_walking-on-a-dream_empire-of-the-sun_0/disc1/02.%20Empire%20of%20the%20Sun%20-%20Walking%20on%20a%20Dream_sample.mp3", "https://i.discogs.com/0qOO1d9o4jwiaY2bIArQDWvEe2lCiONYbb9Obig3FRc/rs:fit/g:sm/q:90/h:437/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMTg3/NTQtMTI4Nzc2OTY1/Ni5qcGVn.jpeg"
    ],
    [
      "Toploader", "Dancing in the Moonlight", "https://ia800105.us.archive.org/1/items/cd_dancing-in-the-moonlight_toploader/disc1/01.%20Toploader%20-%20Dancing%20in%20the%20moonlight_sample.mp3",
      "https://m.media-amazon.com/images/I/81g7pcaRlBL._AC_SL1500_.jpg"
    ],
    [
      "Earth, Wind & Fire", "September", "https://ia803105.us.archive.org/27/items/cd_the-best-of-earth-wind-fire-volume-1_earth-wind-fire/disc1/07.%20Earth%2C%20Wind%20%26%20Fire%20-%20September_sample.mp3", "https://i.scdn.co/image/ab67616d0000b2734dd033f4cf3a0a58059cde69"
    ],
  ];
  // Displays artist + track name
  for (x = 0; x < src.length; x++) {
    var s = src[x];
    var number = parseInt(x) + 1;
    var artist = document.createTextNode(number + ": " + s[0]);
    var track_name = document.createTextNode(s[1]);
    
    var listItem = document.createElement('div');
    var artist_text = document.createElement('h3');
    var track_text = document.createElement('p');
    
    artist_text.appendChild(artist);
    track_text.appendChild(track_name);
    
    listItem.appendChild(artist_text);
    listItem.appendChild(track_text);
    
    listItem.classList.add('item');
    listItem.dataset.index = x;
    
    document.getElementById('list').appendChild(listItem);
  }
  displayTrack(0);
  
  var listItems = document.querySelectorAll('.item');
  listItems.forEach(el => {
    el.onclick = () => {
      displayTrack(el.dataset.index);
    };
  });
  
  function displayTrack(x) {
    var active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active'); 
    }
    var el = document.getElementById('list').children[x];
    el.classList.add('is-active');
    var s = src[x],
        artist = s[0],
        track = s[1],
        audio = s[2],
        img = s[3],
        number = parseInt(x) + 1;
    document.getElementById('title').innerText = number + ": " + artist;
    document.getElementById('song_title').innerText = track;
    var albumArt = document.getElementById('art');
    albumArt.src = img;
    albumArt.alt = artist + " " + track;
    document.getElementById('audio').src = audio;
  }
})

