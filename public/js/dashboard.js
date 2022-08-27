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
if (0<slider.value<10) {
suggestion.textContent = "go for a walk";
} else if (10<slider.value<=20){
  suggestion.textContent = "go for a hike";
} /*else if (20<sliderValue<=30){
  suggestion.textContent = "go for a swim";
} else if (30<sliderValue<=40){

} else if (40<sliderValue<=50){

} else if (50<sliderValue<=60){

} else if (60<sliderValue<=70){

} else if (70<sliderValue<=80){

} else if (80<sliderValuee<=90){

} */ 
else {
  suggestion.textContent = "go for a swim";
}
};

function resetSlider(event){
  event.preventDefault;
  output.textContent = 50;
  slider.value = 50;
  suggestion.textContent = '';
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
