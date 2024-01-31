import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const currentTime = throttle(data => {
  localStorage.setItem('video-player-current-time', data.seconds);
}, 1000);

player.on('timeupdate', currentTime);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}
