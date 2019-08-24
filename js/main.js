const api_key = 'd25219b09e23f4a8cbeed6c5ebe7ac2a'
let searchInput = ''
//const img = document.getElementById('holi') 
/* const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}` */


// const onLoad = () => {
//    showPopular();
// } 


/* const keyPress = event => {
    if (event.code === 'Enter') {    
    }
} */

    //Search
 /*   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
    .then(response =>  response.json())
    .then( resSearch => console.log(resSearch.results))*/



    
//FUNCION QUE TRAE INFO DE LAS APIS Y LAS FILTRA POR LA INFO A MOSTRAR
const getData = category => {
    fetch (`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
    .then (response => response.json())
    .then (resData => {
        let {results} = resData
        let movies = results.map(e => apiMovieToMovie(e))
        //infoToShow(results)
    })   
};

getData('popular')

//TRANSFORMA 
const apiMovieToMovie = apiMovie => {
    let {title,id, poster_path} = apiMovie
    let movie = {
        title: title, 
        id: id, 
        img: `https://image.tmdb.org/t/p/w500/${poster_path}`
    }
    return movie
}

//INFORMACION DE LA PELICULA
/* const showTitle = arr => console.log(arr.map(e => e.title))
const showId = arr => console.log(arr.map(e => e.id))
const showImg = (arr, img) => {
    arr.map(e => img.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`)
    }  */
/* const descripcion
const genero
const release */
   
const infoToShow = param => {
    showTitle(param)
    showImg(param, img)
}

const popularMovies = getData('popular');

const showPopular = () => {
    let containerPopular = document.getElementById('lalala')
    containerPopular.innerHTML= ''
    let movies = document.createElement("a");
    movies.innerText= e.popularMovies;
    containerPopular.appendChild(e);    
    }

showPopular()



/* const showPopular = () => {
    const popularMovies = getData('popular');
    let containerPopular = document.getElementById('lalala')
    let movies = containerPopular.createElemen('div')
    movies.appendchild(popularMovies)  
} */


 

