import React from 'react';
import words from '../../data/allwords.json';
import styles from './WordList.module.css';
import buttonstyles from './Buttons.module.css'

const WordList = (word, onWordClick) => {
  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <button className={styles.addWordButton}>Add New Word</button>
      <ul className={styles.list}>
        {words.map((word) => (
          <li key={word.id} className={styles.wordBox} onClick={() => onWordClick(word)}>
            <p className={styles.word}>{word.english} </p>
            <div className={styles.wordButtonBox}>
              <button className={styles.wordButton}>Add</button>
              <button className={buttonstyles.wordButtonShow} data-back={word.russian} data-front="Show Translation"></button>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default WordList;
