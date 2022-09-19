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
            <div className={styles.categoryDiv}>NewPublishedComic</div>
            <Link href="/NewPublishedComicList">
                <a className={styles.menuSubItem}>List</a>
            </Link>
            <Link href="/NewPublishedComic">
                <a className={styles.menuSubItem}>Register</a>
            </Link>
            <div className={styles.categoryDiv}>ReservableComic</div>
            <Link href="/NewPublishedComicList">
                <a className={styles.menuSubItem}>List</a>
            </Link>
            <Link href="/ReservableComic">
                <a className={styles.menuSubItem}>Register</a>
            </Link>
            <Link href="/AlreadyPublishedComic">
                <a className={styles.menuItem}>AlreadyPublishedComic</a>
            </Link>
            <Link href="/ComicReview">
                <a className={styles.menuItem}>ComicReview【WIP】</a>
            </Link>            
        </BurgetMenu>
    );
}

export default Menu;
