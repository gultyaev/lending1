"use strict";function scrollToForm(){var e=$(".benefits-offer--title").position().top;window.scrollTo(0,e)}function onYouTubePlayerAPIReady(){player=new YT.Player("video",{events:{onReady:onPlayerReady}})}function onPlayerReady(e){var t=$("#video-thumbnail").on("click",function(){player.playVideo(),t.off("click")})}$(document).ready(function(){function e(){n=moment.duration(o-moment().format("x"))}function t(e){$(".timer").html(e)}$(".bxslider").bxSlider({auto:!0,captions:!0,controls:!0,speed:1500}),$(".loader").remove(),sessionStorage.getItem("time")||sessionStorage.setItem("time",moment().add(20,"minutes").format("x"));var o=sessionStorage.getItem("time"),n=void 0,i=setInterval(function(){e();var o={hours:n.hours()<10?"0"+n.hours():n.hours(),minutes:n.minutes()<10?"0"+n.minutes():n.minutes(),seconds:n.seconds()<10?"0"+n.seconds():n.seconds(),warn:n.minutes()<5};0===n&&clearInterval(i),t(n>0?"<div "+(o.warn?'class="timer__warn"':"")+">"+o.hours+":"+o.minutes+":"+o.seconds+"</div>":"<p class='timer__out'>Ваше время истекло</p>")},1e3)});var play=$("#video-thumbnail").on("click",function(){$("#video-thumbnail").addClass("none"),play.off("click")}),tag=document.createElement("script");tag.src="//www.youtube.com/player_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player=void 0;