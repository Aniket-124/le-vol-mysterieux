import { useState, useEffect } from "react";
import styles from './Typewriter.module.scss'

const Typewriter = ({ text='', gotoNext=null }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let nextTimer;
    const typingInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);

        if (gotoNext !== null) {
          nextTimer = setTimeout(() => {
            gotoNext()
          }, 2000);
        };
        return;
      }

      currentIndex++;
      setDisplayText(text.slice(0, currentIndex));
    }, 100); // Adjust the interval duration to control the typing speed

    return () => {
      if (nextTimer) clearTimeout(nextTimer);
      clearInterval(typingInterval);
    };
  }, [text]);

  return displayText.length > 0 && <div className={styles.typewriter}>{displayText}</div>;
};

export default Typewriter;