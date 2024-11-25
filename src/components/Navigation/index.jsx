import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavigationTabs from './NavigationTabs';
import NavigationMenu from './NavigationMenu';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.navigation}>
      {!isMobile && <NavigationTabs />}
      {!isTablet && <NavigationMenu />}
    </div>
  );
};

export default Navigation;
