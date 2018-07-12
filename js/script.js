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

for(let i = 0; i < links.length; i++)
{
    links[i] = "https://www.youtube.com/embed/" + links[i] + "?autoplay=1&rel=0";
    imgs.push(i + ".gif");
}

back.addEventListener('click', function(e) {changeImg(-1)});
next.addEventListener('click', function(e) {changeImg(1)});
