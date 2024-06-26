import React from 'react';
import styles from './Card.module.css';
import cardvoice from './cardvoice.svg';
import Translation from './Translation';


const WordCard = (props) => {
  return (
    <div className={styles.card} {...props}>
      <h2 className={styles.word}>{props.word}</h2>
      <p className={styles.transcription}>{props.transcription}</p>
      <img src={cardvoice} alt="CVoice" className={styles.imgvoice} />
      <Translation translation={props.translation} />
      {/* <p className={styles.translation}>{props.translation}</p> */}
    </div>
  );
};

export default WordCard;