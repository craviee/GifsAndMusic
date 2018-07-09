function changeImg(value)
{
    index += value;
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

    video.src = links[index];
    body.backgroundImage = 'url(./img/' + imgs[index] +')';
}

let body = document.getElementsByTagName('body')[0].style;
let back = document.getElementById("go-back");
let next = document.getElementById("go-next");
let video = document.getElementById('video');

body.backgroundImage = 'url(./img/1.gif)';
back.disabled = true;

var index = 0;

var links =
[
    "https://www.youtube.com/embed/o3hEYqIOfrU?autoplay=1&rel=0",
    "https://www.youtube.com/embed/GlUeW7IOSFc?autoplay=1&rel=0"
];

var imgs =
[
    "1.gif",
    "2.gif"
];

back.addEventListener('click', function(e) {changeImg(-1)});
next.addEventListener('click', function(e) {changeImg(1)});
