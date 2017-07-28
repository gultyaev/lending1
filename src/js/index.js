$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    captions: true,
    controls: true,
    speed: 1500,
    preload: 'visible',
  });

  if (!sessionStorage.getItem('time')) {
    sessionStorage.setItem('time', moment().add(20, 'minutes').format('x'));
  }

  const endTime = sessionStorage.getItem('time');

  let availableTime;

  let interval = setInterval(() => {
    updateAvailableTime();
    let time = {
      hours: (availableTime.hours() < 10) ? '0' + availableTime.hours() : availableTime.hours(),
      minutes: (availableTime.minutes() < 10) ? '0' + availableTime.minutes() : availableTime.minutes(),
      seconds: (availableTime.seconds() < 10) ? '0' + availableTime.seconds() : availableTime.seconds(),
      warn: (availableTime.minutes() < 5)
    };

    if (availableTime === 0) {
      clearInterval(interval);
    }

    printTime(
      ( availableTime > 0 ) ? `<div ${(time.warn) ? 'class="timer__warn"':""}>${time.hours}:${time.minutes}:${time.seconds}</div>` : `<p class='timer__out'>Ваше время истекло</p>`
    );
  }, 1000);

  function updateAvailableTime () {
    availableTime = moment.duration(endTime - moment().format('x'));
  }

  function printTime(time) {
    $('.timer').html(time);
  }
});

function scrollToForm() {
  let y = $('.benefits-offer--title').position().top;
  window.scrollTo(0,y);
}

let play = $('#video-thumbnail').on('click', () => {
  $('#video-thumbnail').addClass('none');
  // $('#video').attr("autoplay", "12");
  play.off('click');
});

let tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  let startPlay = $('#video-thumbnail').on("click", function() {
    player.playVideo();
    startPlay.off('click');
  });

}