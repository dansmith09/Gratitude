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

function journalEntriesRoute(event) {
  event.preventDefault;
  document.location.replace('/journal');
}

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

$(".my_audio").trigger('load');
function play_audio(task) {
  if(task == 'play'){
       $(".my_audio").trigger('play');
  }
  if(task == 'stop'){
       $(".my_audio").trigger('pause');
       $(".my_audio").prop("currentTime",0);
  }
}

playlist = {
  'song_1' : 'audio/splat.mp3',
  'song_2' : 'audio/saw.mp3',
  'song_3' : 'audio/marbles.mp3',
  'song_4' : 'audio/seagulls.mp3',
  'song_5' : 'audio/plane.mp3'
}

keys = Object.keys(playlist);
$('.my_audio').append("<source id='sound_src' src=" + playlist[keys[0]] + " type='audio/mpeg'>");
