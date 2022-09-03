import React from 'react';
import Header from 'components/commons/Header';
import styles from 'styles/Home.module.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={styles.container}>
      <Header />

      {props.children}

    </div>
  );
}

export default Layout;
