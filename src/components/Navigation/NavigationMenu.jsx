import React from 'react';
import { FilterOutlined, RightOutlined } from '@ant-design/icons';
import { Input, Button, Menu } from 'antd';
import styles from './Navigation.module.scss';
import colors from '../../assets/styles/__variables.scss';
import noPinIcon from '../../assets/images/no-pin-icon.svg';
import menuItems from '../../assets/menuItems';
import { useTranslation } from 'react-i18next';

function NavigationMenu() {
  const { t } = useTranslation();

  const menuItemsList = menuItems.map((item, index) => ({
    key: index + 1,
    label: t(`navigation.navMenu.${item}`),
    icon: <RightOutlined style={{ color: colors.navArrow }} />,
    style: { width: 248, height: 30, margin: '10px 16px', padding: 0 },
    className: styles['navigation__menu-item'],
  }));

  return (
    <aside className={styles['navigation__menu']}>
      <div className={styles['navigation__search']}>
        <Input
          placeholder={t('navigation.navMenu.searchByMenu')}
          suffix={<FilterOutlined style={{ fontSize: 20, color: colors.borderPrimary }} />}
          className={styles['navigation__search-input']}
          name={t('navigation.navMenu.searchByMenu')}
        />
        <Button className={styles['navigation__search-pin']}>
          <img src={noPinIcon} alt="no-pin icon" />
        </Button>
      </div>
      <Menu mode="inline" defaultOpenKeys={['sub1']} items={menuItemsList} />
    </aside>
  );
}

export default NavigationMenu;
