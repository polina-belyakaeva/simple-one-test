import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import styles from './Navigation.module.scss';
import sidebarIcon from '../../assets/images/sidebar-icon.svg';
import sidebarIconDark from '../../assets/images/sidebar-icon-dark.svg';

function NavigationTabs() {
  const isTablet = useMediaQuery({ maxWidth: 991 });

  return (
    <aside className={styles['navigation__tabs']}>
      <Button
        type="text"
        className={styles['navigation__tabs-tab']}
        style={{ width: 56, height: 56, padding: 16 }}>
        <img
          src={isTablet ? sidebarIconDark : sidebarIcon}
          alt="sidebar icon"
          style={{ width: 24, height: 24 }}
        />
      </Button>
      <Button
        icon={<StarOutlined style={{ fontSize: 24 }} />}
        type="text"
        className={styles['navigation__tabs-tab']}
        style={{ width: 56, height: 56, padding: 16 }}
      />
    </aside>
  );
}

export default NavigationTabs;
