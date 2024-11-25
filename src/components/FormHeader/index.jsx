import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import ModalWindow from '../ModalWindow';
import styles from './FormHeader.module.scss';
import { useTranslation } from 'react-i18next';

const FormHeader = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(document.documentElement.scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const handleCreateRecord = () => {
    setIsModalVisible(false);
  };

  const castomizedBorders = { borderRadius: '4px' };

  return (
    <>
      <div className={`${styles.header} ${isScrolled ? styles['header--with-shadow'] : ''}`}>
        <div className={styles.header__title}>
          <h2>{t('taskForm.header.subtask')}</h2>
          <Button
            type="default"
            style={castomizedBorders}
            className={styles.header__buttons}
            onClick={handleOpenModal}>
            {t('taskForm.header.createButton')}
          </Button>
        </div>
        <div className={styles.header__actions}>
          <Button type="primary" style={castomizedBorders} className={styles.header__buttons}>
            {t('taskForm.header.saveButton')}
          </Button>
          <Button style={castomizedBorders} className={styles.header__buttons}>
            {t('taskForm.header.saveAndExitButton')}
          </Button>
        </div>
      </div>
      <ModalWindow
        visible={isModalVisible}
        onCancel={handleCancelModal}
        onCreate={handleCreateRecord}
      />
    </>
  );
};

export default FormHeader;
