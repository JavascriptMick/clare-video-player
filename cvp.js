var videos = {
  tte:["TTTE01.m4v","TTTE02.m4v","TTTE03.m4v","TTTE04.m4v"],
  wiggles:["wig01.m4v","wig02.m4v","wig03.m4v"],
  itng:[],
  music:[],
  teletubbies:[],
  ygg:[],
  hive:[]
}
var selectedVideos = videos.tte;
var currentVideo = 0;

function playFirstVideo(){
  currentVideo = 0;
  playVideo();
}

function playNextVideo(){
  currentVideo++;
  if(currentVideo > selectedVideos.length-1){
    currentVideo = 0;
  }
  playVideo();
}

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
      playFirstVideo();
      break;
    case 101:               //e
      selectedVideos = videos.tte;
      playFirstVideo();
      break;
    case 105:               //i
      selectedVideos = videos.itng;
      playFirstVideo();
      break;
    case 109:               //m
      selectedVideos = videos.music;
      playFirstVideo();
      break;
    case 116:               //t
      selectedVideos = videos.teletubbies;
      playFirstVideo();
      break;
    case 121:               //y
      selectedVideos = videos.ygg;
      playFirstVideo();
      break;
    case 98:               //b
      selectedVideos = videos.hive;
      playFirstVideo();
      break;
  }
}


