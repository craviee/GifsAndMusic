let body = document.getElementsByTagName('body')[0].style;
let back = document.getElementById("go-back");
let next = document.getElementById("go-next");

let player;
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let index = 0;
let links =
[
    "o3hEYqIOfrU",
    "GlUeW7IOSFc",
    "68ugkg9RePc"
];

back.addEventListener('click', function(e) {changeGifAndMusic(-1)});
next.addEventListener('click', function(e) {changeGifAndMusic(1)});

function onYouTubeIframeAPIReady()
{
    player = new YT.Player('div2',
    {
        height: '300',
        width: '300',
        videoId: links[0],
        events:
        {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
   });
}

function onPlayerReady(event)
{
    event.target.playVideo();
}

function onPlayerStateChange(event)
{
    if (event.data == YT.PlayerState.PAUSED)
    {
        body.backgroundImage = 'url(../img/' + index +'.png)';
    }
    else if (event.data == YT.PlayerState.PLAYING)
    {
        body.backgroundImage = 'url(../img/' + index +'.gif)';
    }
}

function changeGifAndMusic(value)
{
    // returns the next index of a circular array
    index = (index + value + links.length)%links.length;
    player.loadVideoById(links[index]);
    body.backgroundImage = 'url(../img/' + index + '.png)';
}
