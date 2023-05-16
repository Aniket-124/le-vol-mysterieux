import React, { useState } from 'react';
import styles from './Prompt.module.scss';
import cx from 'classnames';


const CharacterInput = ({ val=[], handleSubmit, placeholder = 'Enter your answer' }) => {
  const [inputValues, setInputValues] = useState(Array.from(val).map(v => {
    if (v === '_') return ''
    else return v
  }));

  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // Move focus to the next input field
    if (value !== '' && index < val.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    // Move focus to the previous input field on backspace
    if (event.keyCode === 8 && event.target.value === '' && index > 0) {
      const previousInput = document.getElementById(`input-${index - 1}`);
      previousInput.focus();
    }
  };

  return (
    <form className={styles.promptBox} onSubmit={(e) => {e.preventDefault(); handleSubmit(inputValues.join(''))}}>
      <div className={styles.label}>{placeholder}</div>
      <div className={styles.submitPrompt}>
        {inputValues.map((value, index) => (
          <input
            key={index}
            id={`input-${index}`}
            type="text"
            maxLength="1"
            disabled={val[index] !== '_'}
            value={value}
            required
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>
      <div className={styles.submitBtn}>
        <button 
          type='submit'
          className={cx(styles.btn, styles['button-animation'])}
        >Submit</button>
      </div>
    </form>
  );
};

export default CharacterInput;