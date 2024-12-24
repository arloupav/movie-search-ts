import styles from './Poster.module.css';
import emptyPoster from '../../../../../assets/emptyPoster.svg';

const Poster = ({poster}: { poster: boolean}) => {


    return (
        poster ?
            <img className={styles.poster}
                // src={poster}
                 alt="poster"
            />
            :
            <div className={`${styles.poster} ${styles.empty}`}>
                <img src={emptyPoster} alt="empty poster"/>
                <span>No Poster</span>
            </div>
    );
};

export default Poster;