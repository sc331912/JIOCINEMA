/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from './header.module.css'
import JCLogo from '../../../src/assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import { useEffect, useState } from 'react'
import Show from '../show/Show'


const Header = (props) => {

    let navLinks = ["Home","Sports","Movies","TV Shows","More"]
    let [searchTitle,setSearchTitle] = useState("")
    let [filteredMovies,setFilteredMovies] = useState([])

    useEffect(()=>{

        if(searchTitle!=="")
        {
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().includes(searchTitle.toUpperCase())
            })
            setFilteredMovies(filterMovies)
            
        }
        else
        {
            setFilteredMovies([])
        }
    },[searchTitle])

  return (
    <>
       <header className={styles.header}>

            <nav className={styles.navigation}>

                <div className={styles.logo}>

                    <a href='#'><img src={JCLogo}/></a>
                    

                    <div className={styles.premium}>
                        <img src={crown}/>
                        <p>Go Premium</p>
                    </div>

                </div>

                <ul className={styles.navLinks}>
                    {
                        navLinks.map((link)=>{
                            return <li className={styles.navLink}>{link}</li>
                        })
                    }
                </ul>


            </nav>

            <div className={styles.search}>

                <div className={styles.searchBox}>

                    <div className={styles.headerIcon1}>
                       <img src={searchIcon}/>
                    </div>

                    <input type="text" 
                    onChange={(event)=>{
                        setSearchTitle(event.target.value)
                    }}
                    className={styles.searchInput} placeholder='Movie, Shows and more  '/>

                    <div className={styles.headerIcon2}>
                       <img src={voiceSearchIcon}/>
                    </div>

                </div>
                <img className={styles.usericon} src='https://www.jiocinema.com/images/profile/avatar_guest.svg'/>
            </div>

       </header>
       {

            filteredMovies.length!==0?(

                <div className={styles.searchResults}>
                {

                    filteredMovies.map((movie)=>{
                        return <Show movie={movie}/>
                    })

                }
            </div>
            ):null
            

       }
    </>
    
  )
}

export default Header