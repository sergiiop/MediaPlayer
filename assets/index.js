import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector("button");
const button2 = document.querySelector("#Unmute");

button.onclick = () => player.toggle_play();
button2.onclick = () => player.toggle_mute();
