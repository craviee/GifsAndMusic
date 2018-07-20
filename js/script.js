function changeImg(value)
{
    index += value;
    player.loadVideoById(links[index]);
    if (index === 0)
    {
        back.disabled = true;
        next.disabled = false;
    }
    else if (index === links.length - 1)
    {
        back.disabled = false;
        next.disabled = true;
    }
    else
    {
        back.disabled = false;
        next.disabled = false;
    }

    video.src = links[index];
    body.backgroundImage = 'url(../img/' + imgs[index] +')';
}

let body = document.getElementsByTagName('body')[0].style;
let back = document.getElementById("go-back");
let next = document.getElementById("go-next");
let video = document.getElementById('video');

let index = 0;
let imgs = [];
let links =
[
    "o3hEYqIOfrU",
    "GlUeW7IOSFc",
    "68ugkg9RePc"
];

var tag = document.createElement('script');

     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     // 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     var player;
     function onYouTubeIframeAPIReady() {
       player = new YT.Player('div2', {
         height: '300',
         width: '300',
         videoId: 'o3hEYqIOfrU',
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });
     }

     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       event.target.playVideo();
     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     // var done = false;
     function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PAUSED) {
         // done = true;
         body.backgroundImage = 'url(../img/' + index +'.png)';
       }
       else if (event.data == YT.PlayerState.PLAYING)
       {
         body.backgroundImage = 'url(../img/' + index +'.gif)';
       }
     }


for(let i = 0; i < links.length; i++)
{
    // links[i] = "https://www.youtube.com/embed/" + links[i] + "?enablejsapi=1&autoplay=1&rel=0";
    // imgs.push(i + ".gif");
}

back.addEventListener('click', function(e) {changeImg(-1)});
next.addEventListener('click', function(e) {changeImg(1)});
