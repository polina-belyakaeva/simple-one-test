import React from 'react';
import styles from './HeaderTop.module.scss';
import { useMediaQuery } from 'react-responsive';
import simpleOneLogo from '../../assets/images/logo-header.svg';
import sidebarIconDark from '../../assets/images/sidebar-icon-dark.svg';
import avatarHeader from '../../assets/images/avatar-header.svg';
import { Input, Avatar, Button } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import colors from '../../assets/styles/__variables.scss';
import { useTranslation } from 'react-i18next';

const HeaderTop = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className={styles['header-top']}>
      <div className={styles['header-top__logo']}>
        <img
          src={isMobile ? sidebarIconDark : simpleOneLogo}
          alt={isMobile ? 'Sidebar' : 'SimpleOne logo'}
          className={styles.header__logoImage}
        />
      </div>
      <div className={styles['header-top__search']}>
        <Input
          placeholder={t('header.searchInput')}
          prefix={<SearchOutlined />}
          className={styles['header-top__search-input']}
          aria-label={t('header.searchInput')}
          id={t('header.searchInput')}
        />
      </div>
      <div className={styles['header-top__user']}>
        <Avatar src={avatarHeader} alt="User avatar" />
        <span className={styles['header-top__user__username']}>Максим Галактионов</span>
        <Button
          type="text"
          icon={<SettingOutlined style={{ fontSize: 20, color: colors.textPrimary }} />}
          style={{ border: '1px solid', color: colors.borderPrimary }}
          aria-label={t('header.settings')}
          id={t('header.settings')}
        />
      </div>
    </header>
  );
};

export default HeaderTop;
