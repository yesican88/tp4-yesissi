const api_key = 'd25219b09e23f4a8cbeed6c5ebe7ac2a';
const hide = document.getElementsByClassName('hide-show');
const search = document.getElementById('search');

const popular = document.getElementById('popular-movies');
// const topRated = document.getElementById('top-rated-movies');
// const upcoming = document.getElementById('upcoming-movies');
// const nowPlaying = document.getElementById('now-playing-movies');
const searchContainer = document.getElementById('search-container');
let searchInfo = document.getElementById('search-movie-info');
let searchSection = document.getElementById('search-section')
let paginaActual = 1;


// /* const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
// const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
// const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
// const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}` */


// /* const onLoad = () => {
//     sectionPopular();
//     popular();
// }  */


// /* const keyPress = event => {
//     if (event.code === 'Enter') {
    
//     }
// } */

//     //Search
// /*     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
//     .then(response =>  response.json())
//     .then( resSearch => console.log(resSearch.results))

//     let dataPopular = []
//     const sectionPopular = () => {  
//         fetch(popularMovies)
//         .then(response =>  response.json())
//         .then(resPopular => dataPopular = resPopular.results)
    
//     }
//     console.log(dataPopular)

//  */

//     //TopRated
// /*     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
//         .then(response =>  response.json())
//         .then( resTopRated => console.log(resTopRated.results)) */

//         //Upcoming
// /*     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
//     .then(response =>  response.json())
//     .then( resUpcoming => console.log(resUpcoming.results))
//  */
//     //NowPlaying

// /*     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}`)
//     .then(response => response.json())
//     .then( resNowPlaying => console.log(resNowPlaying.results)) */
// const img = document.getElementById('holi')
    
// const getData = category => {
//     fetch (`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
//     .then(response => response.json())
//     .then (resData => {
//         let {results} = resData
//         otraFuncion(results)
//     })
//     // category.appendChild(donde va appendeado); YESI asi quizas??, no hace falta crear un element si ya lo tenemos en html va ni idea igual
// };
// getData('popular'); 

// // const popularMovies = getData('popular');
// // console.log(popularMovies.map(e => e.title));

// // popularMovies.foreach(e => console.log(e))

// const showTitle = arr => console.log(arr.map(e => e.title))
// const showId = arr => console.log(arr.map(e => e.id))
// const showImg = (arr, img) => {
//     arr.map(e => img.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`)
//     }

// const otraFuncion = param => {
//     showTitle(param)
//     showImg(param, img)
// }
// infoToShow(popularMovies)
// {
    //e = id
    //let preview = {poster_path, original_title}
//     resData.forEach((e) => {
//         resData.filter(poster_path, original_title)
//         return preview 
//     })
// }

// popular.onclick(document.createElement('div'))
 


// Busqueda
const searchFunction = textoBusqueda => {
    searchContainer.innerHTML = '';
    // agregar funcion para hidear
    hide();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${textoBusqueda}&page=${paginaActual}`)
        .then(response => response.json())
        .then(data => {

            if (data.results.length >= 1) {
                //  toma el json de los elementos y los guarda en la variable movie
                for (let movie of data.results) { 
                    // cloneNode copia el contenido de la variable movieNode y se lo asigna a searchedMovie
                    const searchedMovie = movieNode.cloneNode(true);
                    if (movie.poster_path) {
                        searchedMovie.children[0].src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    }
                    searchContainer.style.display = 'flex';
                    searchedMovie.children[1].innerText = movie.title;
                    searchContainer.appendChild(searchedMovie);
                    searchInfo.style.display = 'flex';
                    searchContainer.style.flexWrap = 'wrap';
                    searchContainer.style.flexDirection = 'row';
                    searchContainer.style.justifyContent = 'space-evenly';

                    getResult(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${textoBusqueda}&page=${paginaActual}`);
                    searchedMovie.onclick = () => {
                        getMovie(movie.id);
                    }
                }
            } else {
                bannerTitle.innerText = 'Y nada más Silvio Rodríguez';
            }
        });
}


search.onkeypress = (event) => {
    if (event.keyCode === 13) {
        if (search.value)
            searchFunction(search.value);
    }

}
//funcion hide (sirve para las pelis tambien, solo agregar y poner none)

const hide = () => {
    hide[0].style.display = 'none';
    searchContainer.style.display = 'none';
    searchInfo.style.display = 'none';
}



