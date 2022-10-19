import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import styles from 'styles/Menu.module.css';
import { slide as BurgetMenu } from "react-burger-menu";

const Menu: NextPage = () => {
    return (
        <BurgetMenu>
            <Link href="/">
                <a className={styles.menuItem}>Home</a>
            </Link>
            <div className={styles.categoryDiv}>English Comic</div>
            {/* <Link href="/RegisterComic">
                <a className={styles.menuSubItem}>Register</a>
            </Link> */}
            <Link href="/NewPublishedComicList">
                <a className={styles.menuSubItem}>NewPublishedList</a>
            </Link>
            <Link href="/ReservableComicList">
                <a className={styles.menuSubItem}>ReservableList</a>
            </Link>
            <div className={styles.categoryDiv}>ライトノベル</div>
            <Link href="/RegisterLightNovel">
                <a className={styles.menuSubItem}>登録</a>
            </Link>
            <Link href="/NewPublishedLightNovelList">
                <a className={styles.menuSubItem}>新刊リスト</a>
            </Link>
            <Link href="/ReservableLightNovelList">
                <a className={styles.menuSubItem}>予約可能リスト</a>
            </Link>    
        </BurgetMenu>
    );
}

export default Menu;
