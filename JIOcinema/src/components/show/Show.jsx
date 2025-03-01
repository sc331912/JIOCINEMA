/* eslint-disable react/prop-types */
import styles from './show.module.css'
// import show from '../../assets/showsample.webp'

const Show = (props) => {
  return (
    <>
        <div className={styles.show}>
            <img src={props.movie.imageUrl} alt="poster" />
            <div className={styles.movieTitle}>
                {props.movie.name}
            </div>
        </div>
    </>
  )
}

export default Show