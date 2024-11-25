import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import FormTemplate from '../TaskForm/FormTemplate';
import ModalActions from './ModalActions';
import closeIcon from '../../assets/images/close-icon.svg';
import styles from './ModalWindow.module.scss';
import { useTranslation } from 'react-i18next';

const ModalWindow = ({ visible, onCancel, onCreate }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      className={styles.modal}
      closable={false}
      maskClosable={true}
      centered
      width={1290}>
      <div
        className={`${styles.modal__header} ${
          isScrolled ? styles['modal__header--with-shadow'] : ''
        }`}>
        <h2>{t('taskForm.header.subtask')}</h2>
        {!isMobile && <ModalActions onCancel={onCancel} />}
        {isMobile && (
          <Button
            onClick={onCancel}
            className={styles['modal__header__close-button']}
            aria-label="Close Modal">
            <img src={closeIcon} alt="Close icon" />
          </Button>
        )}
      </div>
      <div className={styles['modal__content-form']}>
        <h1>{t('modal.newEntry')}</h1>
        <FormTemplate className={styles.modal__form} onFinish={onCreate} />
        <footer className={styles.modal__footer}>
          {isMobile && <ModalActions onCancel={onCancel} onFinish={onCreate} />}
        </footer>
      </div>
    </Modal>
  );
};

export default ModalWindow;
