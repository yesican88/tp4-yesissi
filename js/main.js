const api_key = 'd25219b09e23f4a8cbeed6c5ebe7ac2a'
let searchInput = ''
/* const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}` */


/* const onLoad = () => {
    sectionPopular();
    popular();
}  */


/* const keyPress = event => {
    if (event.code === 'Enter') {
    
    }
} */

    //Search
/*     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
    .then(response =>  response.json())
    .then( resSearch => console.log(resSearch.results))

    let dataPopular = []
    const sectionPopular = () => {  
        fetch(popularMovies)
        .then(response =>  response.json())
        .then(resPopular => dataPopular = resPopular.results)
    
    }
    console.log(dataPopular)

 */

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
const img = document.getElementById('holi')
    
const getData = category => {
    fetch (`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
    .then(response => response.json())
    .then (resData => {
        let {results} = resData
        otraFuncion(results)
    })
       
};
getData('popular'); 

// const popularMovies = getData('popular');
// console.log(popularMovies.map(e => e.title));

// popularMovies.foreach(e => console.log(e))

const showTitle = arr => console.log(arr.map(e => e.title))
const showId = arr => console.log(arr.map(e => e.id))
const showImg = (arr, img) => {
    arr.map(e => img.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`)
    }

const otraFuncion = param => {
    showTitle(param)
    showImg(param, img)
}
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
 

``