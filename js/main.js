// const onLoad = () => {
//     keyPress();
//     searchMovie();
// }

// const searchMovie = () => {
//     let input = document.getElementById('search-input')
//     let movieName = input.value
  
//     if (input.value !== "") {
//       input.value = ''
//       console.log('funciono')
//       // aca va funcion de recorrer api
//     }
// }

// const keyPress = event => {
//     if (event.keycode === 13) {
//         searchMovie()
//     }
// }

fetch("https://api.themoviedb.org/3/movie/550?api_key=d25219b09e23f4a8cbeed6c5ebe7ac2a")
    .then(response => response.json())
    .then(res => {
        console.log(res);
        // const {data} = res
        // data.map(({id, name}) => console.log(`id: ${id}\nname: ${name}`))
    })