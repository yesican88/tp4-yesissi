const api_key = 'd25219b09e23f4a8cbeed6c5ebe7ac2a'
let searchInput = ''
const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`


const onLoad = () => {
    sectionPopular();
    popular();
} 

const popular = () => {
    let popular = document.getElementById('popular')
}

    const sectionPopular = () => {  
        fetch(popularMovies)
        .then(response =>  response.json())
        .then(resPopular => console.log(resPopular.results))
    }

/* const keyPress = event => {
    if (event.code === 'Enter') {
    
    }
} */

    //Search
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
    .then(response =>  response.json())
    .then( resSearch => console.log(resSearch.results))

    //TopRated
/*     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        .then(response =>  response.json())
        .then( resTopRated => console.log(resTopRated.results)) */

        //Upcoming
/*     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
    .then(response =>  response.json())
    .then( resUpcoming => console.log(resUpcoming.results))
 */
    //NowPlaying

/*     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}`)
    .then(response => response.json())
    .then( resNowPlaying => console.log(resNowPlaying.results)) */
    
const getData = (sections) => {
    fetch (sections)
    .then(response => response.json())
    .then (resData => resData.results) 
    resData = []    
};

const infoToShow = (resData) => {
    e = id
    //let preview = {poster_path, original_title}
    resData.forEach((e) => {
        resData.filter(poster_path, original_title)
        return preview 
    })
}

popular.onclick(document.createElement('div'))

//prueba de creación de objeto con la data que tenemos que buscar
//let data = resData.results.filter( e => e.poster_path, e.original_title) {}