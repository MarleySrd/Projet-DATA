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