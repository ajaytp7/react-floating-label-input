import React from 'react'
import styles from './style.module.css'

// Usage in a React component
const ReactFloatingLabelInput = (props: any) => {
  const { backgroundColor, borderColor, placeholder, id, onInput } = props;
  return (
    <div className={styles.field}>
      <input id={id} onInput={onInput} />
      <label>{placeholder}</label>
    </div>
  );
};

export default ReactFloatingLabelInput;
