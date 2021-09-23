const dataApi = fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre");

dataApi
  .then(async (responseData) => {
    console.log(responseData);

    const response = await responseData.json();
    // const response = await responseData;
    console.log(response);
    let genre = document.querySelector('#genre');
    try {
      for (let i = 1; i < 11 ; i++) {
        const dataPicture = response.data[i].picture;
        const dataName = response.data[i].name;
        let myImg = document.createElement('img');
        let myTitle = document.createElement('p');
        let myGenre = document.createElement('div');
        myImg.src = datataPicture;
        myTitle.textContent = datataName;
        myGenre.appendChild(myImg);
        myGenre.appendChild(myTitle);
        genre.appendChild(myGenre);
      }

    } catch (err) {
      console.log(err);
    }
  })

  .catch((err) => {
    console.log(err)
  })
