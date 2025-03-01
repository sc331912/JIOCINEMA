/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../components/header/Header"
import Tags from "../components/tags/Tags"
import Channels from "../components/channels/Channels"
import Carousel from "../components/carousel/Carousel"
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";
import { useEffect, useState } from "react";


export default function Home()
{

    let [movies,setMovies] = useState([])
    let [featuredMovies,setFeaturedMovies] = useState([])
    let [dramaMovies,setDramaMovies] = useState([])
    let [hindiMovies,setHindiMovies] = useState([])
    let [topMovies,setTopMovies] = useState([])
    let [japaneseMovies,setJapaneseMovies] = useState([])
    

    useEffect( async () => {

        try{

            let movieResponse = await fetch("http://localhost:3000/movies")
            let moviesData = await movieResponse.json()
            setMovies(moviesData)

            let featMovies = moviesData.filter((movie)=>{return movie.featured === true})
            // console.log(featMovies)
            setFeaturedMovies(featMovies.slice(0,4))
            let draMovies = moviesData.filter((movie)=>{return movie.genre.includes('Drama')})
            // console.log(draMovies)
            setDramaMovies(draMovies.slice(0,6))

            let hinMovies = moviesData.filter((movie)=>{return movie.language === 'Hindi'})
            // console.log(hinMovies)
            setHindiMovies(hinMovies.slice(0,6))

            let topMovies = moviesData.filter((movie)=>{return movie.imdb >= 8.5})
            // console.log(topMovies)
            setTopMovies(topMovies.slice(0,6))

            let japMovies = moviesData.filter((movie)=>{return movie.country==='Japan'})
            setJapaneseMovies(japMovies.slice(0,6))


        }
        catch(err){
            console.log(err)
        }

    },[])
    
      
    return(
        <>
            <Header movies={movies}/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured movies={featuredMovies}/>
            <Shows title="Drama Movies" movies={dramaMovies}/>
            <Shows title="Hindi Movies" movies={hindiMovies}/>
            <Shows title="Highly Rated Movies" movies={topMovies}/>
            <Shows title="Japanese Movies" movies={japaneseMovies}/>

        </>
    )
}