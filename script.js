<<<<<<< HEAD
window.addEventListener('load', (event) => {
  console.log('js work !');
});
=======
<<<<<<< HEAD
// window.addEventListener('load', (event) => {
//     console.log('js work !');
// });
=======
window.addEventListener('load', (event) => {
  console.log('js work !');
});
>>>>>>> b00f7b0fb482af6a85d7604f94c72e00c5236b85
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239

// Listes Top Albums
const dataApiAlbums = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums");
dataApiAlbums
.then(async (responseData) => {
  console.log(responseData);

  const response = await responseData.json();

  console.log(response);
  try {
    for (let i = 0; i < 10 ; i++) {
      let position = response.data[i].position;
      let urlThumb = response.data[i].cover_small;
      let titleTrack = response.data[i].artist.name;
      let artistName = response.data[i].title;
      let duration = 0;
      let line = createLine(position, urlThumb, titleTrack, artistName, duration);
      addLineToListTopAlbums(line);

<<<<<<< HEAD
    console.log(response);
    try {
<<<<<<< HEAD
      for (let i = 0; i < 10; i++) {
        let position = response.data[i].position;
=======
      for (let i = 0; i < 10 ; i++) {
        let position = addZero(response.data[i].position);
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239
        let urlThumb = response.data[i].cover_small;
        let titleTrack = response.data[i].artist.name;
        let artistName = response.data[i].title;
        let duration = '';
        let line = createLine(position, urlThumb, titleTrack, artistName, duration);
        addLineToListTopAlbums(line);

      }
    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

// Listes Top Traks
const dataApiTracks = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks");

dataApiTracks
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();

    console.log(response);
    try {
      for (let i = 0; i < 10; i++) {

        let position = addZero(response.data[i].position);
        let urlThumb = response.data[i].artist.picture_small;
        let artistName = response.data[i].artist.name;
        let titleTrack = response.data[i].title;
        let duration = new Date((response.data[i].duration)*1000);
        let min = duration.getMinutes();
        let sec = duration.getSeconds();
        let timer = addZero(min)+':'+addZero(sec);

        let line = createLine(position, urlThumb, titleTrack, artistName, timer);
        addLineToListTopTracks(line);
      }
    } catch (err) {
      console.log(err);
=======
    }
<<<<<<< HEAD
  })

  .catch((err) => {
    console.log(err)
  })
=======
  } catch (err) {
    console.log(err);
  }
})

.catch((err) => {
  console.log(err)
})

// Listes Top Traks
const dataApiTracks = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks");

dataApiTracks
.then(async (responseData) => {
  console.log(responseData);

  const response = await responseData.json();

  console.log(response);
  try {
    for (let i = 0; i < 10 ; i++) {

      let position = response.data[i].position;
      let urlThumb = response.data[i].artist.picture_small;
      let artistName = response.data[i].artist.name;
      let titleTrack = response.data[i].title;
      let duration = 0;
      let line = createLine(position, urlThumb, titleTrack, artistName, duration);
      addLineToListTopTracks(line);
>>>>>>> b00f7b0fb482af6a85d7604f94c72e00c5236b85
    }
  } catch (err) {
    console.log(err);
  }
})

.catch((err) => {
  console.log(err)
})
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239

function createLine(nbr, urlThumb, titleTrack, artistName, duration) {

  let list = '<div class="lineTop">';
  list += '<div class="leftLine">';
<<<<<<< HEAD
  list += '    <div class="nbr">' + nbr + '</div>';
  list += '    <div class="thumbAlbumTopTracks"><img src="' + urlThumb + '" alt="thumb Album"></div>';
  list += '    <div class="trackInfos">';
  list += '        <div class="TitleTrack">' + titleTrack + '</div>';
  list += '        <div class="artistName blue">' + artistName + '</div>';
  list += '    </div>';
  list += '</div>';
  list += '<div class="timer">' + duration + '</div>';
=======
  list += '    <div class="nbr">'+nbr+'</div>';
  list += '    <div class="thumbAlbumTopTracks"><img src="'+urlThumb+'" alt="thumb Album"></div>';
  list += '    <div class="trackInfos">';
  list += '        <div class="TitleTrack">'+titleTrack+'</div>';
  list += '        <div class="artistName blue">'+artistName+'</div>';
  list += '    </div>';
  list += '</div>';
  list += '<div class="timer">'+duration+'</div>';
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239
  list += '</div>';

  return list;
}

<<<<<<< HEAD
function addLineToListTopAlbums(line) {
=======
function addLineToListTopAlbums(line){
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239
  let listAlbums = document.getElementById('listAlbums');

  listAlbums.innerHTML += line;
}
<<<<<<< HEAD
function addLineToListTopTracks(line) {
=======
function addLineToListTopTracks(line){
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239
  let listTracks = document.getElementById('listTracks');

  listTracks.innerHTML += line;
}

// Slider Genre
const dataApiGenre = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre");

dataApiGenre
<<<<<<< HEAD
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);
    try {
      for (let i = 1; i < response.data.length; i++) {
        let urlImg = response.data[i].picture;
        let genreName = response.data[i].name;
        let slide = createSlideAlbum(urlImg, genreName);
        addSLideToListGenre(slide);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

function createSlideAlbum(urlthumb, nameGenre) {
  let slide = '<div class="albumSlide">';
  slide += '<div class="thumbGenre"><img src="' + urlthumb + '" alt="album"></div>';
  slide += '<div class="nameGenre">' + nameGenre + '</div>';
  slide += '</div>';

  return slide;

}

function addSLideToListGenre(slide) {
  let listGenre = document.getElementById('wrpSlider');
  listGenre.innerHTML += slide;
}

// slider playlist
const dataApiPlaylist = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists");

dataApiPlaylist
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);

    try {
      for (let i = 0; i < response.data.length; i++) {
        let UrlImage = response.data[i].picture;
        let UrlTitle = response.data[i].title;
        let slideplaylist = createSlideAlbum(UrlImage, UrlTitle);
        addSLideToListPlaylist(slideplaylist);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

function createSlideAlbum(urlthumb, namePlaylist) {
  let slidep = '<div class="albumSlide">';
  slidep += '<div class="thumbPlaylist"><img src="' + urlthumb + '" alt="playlist"></div>';
  slidep += '<div class="namePlaylist">' + namePlaylist + '</div>';
  slidep += '</div>';

  return slidep;

}

function addSLideToListPlaylist(slidep) {
  let listGenre = document.getElementById('wrpPlaylist');
  listGenre.innerHTML += slidep;
}
=======
    .then(async (responseData) => {
        console.log(responseData);

        const response = await responseData.json();
        console.log(response);
        try {
            for (let i = 1; i < response.data.length; i++) {
                let urlImg = response.data[i].picture;
                let genreName = response.data[i].name;
                let slide = createSlideAlbum(urlImg, genreName);
                addSLideToListGenre(slide);
            }
            
        } catch (err) {
            console.log(err);
        }
    })

    .catch((err) => {
        console.log(err)
    })

function createSlideAlbum(urlthumb, nameGenre){
    let slide = '<div class="albumSlide">';
    slide += '<div class="thumbGenre"><img src="'+urlthumb+'" alt="album"></div>';
    slide += '<div class="nameGenre">'+nameGenre+'</div>';
    slide += '</div>';
    return slide;
}

function addSLideToListGenre(slide){
    let listGenre =  document.getElementById('wrpSlider');
    listGenre.innerHTML += slide;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//// SLIDER JS
const slider = document.querySelector('#wrpAlbum');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = "grabbing";
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = "grab";
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
  //console.log(walk);
});
>>>>>>> 9acfc0bf89a8c8706d4a4b3cfb1c1bcabe94f239
