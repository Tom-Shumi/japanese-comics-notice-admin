import React from 'react';
import Header from 'components/commons/Header';
import styles from 'styles/Layout.module.css'
import Menu from 'components/commons/Menu';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <h1>Japanese Comics Notice Admin test</h1>
      <hr />
      {props.children}

    </div>
  );
}

export default Layout;
