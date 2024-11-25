import React from 'react';
import styles from './TaskForm.module.scss';
import FormTemplate from './FormTemplate.jsx';

function TaskForm() {
  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются
        редактируемыми для агента если он Caller
      </h1>
      <FormTemplate />
    </div>
  );
}

export default TaskForm;
