import './App.css';
import React, { useState } from 'react';
import WordCard from './components/wordCard/Card';
import WordList from './components/wordList/WordList';
import words from './data/allwords.json';



function App() {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  return (
  <div className='styles.word-list'>
    <div>
      <WordList words={words} onWordClick={handleWordClick} />
      {selectedWord && (
        <WordCard word={selectedWord.english} definition={selectedWord.russian} />
      )}
    </div>
  </div>

  );
}

export default App;
