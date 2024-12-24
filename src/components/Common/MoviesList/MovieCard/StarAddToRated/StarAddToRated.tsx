import styles from '../MovieCard.module.css';
import {useState} from 'react';
import Star from '../../../UI/Star';

const StarAddToRated = ({isAddedToRated}: { isAddedToRated: boolean }) => {
    const [isAdded, setIsAdded] = useState(isAddedToRated);

    const isAddedHandler = ():void => {
        console.log('isAddedHandler');
         setIsAdded(!isAdded);
    };

    return (
        <Star onClickHandler={isAddedHandler}
              className={isAdded ? styles.purpleStar : styles.greyStar}
        />
    );
};

export default StarAddToRated;