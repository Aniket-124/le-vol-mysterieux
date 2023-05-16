import React, { useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import Typewriter from '../components/Typewriter';

import storyExcerpts from '../data/story';
import Prompt from '../components/Prompt';

const Game = () => {
  const [currentExcerpt, setCurrExcerpt] = useState(0);
  const [currentScene, setCurrScene] = useState(0);
  const [bgImgUrl, setBgImgUrl] = useState('');

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

  const handleSubmit = (val) => {
    console.log(val);
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
          <main className={styles.main}>
            <div className={styles.story}>
              {storyExcerpts[currentExcerpt] ? (<>
                <Typewriter gotoNext={handleSceneChange} text={storyExcerpts[currentExcerpt].scenes[currentScene].text } />
                {currentScene >= storyExcerpts[currentExcerpt].scenes.length - 1 && 
                  <Prompt
                    maxLength={storyExcerpts[currentExcerpt].form.input.ansLen} 
                    placeholder={storyExcerpts[currentExcerpt].form.input.placeholder} 
                    handleSubmit={handleSubmit} />
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