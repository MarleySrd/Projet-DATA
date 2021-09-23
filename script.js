const dataApi = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre");

dataApi
    .then(async (responseData) => {
        console.log(responseData);

        const response = await responseData.json();
        console.log(response);
        try {
            for (let i = 1; i < response.length; i++) {
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

    function createSlideAlbum(imgThumb, nameGenre){
        let slide = '<div class="albumSlide">';
        slide += '<div class="thumbGenre"><img src="'+urlthumb+'" alt="album"></div>';
        slide += '<div class="nameGenre">'+nameGenre+'</div>';
        slide += '</div>';
    
        return slide;
    
    }
    
    function addSLideToListGenre(slide){
        let listGenre =  document.getElementById('wrpSlider');
        listGenre.innerHtml += slide;
    }
