import styles from './Card.module.css';
import React from 'react';

interface Props {
    style: string;
    children: React.ReactNode;
}

const Card = ({style, children}: Props) => {
    return (
        <div className={`${styles.card} ${style}`}>
            {children}
        </div>
    );
};

export default Card;