import React from 'react';
import styles from './Card.module.css';

const WordCard = ({ word, definition }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{word}</h2>
      <p className={styles.definition}>{definition}</p>
    </div>
  );
};

export default WordCard;