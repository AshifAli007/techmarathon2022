var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerab', {
        height: '390',
        width: '640',
        videoId: 'w6qtmKg8TTw',
        playerVars: {
            'playsinline': 1,
            'modestbranding': 1,
            'controls': 0,
            'rel': 0,
            'showinfo': 0,
            'ecver': 2,
            'iv-load-policy': 3,
            'disablekb': 1,
            'widget_referrer': 1,
            'controls': 0,
            'fs': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 76000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

function playPause() {
    const videoIcon = document.getElementById('video-icon');
    let playerState = player.getPlayerState();
    if (playerState == 1) {
        // Play video
        player.pauseVideo();
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    } else if (playerState == 2 || playerState == -1) {
        // Pause video
        player.playVideo();
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else if (playerState == 0) {

    }
}