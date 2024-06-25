import React from 'react';
import words from '../../data/allwords.json';
import styles from './WordList.module.css';

const WordList = () => {
  return (
    <div className={styles.words}>
      <h2 className={styles.wordsTitle}>Список слов</h2>
      <ul className={styles.wordsList}>
        {words.map((word) => (
          <li key={word.id} className={styles.wordsItem}>
            {word.english} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
