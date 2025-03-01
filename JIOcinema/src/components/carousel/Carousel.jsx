import styles from './carousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function carousel() {

  const data = [
    {
      id:'1',
      title: 'IND vs AUS',
      imageUrl:'https://i.ytimg.com/vi/ZWjwtY8lOrk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMkvrtXKxxMKeVVR1Alkw61hJA4w'
    },
    {
      id:'2',
      title: 'MI vs CSK',
      imageUrl:'https://images.moneycontrol.com/static-mcnews/2021/05/MI-vs-CSK.jpg?impolicy=website&width=1600&height=900'
    },
    {
      id:'3',
      title: 'MI vs RCB',
      imageUrl:'https://images.tv9bangla.com/wp-content/uploads/2023/03/MI-VS-RCB.jpeg'
    },
    {
      id:'4',
      title: 'IND vs NZ',
      imageUrl:'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2022/11/ind-vs-nz-highlight-1669369411.jpg'
    },
    {
      id:'5',
      title: 'IND vs SA',
      imageUrl:'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/h-1-1702580572.jpg'
    },
    
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };
  return (
    <>
    
      <div className={styles.carousel}>

          <div className={styles.cards}>

            <Slider {...settings}>
            {
              data.map((d) => (

                <div key={d.id} className={styles.card}>

                  <div className={styles.cardImage}>
                    <img src={d.imageUrl}/>

                  </div>
                  <div className={styles.cardTitle}>
                    {d.title}
                  </div>
                  {/* <button>Watch Now</button> */}
                  
                </div>

              ))
            }
            </Slider>
          </div>


      </div>
    
    </>
  )
}

export default carousel