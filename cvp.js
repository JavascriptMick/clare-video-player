var videos = {
  ttte:["TTTE01.m4v","TTTE02.m4v","TTTE03.m4v","TTTE04.m4v"],
  wiggles:["WIGGLES01.mp4","WIGGLES02.mp4","WIGGLES03.mp4","WIGGLES04.mp4","WIGGLES05.mp4","WIGGLES06.mp4","WIGGLES07.mp4","WIGGLES08.mp4","WIGGLES09.mp4","WIGGLES10.mp4","WIGGLES11.mp4"],
  wig:["wig01.m4v","wig02.m4v","wig03.m4v"],
  music:[],
  bear:["BEAR01.mp4","BEAR02.mp4","BEAR03.mp4","BEAR04.mp4","BEAR05.mp4","BEAR06.mp4","BEAR07.mp4","BEAR08.mp4","BEAR09.mp4","BEAR10.mp4","BEAR11.mp4","BEAR12.mp4","BEAR13.mp4","BEAR14.mp4","BEAR15.mp4","BEAR16.mp4"],
  gabba:["GABBA01.mp4","GABBA02.mp4","GABBA03.mp4","GABBA04.mp4","GABBA05.mp4","GABBA06.mp4","GABBA07.mp4","GABBA08.mp4","GABBA09.mp4","GABBA10.mp4","GABBA11.mp4","GABBA12.mp4","GABBA13.mp4","GABBA14.mp4","GABBA15.mp4","GABBA16.mp4","GABBA17.mp4","GABBA18.mp4","GABBA19.mp4","GABBA20.mp4"],
  hive:["HIVE01.mp4","HIVE02.mp4"]
}
var selectedVideos = videos.hive;
state = "start";
var currentVideo = 0;
var gabbaIndex = -1;
var wigglesIndex = -1;
var bearIndex = -1;
var ttteIndex = -1;
var wigIndex = -1;

function playVideo(){
  var video = document.getElementById("Video1");
  if(selectedVideos[currentVideo]){
    video.src = selectedVideos[currentVideo];
    video.load();
    video.play();     
  }else{
    video.src = "";
  }
  video.webkitRequestFullscreen();
}


function vidpause(){
  var video = document.getElementById("Video1");
  video.pause();
}

function restartVideo() {
  var video = document.getElementById("Video1");
  video.currentTime = 0;
}

function captureKeyStroke(){
  switch(window.event.keyCode){
    case 32:                //space
      playNextVideo();
      break;
    case 119:               //w
      selectedVideos = videos.wiggles;
      wigglesIndex++;
      if(wigglesIndex > selectedVideos.length-1){
            wigglesIndex = 0;
      }
      currentVideo = wigglesIndex;
      playVideo();
      break;
    case 115:               //s
      vidpause();
      break;
    case 105:               //i
      selectedVideos = videos.wig;
      wigIndex++;
      if(wigIndex > selectedVideos.length-1){
            wigIndex = 0;
      }
      currentVideo = wigIndex;
      playVideo();
      break;
    case 109:               //m
      selectedVideos = videos.ttte;
      ttteIndex++;
      if(ttteIndex > selectedVideos.length-1){
            ttteIndex = 0;
      }
      currentVideo = ttteIndex;
      playVideo();
      break;
    case 100:               //d
      selectedVideos = videos.bear;
      bearIndex++;
      if(bearIndex > selectedVideos.length-1){
            bearIndex = 0;
      }
      currentVideo = bearIndex;
      playVideo();
      break;
    case 97:               //a
      selectedVideos = videos.gabba;
      gabbaIndex++;
      if(gabbaIndex > selectedVideos.length-1){
            gabbaIndex = 0;
      }
      currentVideo = gabbaIndex;
      playVideo();
      break;
    case 98:               //b
     
      break;
  }
}


