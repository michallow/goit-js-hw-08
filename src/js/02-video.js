import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const updateTimeInLocalStorage = throttle((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', (event) => {
    const currentTime = event.seconds;
    updateTimeInLocalStorage(currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
    console.log(savedTime);
}

player.on('play', () => {
    console.log('played the video!');
});

player.getVideoTitle().then((title) => {
    console.log('title:', title);
});

const onPlay = (timeupdate) => {
    console.log('played the video!');
};

player.on('play', onPlay);

player.off('play');