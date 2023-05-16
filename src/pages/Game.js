import React, { useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import Typewriter from '../components/Typewriter';
import axios from 'axios';
import { storyExcerpts, success as successExcerpt, failure as failureExcerpt } from '../data/story';
import Prompt from '../components/Prompt';
import { NavLink } from 'react-router-dom';
import Alert from '../components/Alert';

const Game = () => {
  const [attempts, setAttempts] = useState(6);
  const [currentExcerpt, setCurrExcerpt] = useState(0);
  const [currentScene, setCurrScene] = useState(0);
  const [bgImgUrl, setBgImgUrl] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');

  const handleSceneChange = () => {
    if (currentScene < storyExcerpts[currentExcerpt].scenes.length - 1) {
      setCurrScene((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (storyExcerpts[currentExcerpt]) {
      setBgImgUrl(storyExcerpts[currentExcerpt].scenes[currentScene].bg)
    }
  }, [currentScene])


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Send a request to the backend to validate the token
          const response = await axios.get("http://localhost:5000/checkLogged", {
            headers: { Authorization: `Bearer ${token}` },
          });

          // If the response is successful, the user is logged in
          if (response.status === 200) {
            setLoggedIn(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoginStatus();
  }, []);


  function logout() {
    axios.post('http://localhost:5000/logout')
      .then(() => {
        localStorage.removeItem('token');
        console.log('Logout successful');
        setLoggedIn(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleSubmit = (val) => {
    setAlertMsg('')
    setAlertSeverity('info')
    if (val.toUpperCase() === storyExcerpts[currentExcerpt].ans) {
      setCurrScene(0);
      setCurrExcerpt(prev => prev + 1);
      setAlertMsg('Correct!')
      setAlertSeverity('success')
    } else if (val.toUpperCase() === storyExcerpts[currentExcerpt].deadend) {
      setAttempts(0);
      setAlertMsg('You\'ve reached a Dead-End')
      setAlertSeverity('error')
    } else {
      setAlertMsg(`Incorrect! ${attempts - 1} attempts left`)
      setAttempts(attempts => attempts - 1);
      setAlertSeverity('warning')
    }
  }

  return (
    <div>
      <Alert severity={alertSeverity} message={alertMsg} />
      <div>
        <div className={styles.back} style={{ backgroundImage: `url(${bgImgUrl})` }}>
          <div className={styles.backdropBlur}>
            <div className={styles.game} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), transparent), url(${bgImgUrl})` }}>
              <header className='page-header'>
                <h1 className='heading'>The Mysterious Heist</h1>
              </header>
              <main className={styles.main}>
                {true ? (
                  attempts ? (
                    <div className={styles.story}>
                      {storyExcerpts[currentExcerpt] ? (<>
                        <Typewriter gotoNext={handleSceneChange} text={storyExcerpts[currentExcerpt].scenes[currentScene].text} />
                        {currentScene >= storyExcerpts[currentExcerpt].scenes.length - 1 && (
                          storyExcerpts[currentExcerpt].form.input ?
                            <Prompt
                              val={storyExcerpts[currentExcerpt].form.input.hint}
                              placeholder={storyExcerpts[currentExcerpt].form.input.placeholder}
                              handleSubmit={handleSubmit} /> : <NavLink to='/game'>Try again</NavLink>
                        )}
                      </>) : (
                        <Typewriter text={failureExcerpt.scenes[0].text} />
                      )}
                    </div>
                  ) : (<div className={styles.story}>
                    <Typewriter text={failureExcerpt.scenes[0].text} />
                      <a className={styles.tryAgain} href='/game'>Try again</a>
                  </div>)
                ) : (
                  <div className={styles.login}>
                    <h2>Please log in to access the game</h2>
                    <NavLink to="/login">Login</NavLink>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>

  )
}

export default Game;