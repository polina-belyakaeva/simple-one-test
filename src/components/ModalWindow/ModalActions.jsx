import React from 'react';
import { Button } from 'antd';
import styles from './ModalWindow.module.scss';
import { useTranslation } from 'react-i18next';

const ModalActions = ({ onCancel }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.modal__header__actions}>
      <Button type="primary" htmlType="submit" className={styles.modal__button}>
        {t('modal.actions.saveButton')}
      </Button>
      <Button onClick={onCancel}>{t('modal.actions.cancelButton')}</Button>
    </div>
  );
};

export default ModalActions;
