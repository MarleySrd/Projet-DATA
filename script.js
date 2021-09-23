<<<<<<< HEAD
const dataApiAlbums = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/albums");

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
        if(position < 10){
          
        }


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

  const dataApiTracks = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks");

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
      }
    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })

  function createLine(position, urlThumb, titleTrack, artistName, duration) {

    let list = '<div class="lineTop">';
    list += '<div class="leftLine">';
    list += '    <div class="nbr">'+position+'</div>';
    list += '    <div class="thumbAlbumTopTracks"><img src="'+urlThumb+'" alt="thumb Album"></div>';
    list += '    < class="trackInfos">';
    list += '        <div class="TitleTrack">'+titleTrack+'</div>';
    list += '        <div class="artistName blue">'+artistName+'</div>';
    list += '    </div>';
    list += '</div>';
    list += '<div class="timer">'+duration+'</div>';
    list += '</div>';

    return list;
}

function addLineToListTopAlbums(line){
    let listAlbums = document.getElementById('listAlbums');

    listAlbums.innerHTML += line;
}
function addLineToListTopTracks(line){
    let listTracks = document.getElementById('listTracks');

    listTracks.innerHTML += line;
}
=======
window.addEventListener('load', (event) => {
    console.log('js work !');
});

//
function createLineTop(nbr, urlThumb, titleTrack, artistName, duration) {

    let list = '<div class="lineTop">';
    let list += '<div class="leftLine">';
    let list += '    <div class="nbr">'+nbr+'</div>';
    let list += '    <div class="thumbAlbumTopTracks"><img src="'+urlThumb+'" alt="thumb Album"></div>';
    let list += '    < class="trackInfos">';
    let list += '        <div class="TitleTrack">'+titleTrack+''</div>';
    let list += '        <div class="artistName blue">'+artistName+'</div>';
    let list += '    </div>';
    let list += '</div>';
    let list += '<div class="timer">'+duration''</div>';
    let list += '</div>';

    return list;

}

function creatListTopAlbum(){

}
>>>>>>> c9e3eedbe6f2d252fedc33a2f83f2536c720e5e6
