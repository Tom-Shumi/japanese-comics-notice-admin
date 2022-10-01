import React from 'react';
import Header from 'components/commons/Header';
import styles from 'styles/Layout.module.css'
import Menu from 'components/commons/Menu';

interface LayoutProps {
    children: React.ReactNode
    color: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={`${styles.container} ${styles[props.color]}`}>
      <Header />
      <Menu />
      <h1>Comic &amp; LightNovel Notice Admin</h1>
      <hr />
      {props.children}

    </div>
  );
}

export default Layout;
