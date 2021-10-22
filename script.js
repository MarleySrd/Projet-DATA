/////////////////////////////////////////////////////
/// Listes Top Tracks                             ///
/////////////////////////////////////////////////////
DZ.api('/chart/tracks', function (responseTenTracks) {
  jsonResponse = responseTenTracks.tracks;
  let response = jsonResponse.data;
  makeListTracks(response);
});

function makeListTracks(response){
  response.forEach(element => {
    let position = addZero(element.position);
    let urlThumb = element.album.cover_small;
    let artistName = element.artist.name;
    let titleTrack = element.title;
    let duration = new Date((element.duration) * 1000);
    let min = duration.getMinutes();
    let sec = duration.getSeconds();
    let timer = addZero(min) + ':' + addZero(sec);

    let line = createLine(position, urlThumb, titleTrack, artistName, timer);
    addLineToListTopTracks(line);
  });
}

function addLineToListTopTracks(line){
  let listTracks = document.getElementById('listTracks');
  listTracks.innerHTML += line;
}

/////////////////////////////////////////////////////
/// Listes Top Albums                             ///
/////////////////////////////////////////////////////
DZ.api('/chart/albums', function (responseTenAlbums) {
  jsonResponse = responseTenAlbums.albums;
  let response = jsonResponse.data;
  makeListAlbums(response);
});

function makeListAlbums(response){
  response.forEach(element => {
    let position = addZero(element.position);
    let urlThumb = element.cover_small;
    let artistName = element.artist.name;
    let titleTrack = element.title;
    let duration = '';
    let line = createLine(position, urlThumb, titleTrack, artistName, duration);
    addLineToListTopAlbums(line);

  });
}

function addLineToListTopAlbums(line){
  let listAlbums = document.getElementById('listAlbums');
  listAlbums.innerHTML += line;
}


///////////////////////////////////////////////////////////////////////////// Create line of top list
function createLine(nbr, urlThumb, titleTrack, artistName, duration) {
  let list = '<div class="wrapperLine">';
  list += ' <div class="lineTop">';
  list += '   <div class="leftLine">';
  list += '    <div class="nbr">'+nbr+'</div>';
  list += '    <div class="thumbAlbumTopTracks"><img src="'+urlThumb+'" alt="thumb Album"></div>';
  list += '     <div class="trackInfos">';
  list += '        <div class="TitleTrack">'+titleTrack+'</div>';
  list += '        <div class="artistName blue">'+artistName+'</div>';
  list += '     </div>';
  list += '   </div>';
  list += '   <div class="timer">'+duration+'</div>';
  list += ' </div>';
  list += ' <div class="bkgLineTop"></div>';
  list += '</div>';  

  return list;
}

/////////////////////////////////////////////////////
/// Slider Genre                                  ///
/////////////////////////////////////////////////////
DZ.api('/genre', function (responseGenre) {
  responseGenre.data.forEach(element => {
    let urlImg = element.picture;
    let genreName = element.name;
    let slide = createSlide(urlImg, genreName);
    addSLideToListGenre(slide);
  });
});

function addSLideToListGenre(slide) {
  let listGenre = document.getElementById('wrpGenre');
  listGenre.innerHTML += slide;
}

/////////////////////////////////////////////////////
/// banner artist                                 ///
/////////////////////////////////////////////////////
DZ.api('/chart/artists', function (responseArtists) {
  let artistData = responseArtists.artists.data[0];
  const urlBackground = artistData.picture_xl;
  const urlName = artistData.name.toUpperCase();
  
  let discover = document.querySelector('#discover div')
  document.getElementById('discover').style.cssText = "background-image: url('" + urlBackground + "');";
  discover.innerHTML = '<button class="play-icon"><img src="img/iconPlay.svg" alt="bouton jouer"></button>';
  discover.innerHTML += "<h2>Découvrez l'artiste du moment <br/>" + urlName + "</h2>";
});

/////////////////////////////////////////////////////
/// slider playlist                               ///
/////////////////////////////////////////////////////
DZ.api('/chart/playlists', function (responsePlaylist) {
      //console.log(responsePlaylist.playlists);
      responsePlaylist.playlists.data.forEach(element => {
      let UrlImage = element.picture;
      let UrlTitle = element.title;
      let slideplaylist = createSlide(UrlImage, UrlTitle);
      addSLideToListPlaylist(slideplaylist);
      // console.log(element);
  });
});


function addSLideToListPlaylist(slide){
  let listPlaylist =  document.getElementById('wrpPlaylist');
  listPlaylist.innerHTML += slide;
}

/////////////////////////////////////////////////////
/// slider podcast radio                          ///
/////////////////////////////////////////////////////
DZ.api('/chart/0/podcasts', function (responsePoadcast) {

  responsePoadcast.data.forEach(element => {
    console.log(element);
    let imgUrl = element.picture;
    let description = element.description;
    let slidePodcast = createSlidePodcast(imgUrl, description);
    addSLideToListPodcast(slidePodcast);
  });
});


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

/// UTILITAIRES
function createLine(nbr, urlThumb, titleTrack, artistName, duration) {
  let list = '<div class="wrapperLine">';
  list += ' <div class="lineTop">';
  list += '   <div class="leftLine">';
  list += '    <div class="nbr">'+nbr+'</div>';
  list += '    <div class="thumbAlbumTopTracks"><img src="'+urlThumb+'" alt="thumb Album"></div>';
  list += '     <div class="trackInfos">';
  list += '        <div class="TitleTrack">'+titleTrack+'</div>';
  list += '        <div class="artistName blue">'+artistName+'</div>';
  list += '     </div>';
  list += '   </div>';
  list += '   <div class="timer">'+duration+'</div>';
  list += ' </div>';
  list += ' <div class="bkgLineTop"></div>';
  list += '</div>';  

  return list;
}

function createSlide(urlthumb, nameGenre){
  let slide = '<div class="slide">';
  slide += '<div class="thumb"><img src="'+urlthumb+'" alt="album"></div>';
  slide += '<div class="name">'+nameGenre+'</div>';
  slide += '</div>';
  return slide;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


/////////////////////////////////////////////////////
/// SLIDER JS                                     ///
/////////////////////////////////////////////////////
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

/// create slide
function createSlide(urlthumb, nameGenre){
  let slide = '<div class="slide">';
  slide += '<div class="thumb"><img src="'+urlthumb+'" alt="album"></div>';
  slide += '<div class="name">'+nameGenre+'</div>';
  slide += '</div>';
  return slide;
}

/////////////////////////////////////////////////////
/// UTILITAIRES                                   ///
/////////////////////////////////////////////////////


/// format 00 number
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}