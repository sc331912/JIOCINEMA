/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import styles from './tags.module.css'
import { useState } from 'react'

const Tags = () => {

    let [tags, setTags] = useState([

        "For You",
        "Action",
        "Romantic Comedy",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Fantasy",
        "Documentary",
        "Crime",
        "Adventure",
        "Mystery",
        "Horror",
        "Animated",
        "Historical",
        // "Superhero",

    ])
  return (
    <>
    <div className={styles.tags}>

    {

        tags.map((tag) => {
            return <p className={styles.tag}>{tag}</p>
        })

    }

    </div>
    
    </>

  )
}

export default Tags