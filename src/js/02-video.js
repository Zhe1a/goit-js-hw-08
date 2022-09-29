// export const vidio = console.log(5);
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds)
}
function SETLocalStorage() {
    if(!localStorage.getItem('videoplayer-current-time')){
      return
    }
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}
SETLocalStorage()

