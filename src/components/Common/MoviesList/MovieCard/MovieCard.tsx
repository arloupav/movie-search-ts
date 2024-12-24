import Card from '../../UI/Card';
import styles from './MovieCard.module.css';
import Poster from './Poster/Poster';
import Star from '../../UI/Star';
import StarAddToRated from './StarAddToRated/StarAddToRated';

const MovieCard = ({movie}:any) => {

    return (
        <Card  style={styles.cardContainer}>
            <Poster poster={movie?.poster}/>
            <div className={styles.info}>
                <h3>Super film
                    {/*{movie.title}*/}
                </h3>
                <p><span>2024</span>
                    {/*{movie.year}*/}
                </p>
                <div>
                    <Star className={styles.goldStar}  />
                    <span className={styles.bold}>8.1M
                        {/*{movie.rating.score}*/}
                    </span>
                    <span>(8.1M)
                        {/*// {movie.rating.reviews}*/}
                    </span>
                </div>
                <p><span>Genres </span>Comedy, Drama, Romance</p>
            </div>
            <div>
                <StarAddToRated isAddedToRated={true}/>
            </div>
        </Card>
    );
};

export default MovieCard;