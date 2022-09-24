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
            <Link href="/RegisterComic">
                <a className={styles.menuItem}>Register Comic</a>
            </Link>
            <div className={styles.categoryDiv}>NewPublishedComic</div>
            <Link href="/NewPublishedComicList">
                <a className={styles.menuSubItem}>List</a>
            </Link>
            <div className={styles.categoryDiv}>ReservableComic</div>
            <Link href="/ReservableComicList">
                <a className={styles.menuSubItem}>List</a>
            </Link>
            <div className={styles.categoryDiv}>Deprecated</div>
            <Link href="/AlreadyPublishedComic">
                <a className={styles.menuSubItem}>AlreadyPublished</a>
            </Link>
            <Link href="/ComicReview">
                <a className={styles.menuSubItem}>ComicReview[WIP]</a>
            </Link>            
        </BurgetMenu>
    );
}

export default Menu;
