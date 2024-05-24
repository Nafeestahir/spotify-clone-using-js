let inputBox = document.querySelector('.input-box');
let searchIcon = document.querySelector('.search');
let closeIcon = document.querySelector('.close-icon');

searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
});
closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
});

// hamburger
function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let card = document.getElementById("cards-block");
let songImage = document.getElementById("voluImage");
let songs = document.getElementById("songs");
let SongName = document.getElementById("songName");
let play_Pause = document.getElementById("pause");
let volume = document.getElementById("range");
let volumeImage = document.getElementById("rangImage");
let isPlaying = true;
let promise = fetch("https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks");
promise.then((response) => {
    return response.json();
}).then((value) => {
    for (let index = 0; index < value.length; index++) {
        const Name = value[index].name;
        card.innerHTML += ` <div class="card" id="card" onclick="myfunction(${index})">
        <img src="assets/images/119_168.jpg"  >
        <img src="assets/images/23_136.png">
        <div class="content">
            <p>${Name.slice(0, 7)}</p>
        </div>
         </div>`;
    }
});

function myfunction(data) {
    let promise = fetch("https://danisha18.sg-host.com/wp-json/mp3-tracks-api/v1/tracks");
    promise.then((response) => {
        console.log(response);
        return response.json();
    }).then((value) => {
        // console.log(data);
        for (let i = data; i <= data; i++) {
            const element = value[i].url;
            const name = value[i].name.slice(0, 7);
            songs.src = element;
            SongName.innerText = name;
            songImage.src = "assets/images/119_168.jpg";
        }
    });
}

function togglePlay() {
    isPlaying ? songs.pause() : songs.play();
};
songs.onplaying = function () {
    isPlaying = true;
    play_Pause.src = "assets/images/pause.png";
};
songs.onpause = function () {
    isPlaying = false;
    play_Pause.src = 'assets/images/play-buttton.png';
};

volume.addEventListener(("mousemove"), (event) => {
    songs.volume = event.target.value / 100;
    if (songs.volume == 0) {
        volumeImage.src = "assets/images/mute.png";
    }
    else {
        volumeImage.src = "assets/images/speaker.png";
    }
    volumeImage.addEventListener(("click"), () => {
    });
});
volumeImage.addEventListener("click", function () {
    songs.muted = !songs.muted;
    volumeImage.src = songs.muted ? "assets/images/mute.png" : "assets/images/speaker.png";
});
