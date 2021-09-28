// window.addEventListener('load', (event) => {
//     console.log('js work !');
// });

// Listes Top Albums
const dataApiAlbums = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums");
dataApiAlbums
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();

    console.log(response);
    try {
      for (let i = 0; i < 10; i++) {
        let position = addZero(response.data[i].position);
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
        let duration = new Date((response.data[i].duration) * 1000);
        let min = duration.getMinutes();
        let sec = duration.getSeconds();
        let timer = addZero(min) + ':' + addZero(sec);

        let line = createLine(position, urlThumb, titleTrack, artistName, timer);
        addLineToListTopTracks(line);
      }
    } catch (err) {
      console.log(err);
    }

  })

  .catch((err) => {
    console.log(err)
  })


function createLine(nbr, urlThumb, titleTrack, artistName, duration) {

  let list = '<div class="lineTop">';
  list += '<div class="leftLine">';
  list += '    <div class="nbr">' + nbr + '</div>';
  list += '    <div class="thumbAlbumTopTracks"><img src="' + urlThumb + '" alt="thumb Album"></div>';
  list += '    <div class="trackInfos">';
  list += '        <div class="TitleTrack">' + titleTrack + '</div>';
  list += '        <div class="artistName blue">' + artistName + '</div>';
  list += '    </div>';
  list += '</div>';
  list += '<div class="timer">' + duration + '</div>';
  list += '</div>';

  return list;
}

function addLineToListTopAlbums(line) {
  let listAlbums = document.getElementById('listAlbums');

  listAlbums.innerHTML += line;
}
function addLineToListTopTracks(line) {
  let listTracks = document.getElementById('listTracks');

  listTracks.innerHTML += line;
}

// Slider Genre
const dataApiGenre = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre");

dataApiGenre
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);
    try {
      for (let i = 1; i < response.data.length; i++) {
        let urlImg = response.data[i].picture;
        let genreName = response.data[i].name;
        let slide = createSlide(urlImg, genreName);
        addSLideToListGenre(slide);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })



function addSLideToListGenre(slide) {
  let listGenre = document.getElementById('wrpGenre');
  listGenre.innerHTML += slide;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
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
        let slideplaylist = createSlide(UrlImage, UrlTitle);
        addSLideToListPlaylist(slideplaylist);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

function addSLideToListPlaylist(slide) {
  let listPlaylist = document.getElementById('wrpPlaylist');
  listPlaylist.innerHTML += slide;
}

function createSlide(urlthumb, nameGenre) {
  let slide = '<div class="albumSlide">';
  slide += '<div class="thumbGenre"><img src="' + urlthumb + '" alt="album"></div>';
  slide += '<div class="nameGenre">' + nameGenre + '</div>';
  slide += '</div>';
  return slide;
}

//// SLIDER JS
const sliderGenre = document.querySelector('#wrpGenre');
const sliderPlaylist = document.querySelector('#wrpPlaylist');
const sliderPodcast = document.querySelector('#wrpDescription');
slide(sliderGenre);
slide(sliderPlaylist);
slide(sliderPodcast);


function slide(el) {
  let isDown = false;
  let startX;
  let scrollLeft;
  el.addEventListener('mousedown', (e) => {
    isDown = true;
    el.style.cursor = "grabbing";
    el.classList.add('active');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  el.addEventListener('mouseup', () => {
    isDown = false;
    el.style.cursor = "grab";
    el.classList.remove('active');
  });

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1;
    el.scrollLeft = scrollLeft - walk;
    //console.log(walk);
  });
}


// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.style.cursor = "grabbing";
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// // slider.addEventListener('mouseleave', () => {
// //   isDown = false;
// //   slider.classList.remove('active');
// // });

// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.style.cursor = "grab";
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 1;
//   slider.scrollLeft = scrollLeft - walk;
//   //console.log(walk);
// });


/////// Slider Podcast

const dataApiPodcast = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts");

dataApiPodcast
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    console.log(response);
    try {
      for (let i = 1; i < response.data.length; i++) {
        let imgUrl = response.data[i].picture;
        let description = response.data[i].description;
        let slidePodcast = createSlidePodcast(imgUrl, description);
        addSLideToListPodcast(slidePodcast);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

function createSlidePodcast(urlthumbPodcast, namePodcast) {
  let slide = '<div class="radioSlide">';
  slide += '<div class="thumbRadio"><img src="' + urlthumbPodcast + '" alt="radio"></div>';
  slide += '<div class="overlay">';
  slide += '<div class="description">' + namePodcast + '</div>';
  slide += '</div>'
  slide += '</div>';

  return slide;

}

function addSLideToListPodcast(slide) {
  let listPodcast = document.getElementById('wrpDescription');
  listPodcast.innerHTML += slide;
}
