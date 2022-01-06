document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() 
{
 player = document.getElementById('video_player');
 player.controls = false;
}
function play_vid()
{
 player.play();
}
function pause_vid()
{
 player.pause();
}
function stop_vid() 
{
 player.pause();
 player.currentTime = 0;
}
function rewind_vid()
{
    player.rewind=document.getElementById("rewind_button").value;
    player.currentTime = -5;
}
function forward_vid()
{
    player.forward=document.getElementById("forward_button").value;
    player.currentTime = +5;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}