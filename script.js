let currentsong = new Audio();
let playsong = document.getElementById("play_ppn");
let duration = document.querySelector(".duration");

function convertSecondsToMinSec(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = remainingSeconds.toString().padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
}
setInterval(() => {
    let src1;
    if (currentsong.currentTime == currentsong.duration) {
        if (currentsong.src.length == 52) {
            src1 = parseInt(currentsong.src.slice(47, 48));
        }
        else {
            src1 = parseInt(currentsong.src.slice(47, 49));
        }
        if(src1==12){
        currentsong.src = ("/songs/playsong1.mp3");
        document.querySelector(".playcover").src = "/cover/cover1.jpg";
        currentsong.play();}
        else{
            src1 = src1 + 1;
            currentsong.src = (`/songs/playsong${src1}.mp3`);
            document.querySelector(".playcover").src = `/cover/cover${src1}.jpg`;
            currentsong.play();
        }
    }
}, 100);

setInterval(() => {
    let src2;
    let cardsrc ;
        if (currentsong.src.length == 52) {
            src2 = parseInt(currentsong.src.slice(47, 48));
        }
        else {
            src2 = currentsong.src.slice(47, 49)
        }
        if(currentsong.paused){

        }
        else{
            cardsrc =  `playsong${src2}_1`;
        document.querySelector(".songname").innerHTML = document.getElementById(cardsrc).querySelector(".infoname").innerHTML;
        document.querySelector(".singer").innerHTML = document.getElementById(cardsrc).querySelector(".infosing").innerHTML;
        function sort(e) {
            let divparent = document.querySelector(".songlist");
            let divchild = document.getElementById(e);
            divparent.prepend(divchild);
        }
        sort(cardsrc);
        let play20 = document.getElementById(cardsrc);
            let parent20 = play20.parentElement
        play20.lastElementChild.src = "/svg/pause.svg";
        let divs20 = document.querySelectorAll(".song");
        divs20[1].lastElementChild.src = "/svg/play1.svg";
            
        
        }
        

}, 1);

function getId(e) {
    let play = document.getElementById(e);
    let song = e.slice(0, e.length - 2);
    let parent = play.parentElement;
    parent.addEventListener("click", () => {
        play.lastElementChild.src = "svg/pause.svg";
        if (parent.firstElementChild != play) {
            let divs = document.querySelectorAll(".song");
            divs.forEach(div => {
                div.lastElementChild.src = "svg/play1.svg";
            })
        }

    })


    function seekbar(play) {
        function playcoverfunc() {
            let playcover;
            if (e.length == 12) {
                playcover = e.slice(8, 10);
            }
            else if (e.length == 11) {
                playcover = e.slice(8, 9);
            }
            document.querySelector(".playcover").src = `/cover/cover${playcover}.jpg`;
        }
        let name = play.querySelector(".infoname").innerHTML;
        let singer = play.querySelector(".infosing").innerHTML;
        document.querySelector(".songname").innerHTML = name;
        document.querySelector(".singer").innerHTML = singer;
        playcoverfunc();
    }
    function sort(e) {
        let divparent = document.querySelector(".songlist");
        let divchild = document.getElementById(e);
        divparent.prepend(divchild);
    }
    currentsong.src = (`/songs/${song}.mp3`);
    function playAudio() {
        currentsong.play();
        playsong.src = "svg/pause.svg"
        document.querySelector(".playbar").style.display = "block";
        document.querySelector(".playbar").style.transition = "all ease 1000ms";
        // document.querySelector(".right").style.height = "calc(98vh - 61px)";
        // document.querySelector(".left").style.height = "calc(100vh - 61px)";
        function adjustHeight() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 700) {
                document.querySelector(".right").style.height = "83vh";
                document.querySelector(".left").style.height = "100vh";
                document.querySelector(".playbar").style.display = "none";
            } else if (screenWidth >= 700 && screenWidth < 1500) {
                document.querySelector(".right").style.height = "calc(98vh - 70px)";
                document.querySelector(".left").style.height = "calc(100vh - 75px)";
                document.querySelector(".songlist").style.height = "80%";
            } else {
                document.querySelector(".right").style.height = "calc(98vh - 61px)";
                document.querySelector(".left").style.height = "calc(100vh - 61px)";
            }
        }

        adjustHeight()



        // document.querySelector(".playbar").addEventListener("mouseover", () => {
        //     document.querySelector(".playbar").style.opacity = 1;
        //     document.querySelector(".playbar").style.transition = "all ease 700ms";
        //     document.querySelector(".right").style.height = "calc(98vh - 61px)";
        //     document.querySelector(".left").style.height = "calc(100vh - 61px)";
        // })
    }

    play.addEventListener('click', playAudio(), sort(e), seekbar(play));

}
function getId1(e1) {
    let play = document.getElementById(e1);
    let song = e1.slice(0, e1.length - 2);


    let playcover;
    function seekbar() {
        let id_no;
        if (e1.length == 12) {
            id_no = "card" + e1.slice(8, 10);
            playcover = e1.slice(8, 10);

        }
        else if (e1.length == 11) {
            id_no = "card" + e1.slice(8, 9);
            playcover = e1.slice(8, 9);
        }
        document.querySelector(".playcover").src = `/cover/cover${playcover}.jpg`;
        let card = document.getElementById(id_no);
        let name = card.querySelector(".cardsongname").innerHTML;
        let singer = card.querySelector(".cardsinger").innerHTML
        document.querySelector(".songname").innerHTML = name;
        document.querySelector(".singer").innerHTML = singer;
    }
    function sort1(e1) {
        let con = song + "_1"
        let divparent = document.querySelector(".songlist");
        let divchild = document.getElementById(con);
        divparent.prepend(divchild);
    }
    function just() {

        let justme = e1.slice(0, e1.length - 1) + "1";
        let justme1 = document.getElementById(justme);
        let justme2 = justme1.lastElementChild;

        let parent = justme1.parentElement;

        if (parent.firstElementChild != justme1) {
            let divs = document.querySelectorAll(".song");
            divs.forEach(div => {
                div.lastElementChild.src = "svg/play1.svg";
            });
        }
        justme2.src = "svg/pause.svg";
    }

    currentsong.src = (`/songs/${song}.mp3`)
    function playAudio() {
        currentsong.play();
        playsong.src = "svg/pause.svg"
        document.querySelector(".playbar").style.display = "block";
        document.querySelector(".playbar").style.transition = "all ease 400ms";
        document.querySelector(".right").style.height = "calc(98vh - 61px)";
        document.querySelector(".left").style.height = "calc(100vh - 70px)";
        function adjustHeight() {
            const screenWidth = window.innerWidth;

            if (screenWidth < 700) {
                // document.querySelector(".right").style.height = "calc(98vh - 70px)";
                document.querySelector(".right").style.height = "83vh";
                // document.querySelector(".left").style.height = "95vh";
            } else if (screenWidth >= 700 && screenWidth < 1500) {
                document.querySelector(".right").style.height = "calc(98vh - 70px)";
                document.querySelector(".left").style.height = "calc(100vh - 75px)";
                document.querySelector(".songlist").style.height = "80%";
            } else {
                document.querySelector(".right").style.height = "calc(98vh - 61px)";
                document.querySelector(".left").style.height = "calc(100vh - 61px)";
            }
        }

        adjustHeight()
        // document.querySelector(".playbar").addEventListener("mouseover", () => {
        //     document.querySelector(".playbar").style.opacity = 1;
        //     document.querySelector(".playbar").style.transition = "all ease 700ms";
        //     document.querySelector(".right").style.height = "calc(98vh - 61px)";
        //     document.querySelector(".left").style.height = "calc(100vh - 61px)";
        // })
    }

    play.addEventListener('click', playAudio(), seekbar(), just());
    sort1(e1);
}

playsong.addEventListener('click', function () {
    let playme = document.querySelector(".songlist").firstElementChild;
    let pauseme = playme.lastElementChild;
    if (currentsong.paused) {
        currentsong.play();
        playsong.src = "/svg/pause.svg"
        pauseme.src = "/svg/pause.svg"
    }

    else {
        currentsong.pause();
        playsong.src = "/svg/play1.svg"
        pauseme.src = "/svg/play1.svg"
    }
})

currentsong.addEventListener("timeupdate", () => {

    duration.innerHTML = `${convertSecondsToMinSec(currentsong.currentTime)}/${convertSecondsToMinSec(currentsong.duration)}`;
})
// setInterval(() => {
//     document.querySelector(".playbar").style.opacity = 0;
//     document.querySelector(".playbar").style.transition = "all ease 400ms";
//     document.querySelector(".right").style.height = "calc(98vh - 5px)";
//     document.querySelector(".left").style.height = "calc(100vh - 5px)";
// }, 10000);

// function check(){
//     let check1 = document.querySelectorAll(".song")[1];
//     check1.lastElementChild.src = "svg/play1.svg"
// }



let runseekbar = document.querySelector(".runseekbar");
currentsong.ontimeupdate = function () {
    runseekbar.style.width = Math.floor((currentsong.currentTime * 100) / currentsong.duration) + "%";
    document.querySelector(".circle").style.left = runseekbar.style.width;
    runseekbar.addEventListener("click", (e1) => {
        runseekbar.style.width = Math.floor((currentsong.currentTime * 100) / currentsong.duration) + "%";
        let percent1 = (e1.offsetX / e1.target.getBoundingClientRect().width) * 100
        currentsong.currentTime = (currentsong.duration * percent1) / 100;
    })
}

document.querySelector(".seekbar").addEventListener('click', (event) => {
    const seekbarRect = document.querySelector(".seekbar").getBoundingClientRect();
    const clickX = event.clientX - seekbarRect.left;
    const seekbarWidth = document.querySelector(".seekbar").offsetWidth;
    const clickPercent = clickX / seekbarWidth;
    currentsong.currentTime = currentsong.duration * clickPercent;
});

const screenWidth1 = window.innerWidth;
if (screenWidth1 < 700) {

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".playbar").style.display = "none";
        // document.querySelector(".left").style.display = "block";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".header").style.justifyContent = "flex-end";
        document.querySelector(".cross").style.display = "block";
        var div2 = document.getElementById('div2');
        div2.style.display = 'block'; 
                setTimeout(() => div2.classList.add('show'), 10);
    })
    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.height = "96vh";
        document.querySelector(".playbar").style.display = "block";
        // document.querySelector(".left").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
        document.querySelector(".header").style.justifyContent = "space-between";
        document.querySelector(".cross").style.display = "none";
        var div2 = document.getElementById('div2');
        div2.classList.remove('show');
        setTimeout(() => div2.style.display = 'none', 500);
    })

}

document.querySelector(".loop").addEventListener("click",()=>{
    currentsong.currentTime = 0;
})
document.querySelector(".nextsong").addEventListener("click",()=>{
    document.getElementById("play_ppn").src = "/svg/pause.svg";
    let nextcard = document.querySelector(".songlist").firstElementChild;
    nextcard.lastElementChild.src = "/svg/pause.svg";
    if (currentsong.src.length == 52) {
        src1 = parseInt(currentsong.src.slice(47, 48));
    }
    else {
        src1 = parseInt(currentsong.src.slice(47, 49));
    }
    if(src1==12){
    currentsong.src = ("/songs/playsong1.mp3");
    document.querySelector(".playcover").src = "/cover/cover1.jpg";
    currentsong.play();}
    else{
        src1 = src1 + 1;
        currentsong.src = (`/songs/playsong${src1}.mp3`);
        document.querySelector(".playcover").src = `/cover/cover${src1}.jpg`;
        currentsong.play();
    }
})



    