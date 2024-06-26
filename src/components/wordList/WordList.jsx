import React, { useState } from 'react';
import words from '../../data/allwords.json';
import WordCard from '../wordCard/Card'
import Modal from '../templates/Modal'
import styles from './WordList.module.css';
import buttonstyles from './Buttons.module.css'

const WordList = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWord(null);
  };

  return (
    <div className={styles.words}>
      <h2 className={styles.title}>Список слов</h2>
      <button className={styles.addWordButton}>Add New Word</button>
      <ul className={styles.list}>
        {words.map((word) => (
          <li key={word.id} className={styles.wordBox} onClick={() =>  handleWordClick(word)}>
            <p className={styles.word}>{word.english} </p>
            <div className={styles.wordButtonBox}>
              <button className={styles.wordButton}>Add</button>
              <button className={buttonstyles.wordButtonShow} data-back={word.russian} data-front="Show Translation"></button>
            </div>
          </li>
        ))}

      </ul>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedWord && <WordCard word={selectedWord.english} translation={selectedWord.russian} transcription={selectedWord.transcription} />}
      </Modal>

    </div>
  );
};

export default WordList;
