import React, { useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import Typewriter from '../components/Typewriter';

import storyExcerpts from '../data/story';

const Game = () => {
  const [currentExcerpt, setCurrExcerpt] = useState(0);
  const [currentScene, setCurrScene] = useState(0);
  const [bgImgUrl, setBgImgUrl] = useState('');
  const [ans, setAns] = useState('');

  const handleSceneChange = () => {
    if (currentScene < storyExcerpts[currentExcerpt].scenes.length - 1) {
      setCurrScene((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if(storyExcerpts[currentExcerpt]) {
      setBgImgUrl(storyExcerpts[currentExcerpt].scenes[currentScene].bg)
    }
  }, [currentScene])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('nextScene');
    setCurrScene(0);
    setCurrExcerpt(prev => prev + 1);
  }

  return (
    <div className={styles.back} style={{backgroundImage: `url(${bgImgUrl})`}}>
      <div className={styles.backdropBlur}>
        <div className={styles.game} style={{ backgroundImage: `url(${bgImgUrl})` }}>
          <header className='page-header'>
            <h1 className='heading'>The Mysterious Heist</h1>
          </header>
          <main>
            <div className={styles.story}>
              {storyExcerpts[currentExcerpt] ? (<>
                <Typewriter gotoNext={handleSceneChange} text={storyExcerpts[currentExcerpt].scenes[currentScene].text } />
                {storyExcerpts[currentExcerpt].scenes[currentScene].form !== undefined && 
                  <form autoComplete="off" id='ansForm' onSubmit={handleSubmit}>
                    <input type='text' value={ans} onChange={e => {setAns(e.target.value)}} required placeholder='Guess the word' />
                    <button type='submit'>Submit</button>
                  </form>
                }
              </>) : (
                <p>Story completed</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Game;